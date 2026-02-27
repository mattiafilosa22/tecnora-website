<?php
/**
 * Tecnora Theme – functions.php
 *
 * Registra asset dal manifest Vite, imposta il supporto WordPress,
 * e include l'ACF field registration e il data bridge wp_localize_script.
 *
 * @package Tecnora
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// ─── Costanti ─────────────────────────────────────────────────────────────────
define( 'TECNORA_VERSION', '1.0.0' );
define( 'TECNORA_DIST',    get_template_directory()     . '/dist' );
define( 'TECNORA_DIST_URI', get_template_directory_uri() . '/dist' );

// ─── Theme Setup ──────────────────────────────────────────────────────────────
add_action( 'after_setup_theme', 'tecnora_setup' );
function tecnora_setup() {
    // Permette a WP di gestire il tag <title>
    add_theme_support( 'title-tag' );
    // Supporto immagini in evidenza
    add_theme_support( 'post-thumbnails' );
    // Markup HTML5 per form, commenti, gallerie, ecc.
    add_theme_support( 'html5', [
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script',
    ] );
}

// ─── Caricamento Asset da Vite Manifest ───────────────────────────────────────
add_action( 'wp_enqueue_scripts', 'tecnora_enqueue_assets' );
function tecnora_enqueue_assets() {
    $manifest_path = TECNORA_DIST . '/.vite/manifest.json';

    if ( ! file_exists( $manifest_path ) ) {
        // Fallback: avvisa in WP_DEBUG se il manifest non esiste
        if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
            error_log( '[Tecnora] manifest.json non trovato in: ' . $manifest_path );
        }
        return;
    }

    $manifest = json_decode( file_get_contents( $manifest_path ), true );

    if ( ! is_array( $manifest ) ) {
        return;
    }

    // Vite genera la chiave come percorso relativo al file entry (index.html)
    $entry_key = 'index.html';

    if ( ! isset( $manifest[ $entry_key ] ) ) {
        // Fallback: cerca la prima entry con isEntry
        foreach ( $manifest as $key => $chunk ) {
            if ( ! empty( $chunk['isEntry'] ) ) {
                $entry_key = $key;
                break;
            }
        }
    }

    if ( ! isset( $manifest[ $entry_key ] ) ) {
        return;
    }

    $entry = $manifest[ $entry_key ];

    // ── JavaScript principale ──────────────────────────────────────────────────
    $js_file = $entry['file'] ?? null;
    if ( $js_file ) {
        wp_enqueue_script(
            'tecnora-app',
            TECNORA_DIST_URI . '/' . $js_file,
            [],
            null,
            [ 'in_footer' => true ]
        );
    }

    // ── CSS principale ─────────────────────────────────────────────────────────
    if ( ! empty( $entry['css'] ) ) {
        foreach ( $entry['css'] as $index => $css_file ) {
            wp_enqueue_style(
                'tecnora-style-' . $index,
                TECNORA_DIST_URI . '/' . $css_file,
                [],
                null
            );
        }
    }

    // ── CSS di chunks aggiuntivi (code splitting) ──────────────────────────────
    if ( ! empty( $entry['imports'] ) ) {
        foreach ( $entry['imports'] as $import_key ) {
            if ( isset( $manifest[ $import_key ]['css'] ) ) {
                foreach ( $manifest[ $import_key ]['css'] as $idx => $css_file ) {
                    wp_enqueue_style(
                        'tecnora-chunk-style-' . sanitize_title( $import_key ) . '-' . $idx,
                        TECNORA_DIST_URI . '/' . $css_file,
                        [],
                        null
                    );
                }
            }
        }
    }
}

// ─── Include sottocartelle ────────────────────────────────────────────────────
require_once get_template_directory() . '/inc/wp-data.php';

// Includi acf-fields.php solo se ACF Free è attivo
if ( function_exists( 'acf_add_local_field_group' ) ) {
    require_once get_template_directory() . '/inc/acf-fields.php';
}

// ─── Rimuovi emoji WordPress (performance) ────────────────────────────────────
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

// ─── Aggiungi type="module" al bundle Vite ────────────────────────────────────
// I bundle generati da Vite usano import.meta e la sintassi ES module,
// che richiedono type="module" nel tag <script>.
add_filter( 'script_loader_tag', 'tecnora_add_module_type', 10, 3 );
function tecnora_add_module_type( $tag, $handle, $src ) {
    if ( 'tecnora-app' !== $handle ) {
        return $tag;
    }
    // Sostituisce il tag <script con <script type="module"
    return str_replace( '<script ', '<script type="module" ', $tag );
}

