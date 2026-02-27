<?php
/**
 * Tecnora Theme – inc/wp-data.php
 *
 * Trasferisce i dati WordPress/ACF a React tramite window.wpData
 * usando wp_localize_script(). Viene chiamato dopo che il JS è in coda.
 *
 * Struttura window.wpData:
 * {
 *   pageSlug:  string,       // slug WP della pagina corrente
 *   pageTitle: string,       // titolo WP della pagina
 *   homeUrl:   string,       // home URL del sito
 *   siteUrl:   string,       // site URL WordPress
 *   basePath:  string,       // percorso base per BrowserRouter (es. "/")
 *   nonce:     string,       // WP nonce per richieste REST
 *   restUrl:   string,       // URL REST API
 *   fields:    object,       // campi ACF della pagina corrente
 * }
 *
 * @package Tecnora
 */

if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'wp_enqueue_scripts', 'tecnora_localize_wp_data', 20 );

function tecnora_localize_wp_data(): void {
    // Lo script deve essere già in coda per poter usare wp_localize_script
    if ( ! wp_script_is( 'tecnora-app', 'enqueued' ) ) {
        return;
    }

    $page_id   = get_queried_object_id();
    $page      = get_post( $page_id );
    $page_slug = $page ? $page->post_name : '';
    $acf_active = function_exists( 'get_field' );

    // ── Dati ACF della pagina corrente ────────────────────────────────────────
    $fields = [];

    if ( $acf_active && $page_id ) {
        // Recupera tutti i campi ACF della pagina in un unico array
        $all_fields = get_fields( $page_id );
        if ( is_array( $all_fields ) ) {
            // Sanitizza i dati: serializza le immagini ACF come oggetti {url, alt, title}
            foreach ( $all_fields as $field_name => $field_value ) {
                if ( is_array( $field_value ) && isset( $field_value['url'] ) ) {
                    // Campo immagine ACF (return_format: 'array')
                    $fields[ $field_name ] = [
                        'url'   => esc_url( $field_value['url'] ?? '' ),
                        'alt'   => esc_attr( $field_value['alt'] ?? '' ),
                        'title' => esc_attr( $field_value['title'] ?? '' ),
                        'id'    => (int) ( $field_value['ID'] ?? 0 ),
                    ];
                } elseif ( is_string( $field_value ) ) {
                    // Campo testo: permetti HTML de wp_kses_post (wysiwyg)
                    $fields[ $field_name ] = wp_kses_post( $field_value );
                } else {
                    $fields[ $field_name ] = $field_value;
                }
            }
        }
    }

    // ── Calcola basePath per BrowserRouter ────────────────────────────────────
    // Se WP è installato in una sottocartella, BrowserRouter deve conoscerla
    $home_url = home_url( '/' );
    $site_url = site_url( '/' );
    $base_path = '/';
    if ( $home_url !== $site_url ) {
        $parsed   = parse_url( $home_url );
        $base_path = rtrim( $parsed['path'] ?? '/', '/' ) . '/';
    }

    // ── Mappa slug WP → route React ───────────────────────────────────────────
    // WP usa slug come "chi-siamo", React usa path "/chi-siamo"
    $route_map = [
        ''                    => '/',
        'home'                => '/',
        'chi-siamo'           => '/chi-siamo',
        'gare-appalto'        => '/gare-appalto',
        'opere-pubbliche'     => '/opere-pubbliche',
        'facility-management' => '/facility-management',
        'sicurezza'           => '/sicurezza',
        'ambiente'            => '/ambiente',
        'innovazione'         => '/innovazione',
        'contatti'            => '/contatti',
    ];

    $current_route = $route_map[ $page_slug ] ?? '/' . ltrim( $page_slug, '/' );

    // ── Payload finale ────────────────────────────────────────────────────────
    $wp_data = [
        'pageSlug'     => esc_attr( $page_slug ),
        'pageTitle'    => esc_html( get_the_title( $page_id ) ),
        'currentRoute' => esc_attr( $current_route ),
        'homeUrl'      => esc_url( $home_url ),
        'siteUrl'      => esc_url( $site_url ),
        'basePath'     => esc_attr( $base_path ),
        'themeUrl'     => esc_url( get_template_directory_uri() ),
        'nonce'        => wp_create_nonce( 'wp_rest' ),
        'restUrl'      => esc_url( get_rest_url() ),
        'isHome'       => is_front_page(),
        'fields'       => $fields,
        'acfActive'    => $acf_active,
    ];

    wp_localize_script( 'tecnora-app', 'wpData', $wp_data );
}
