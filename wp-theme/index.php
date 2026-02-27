<?php
/**
 * Tecnora Theme – index.php
 *
 * Template principale. Carica header e footer WordPress e
 * fornisce il div #root come mount point della React SPA.
 *
 * @package Tecnora
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<main id="main-content" tabindex="-1">
    <div id="root" aria-live="polite" aria-atomic="false">
        <?php
        /**
         * Noscript fallback per crawler e utenti senza JavaScript.
         * Il contenuto viene rimpiazzato da React al caricamento.
         */
        ?>
        <noscript>
            <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
                <h1>Tecnora S.R.L.</h1>
                <p>
                    Questo sito richiede JavaScript per funzionare correttamente.<br>
                    Per visualizzare il contenuto, abilita JavaScript nel tuo browser.
                </p>
                <p>
                    Per informazioni, contattaci a:
                    <a href="mailto:info@tecnora.it">info@tecnora.it</a>
                </p>
            </div>
        </noscript>
    </div>
</main>

<?php get_footer(); ?>
