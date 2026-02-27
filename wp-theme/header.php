<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <?php
    /**
     * ─── SEO Meta Tags Dinamici da ACF ─────────────────────────────────────────
     * I meta tag vengono generati lato PHP per garantire la scansione ai bot/crawler
     * anche prima che React abbia idratato il DOM.
     */
    $page_id     = get_queried_object_id();
    $page_slug   = get_post_field( 'post_name', $page_id );

    // Leggi campi ACF se disponibili
    $acf_active  = function_exists( 'get_field' );
    $meta_title  = $acf_active ? get_field( 'seo_title', $page_id ) : '';
    $meta_desc   = $acf_active ? get_field( 'seo_description', $page_id ) : '';
    $hero_image  = $acf_active ? get_field( 'hero_image', $page_id ) : null;

    // Fallback su titolo/descrizione WP nativi
    if ( empty( $meta_title ) ) {
        $meta_title = get_the_title( $page_id );
        if ( is_front_page() ) {
            $meta_title = get_bloginfo( 'name' ) . ' – Ingegneria per la Pubblica Amministrazione';
        } else {
            $meta_title = $meta_title . ' | ' . get_bloginfo( 'name' );
        }
    }
    if ( empty( $meta_desc ) ) {
        $meta_desc = get_bloginfo( 'description' );
        if ( empty( $meta_desc ) ) {
            $meta_desc = 'TECNORA S.R.L. – Ingegneria di eccellenza per la Pubblica Amministrazione. Opere pubbliche, Facility Management e Innovazione Digitale.';
        }
    }

    // OG Image: usa hero_image ACF oppure il logo del tema come fallback
    $og_image_url = '';
    $og_image_alt = '';
    if ( ! empty( $hero_image ) && is_array( $hero_image ) ) {
        $og_image_url = esc_url( $hero_image['url'] );
        $og_image_alt = esc_attr( $hero_image['alt'] );
    } else {
        $og_image_url = esc_url( get_template_directory_uri() . '/assets/og-default.jpg' );
        $og_image_alt = 'TECNORA S.R.L. – Ingegneria per la PA';
    }

    $canonical_url = esc_url( get_permalink( $page_id ) ?: home_url( '/' ) );
    ?>

    <!-- ─── SEO Primario ──────────────────────────────────────────────────── -->
    <title><?php echo esc_html( $meta_title ); ?></title>
    <meta name="description" content="<?php echo esc_attr( $meta_desc ); ?>">
    <link rel="canonical" href="<?php echo $canonical_url; ?>">

    <!-- ─── Open Graph / Social ──────────────────────────────────────────── -->
    <meta property="og:type"        content="website">
    <meta property="og:url"         content="<?php echo $canonical_url; ?>">
    <meta property="og:title"       content="<?php echo esc_attr( $meta_title ); ?>">
    <meta property="og:description" content="<?php echo esc_attr( $meta_desc ); ?>">
    <meta property="og:image"       content="<?php echo $og_image_url; ?>">
    <meta property="og:image:alt"   content="<?php echo $og_image_alt; ?>">
    <meta property="og:site_name"   content="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
    <meta property="og:locale"      content="it_IT">

    <!-- ─── Twitter Card ─────────────────────────────────────────────────── -->
    <meta name="twitter:card"        content="summary_large_image">
    <meta name="twitter:title"       content="<?php echo esc_attr( $meta_title ); ?>">
    <meta name="twitter:description" content="<?php echo esc_attr( $meta_desc ); ?>">
    <meta name="twitter:image"       content="<?php echo $og_image_url; ?>">
    <meta name="twitter:image:alt"   content="<?php echo $og_image_alt; ?>">

    <!-- ─── Schema.org JSON-LD ───────────────────────────────────────────── -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TECNORA S.R.L.",
        "url": "<?php echo esc_url( home_url( '/' ) ); ?>",
        "logo": "<?php echo esc_url( get_template_directory_uri() . '/assets/logo.png' ); ?>",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Francesco Caracciolo n. 10",
            "addressLocality": "Napoli",
            "postalCode": "80122",
            "addressCountry": "IT"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@tecnora.it"
        },
        "sameAs": []
    }
    </script>

    <?php wp_head(); ?>

    <!-- ─── Accessibilità: Skip Link style ───────────────────────────────── -->
    <style>
        .skip-link {
            position: absolute;
            top: -100%;
            left: 0;
            z-index: 9999;
            padding: 0.75rem 1.5rem;
            background: #1a2b4a;
            color: #ffffff;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: 0 0 4px 0;
            transition: top 0.1s ease;
        }
        .skip-link:focus {
            top: 0;
            outline: 3px solid #FF6B35;
            outline-offset: 2px;
        }
        /* Focus-visible globale accessibile */
        :focus-visible {
            outline: 3px solid #FF6B35 !important;
            outline-offset: 2px !important;
        }
        /* Nasconde l'app durante il caricamento iniziale */
        #root:empty::before {
            content: '';
            display: block;
            min-height: 100vh;
        }
    </style>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- ─── Accessibilità: Skip Navigation ───────────────────────────────────────── -->
<a href="#main-content" class="skip-link">
    Salta al contenuto principale
</a>
