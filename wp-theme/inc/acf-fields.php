<?php
/**
 * Tecnora Theme – inc/acf-fields.php
 *
 * Registra i gruppi di campi ACF Free via PHP (Local Fields).
 * Tutti i testi e immagini modificabili da WordPress sono qui.
 * Richiede ACF Free installato e attivo.
 *
 * NOTA: ACF Free non include il campo Repeater.
 * Per le liste (macro-aree, valori, team) usiamo campi numerati fissi
 * (es. macro_1_title, macro_2_title) oppure ACF Pro per i Repeater.
 *
 * @package Tecnora
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// ──────────────────────────────────────────────────────────────────────────────
// Helper: trova l'ID di una pagina dal suo slug
// ──────────────────────────────────────────────────────────────────────────────
if ( ! function_exists( 'tecnora_get_page_id_by_slug' ) ) {
    function tecnora_get_page_id_by_slug( string $slug ): int {
        $page = get_page_by_path( $slug, OBJECT, 'page' );
        return $page ? (int) $page->ID : 0;
    }
}

add_action( 'acf/init', 'tecnora_register_acf_fields' );
function tecnora_register_acf_fields(): void {

    // ══════════════════════════════════════════════════════════════════════════
    // GRUPPO 0: SEO Globale — tutte le pagine
    // ══════════════════════════════════════════════════════════════════════════
    acf_add_local_field_group( [
        'key'      => 'group_tecnora_seo',
        'title'    => 'SEO & Social',
        'position' => 'side',
        'fields'   => [
            [
                'key'          => 'field_seo_title',
                'label'        => 'Titolo SEO',
                'name'         => 'seo_title',
                'type'         => 'text',
                'instructions' => 'Max 60 caratteri. Lascia vuoto per usare il titolo WP.',
                'maxlength'    => 60,
            ],
            [
                'key'          => 'field_seo_description',
                'label'        => 'Meta Description',
                'name'         => 'seo_description',
                'type'         => 'textarea',
                'instructions' => 'Max 160 caratteri.',
                'maxlength'    => 160,
                'rows'         => 3,
            ],
            [
                'key'           => 'field_og_image',
                'label'         => 'Immagine Open Graph',
                'name'          => 'hero_image',
                'type'          => 'image',
                'instructions'  => 'Min 1200×630px per social sharing. Compila sempre il campo Alt nei Media.',
                'return_format' => 'array',
                'preview_size'  => 'medium',
                'mime_types'    => 'jpg,jpeg,png,webp',
            ],
        ],
        'location' => [
            [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ] ],
        ],
    ] );

    // ══════════════════════════════════════════════════════════════════════════
    // GRUPPO 1: HOME PAGE
    // ══════════════════════════════════════════════════════════════════════════
    acf_add_local_field_group( [
        'key'    => 'group_tecnora_home',
        'title'  => 'Home – Contenuti',
        'fields' => [

            // ── Hero ──────────────────────────────────────────────────────────
            [ 'key' => 'field_home_tab1', 'label' => 'Hero',        'type' => 'tab' ],
            [
                'key'           => 'field_hero_title',
                'label'         => 'Titolo Hero',
                'name'          => 'hero_title',
                'type'          => 'textarea',
                'instructions'  => 'Ogni riga è separata da "a capo" (Enter). Di solito 3 righe.',
                'default_value' => "Ingegneria.\nIntegrità.\nInnovazione.",
                'rows'          => 3,
            ],
            [
                'key'           => 'field_hero_subtitle',
                'label'         => 'Sottotitolo Hero',
                'name'          => 'hero_subtitle',
                'type'          => 'text',
                'default_value' => "Soluzioni tecniche d'eccellenza per la Pubblica Amministrazione",
            ],
            [
                'key'           => 'field_hero_bg_image',
                'label'         => 'Immagine Sfondo Hero',
                'name'          => 'hero_bg_image',
                'type'          => 'image',
                'return_format' => 'array',
                'preview_size'  => 'medium',
                'instructions'  => 'Immagine sfondo hero. Compila il campo Alt nei Media.',
            ],
            [
                'key'           => 'field_hero_cta_primary_label',
                'label'         => 'CTA Primaria – Testo',
                'name'          => 'hero_cta_primary_label',
                'type'          => 'text',
                'default_value' => 'Scopri di più',
            ],
            [
                'key'           => 'field_hero_cta_secondary_label',
                'label'         => 'CTA Secondaria – Testo',
                'name'          => 'hero_cta_secondary_label',
                'type'          => 'text',
                'default_value' => 'Contattaci',
            ],

            // ── Missione ──────────────────────────────────────────────────────
            [ 'key' => 'field_home_tab2', 'label' => 'Missione',    'type' => 'tab' ],
            [
                'key'           => 'field_mission_title',
                'label'         => 'Titolo Missione',
                'name'          => 'mission_title',
                'type'          => 'text',
                'default_value' => 'La Nostra Missione',
            ],
            [
                'key'          => 'field_mission_text',
                'label'        => 'Testo Missione',
                'name'         => 'mission_text',
                'type'         => 'wysiwyg',
                'media_upload' => 0,
                'toolbar'      => 'basic',
            ],

            // ── Macro-Aree (3 card fisse) ─────────────────────────────────────
            [ 'key' => 'field_home_tab3', 'label' => 'Aree di Competenza', 'type' => 'tab' ],
            [
                'key'           => 'field_areas_section_title',
                'label'         => 'Titolo Sezione Competenze',
                'name'          => 'areas_section_title',
                'type'          => 'text',
                'default_value' => 'Le Nostre Aree di Competenza',
            ],
            [
                'key'           => 'field_areas_section_subtitle',
                'label'         => 'Sottotitolo Sezione Competenze',
                'name'          => 'areas_section_subtitle',
                'type'          => 'text',
                'default_value' => 'Soluzioni integrate per ogni fase del ciclo di vita dei progetti pubblici',
            ],
            // Macro-Area 1: Opere Pubbliche
            [ 'key' => 'field_home_tab3a', 'label' => 'Area 1 – Opere Pubbliche', 'type' => 'tab', 'placement' => 'left' ],
            [
                'key'           => 'field_macro1_title',
                'label'         => 'Area 1 – Titolo',
                'name'          => 'macro1_title',
                'type'          => 'text',
                'default_value' => 'Opere e Lavori Pubblici',
            ],
            [
                'key'           => 'field_macro1_desc',
                'label'         => 'Area 1 – Descrizione',
                'name'          => 'macro1_desc',
                'type'          => 'text',
                'default_value' => 'Progettazione integrata e direzione lavori per infrastrutture e edilizia pubblica',
            ],
            // Macro-Area 2: Facility Management
            [ 'key' => 'field_home_tab3b', 'label' => 'Area 2 – Facility Management', 'type' => 'tab', 'placement' => 'left' ],
            [
                'key'           => 'field_macro2_title',
                'label'         => 'Area 2 – Titolo',
                'name'          => 'macro2_title',
                'type'          => 'text',
                'default_value' => 'Facility Management',
            ],
            [
                'key'           => 'field_macro2_desc',
                'label'         => 'Area 2 – Descrizione',
                'name'          => 'macro2_desc',
                'type'          => 'text',
                'default_value' => 'Gestione asset, manutenzione programmata e supporto appalti pubblici',
            ],
            // Macro-Area 3: Innovazione
            [ 'key' => 'field_home_tab3c', 'label' => 'Area 3 – Innovazione', 'type' => 'tab', 'placement' => 'left' ],
            [
                'key'           => 'field_macro3_title',
                'label'         => 'Area 3 – Titolo',
                'name'          => 'macro3_title',
                'type'          => 'text',
                'default_value' => 'Innovazione Digitale',
            ],
            [
                'key'           => 'field_macro3_desc',
                'label'         => 'Area 3 – Descrizione',
                'name'          => 'macro3_desc',
                'type'          => 'text',
                'default_value' => 'BIM, GIS e Data Analytics per decisioni basate sui dati',
            ],

            // ── Valore Pubblico (3 valori fissi) ──────────────────────────────
            [ 'key' => 'field_home_tab4', 'label' => 'Valore Pubblico', 'type' => 'tab' ],
            [
                'key'           => 'field_values_section_title',
                'label'         => 'Titolo Sezione Valori',
                'name'          => 'values_section_title',
                'type'          => 'text',
                'default_value' => 'Il Nostro Valore Pubblico',
            ],
            [
                'key'           => 'field_values_section_subtitle',
                'label'         => 'Sottotitolo Sezione Valori',
                'name'          => 'values_section_subtitle',
                'type'          => 'text',
                'default_value' => 'Responsabilità, qualità e sicurezza nelle scelte progettuali',
            ],
            // Valore 1
            [
                'key'           => 'field_val1_title',
                'label'         => 'Valore 1 – Titolo',
                'name'          => 'val1_title',
                'type'          => 'text',
                'default_value' => 'Competenza Tecnica',
            ],
            [
                'key'           => 'field_val1_desc',
                'label'         => 'Valore 1 – Descrizione',
                'name'          => 'val1_desc',
                'type'          => 'text',
                'default_value' => 'Know-how ingegneristico e conoscenza normativa degli appalti pubblici',
            ],
            // Valore 2
            [
                'key'           => 'field_val2_title',
                'label'         => 'Valore 2 – Titolo',
                'name'          => 'val2_title',
                'type'          => 'text',
                'default_value' => 'Trasparenza',
            ],
            [
                'key'           => 'field_val2_desc',
                'label'         => 'Valore 2 – Descrizione',
                'name'          => 'val2_desc',
                'type'          => 'text',
                'default_value' => 'Processi tracciabili e reporting in tempo reale per la PA',
            ],
            // Valore 3
            [
                'key'           => 'field_val3_title',
                'label'         => 'Valore 3 – Titolo',
                'name'          => 'val3_title',
                'type'          => 'text',
                'default_value' => 'Team Multidisciplinare',
            ],
            [
                'key'           => 'field_val3_desc',
                'label'         => 'Valore 3 – Descrizione',
                'name'          => 'val3_desc',
                'type'          => 'text',
                'default_value' => 'Ingegneri, architetti e specialisti con competenze trasversali',
            ],

            // ── CTA Finale ────────────────────────────────────────────────────
            [ 'key' => 'field_home_tab5', 'label' => 'CTA Finale', 'type' => 'tab' ],
            [
                'key'           => 'field_cta_title',
                'label'         => 'Titolo CTA',
                'name'          => 'cta_title',
                'type'          => 'text',
                'default_value' => 'Pronti per il Prossimo Progetto?',
            ],
            [
                'key'           => 'field_cta_text',
                'label'         => 'Testo CTA',
                'name'          => 'cta_text',
                'type'          => 'text',
                'default_value' => 'Trasformiamo le sfide della Pubblica Amministrazione in opportunità di eccellenza',
            ],
            [
                'key'           => 'field_cta_button_label',
                'label'         => 'Testo Bottone CTA',
                'name'          => 'cta_button_label',
                'type'          => 'text',
                'default_value' => 'Richiedi una Consulenza',
            ],
        ],
        'location' => [
            [
                [ 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ],
                [ 'param' => 'page',      'operator' => '==', 'value' => get_option( 'page_on_front' ) ],
            ],
        ],
    ] );

    // ══════════════════════════════════════════════════════════════════════════
    // GRUPPO 2: CHI SIAMO
    // ══════════════════════════════════════════════════════════════════════════
    acf_add_local_field_group( [
        'key'    => 'group_tecnora_about',
        'title'  => 'Chi Siamo – Contenuti',
        'fields' => [

            // ── Hero ──────────────────────────────────────────────────────────
            [ 'key' => 'field_about_tab1', 'label' => 'Hero', 'type' => 'tab' ],
            [
                'key'           => 'field_about_hero_title',
                'label'         => 'Titolo Hero',
                'name'          => 'about_hero_title',
                'type'          => 'text',
                'default_value' => 'Chi Siamo',
            ],
            [
                'key'           => 'field_about_hero_subtitle',
                'label'         => 'Sottotitolo Hero',
                'name'          => 'about_hero_subtitle',
                'type'          => 'text',
                'default_value' => 'Il Capitale Umano e Metodologico al servizio della PA',
            ],
            [
                'key'           => 'field_about_hero_image',
                'label'         => 'Immagine Hero (sfondo)',
                'name'          => 'about_hero_image',
                'type'          => 'image',
                'return_format' => 'array',
                'preview_size'  => 'medium',
                'instructions'  => 'Compila il campo Alt nei Media.',
            ],

            // ── Identità Professionale ────────────────────────────────────────
            [ 'key' => 'field_about_tab2', 'label' => 'Identità', 'type' => 'tab' ],
            [
                'key'           => 'field_about_title',
                'label'         => 'Titolo Sezione Identità',
                'name'          => 'about_title',
                'type'          => 'text',
                'default_value' => 'Identità Professionale',
            ],
            [
                'key'          => 'field_about_text',
                'label'        => 'Testo Identità',
                'name'         => 'about_text',
                'type'         => 'wysiwyg',
                'media_upload' => 0,
                'toolbar'      => 'basic',
            ],
            [
                'key'           => 'field_about_image',
                'label'         => 'Immagine Identità',
                'name'          => 'about_image',
                'type'          => 'image',
                'return_format' => 'array',
                'preview_size'  => 'medium',
                'instructions'  => 'Compila il campo Alt nei Media.',
            ],

            // ── Team (6 ruoli fissi) ──────────────────────────────────────────
            [ 'key' => 'field_about_tab3', 'label' => 'Team', 'type' => 'tab' ],
            [
                'key'           => 'field_team_section_title',
                'label'         => 'Titolo Sezione Team',
                'name'          => 'team_section_title',
                'type'          => 'text',
                'default_value' => 'Il Team Multidisciplinare',
            ],
            [
                'key'           => 'field_team_section_subtitle',
                'label'         => 'Sottotitolo Sezione Team',
                'name'          => 'team_section_subtitle',
                'type'          => 'text',
                'default_value' => 'Competenze trasversali per progetti complessi',
            ],
            // 6 ruoli
            [ 'key' => 'field_team1_role', 'label' => 'Ruolo 1', 'name' => 'team1_role', 'type' => 'text', 'default_value' => 'Ingegneri Civili' ],
            [ 'key' => 'field_team1_desc', 'label' => 'Descrizione Ruolo 1', 'name' => 'team1_desc', 'type' => 'text', 'default_value' => 'Esperti in progettazione strutturale e infrastrutture' ],
            [ 'key' => 'field_team2_role', 'label' => 'Ruolo 2', 'name' => 'team2_role', 'type' => 'text', 'default_value' => 'Architetti' ],
            [ 'key' => 'field_team2_desc', 'label' => 'Descrizione Ruolo 2', 'name' => 'team2_desc', 'type' => 'text', 'default_value' => 'Specialisti in edilizia pubblica e rigenerazione urbana' ],
            [ 'key' => 'field_team3_role', 'label' => 'Ruolo 3', 'name' => 'team3_role', 'type' => 'text', 'default_value' => 'Ingegneri Impiantisti' ],
            [ 'key' => 'field_team3_desc', 'label' => 'Descrizione Ruolo 3', 'name' => 'team3_desc', 'type' => 'text', 'default_value' => 'Competenze MEP e sistemi energetici' ],
            [ 'key' => 'field_team4_role', 'label' => 'Ruolo 4', 'name' => 'team4_role', 'type' => 'text', 'default_value' => 'Specialisti BIM/GIS' ],
            [ 'key' => 'field_team4_desc', 'label' => 'Descrizione Ruolo 4', 'name' => 'team4_desc', 'type' => 'text', 'default_value' => 'Professionisti certificati in metodologie digitali' ],
            [ 'key' => 'field_team5_role', 'label' => 'Ruolo 5', 'name' => 'team5_role', 'type' => 'text', 'default_value' => 'Project Manager' ],
            [ 'key' => 'field_team5_desc', 'label' => 'Descrizione Ruolo 5', 'name' => 'team5_desc', 'type' => 'text', 'default_value' => 'Gestione integrata del ciclo di vita dei progetti' ],
            [ 'key' => 'field_team6_role', 'label' => 'Ruolo 6', 'name' => 'team6_role', 'type' => 'text', 'default_value' => 'Esperti Appalti' ],
            [ 'key' => 'field_team6_desc', 'label' => 'Descrizione Ruolo 6', 'name' => 'team6_desc', 'type' => 'text', 'default_value' => 'Conoscenza normativa e supporto amministrativo' ],

            // ── Valori Guida (4 valori fissi) ────────────────────────────────
            [ 'key' => 'field_about_tab4', 'label' => 'Valori', 'type' => 'tab' ],
            [
                'key'           => 'field_about_values_title',
                'label'         => 'Titolo Sezione Valori',
                'name'          => 'about_values_title',
                'type'          => 'text',
                'default_value' => 'I Valori Guida',
            ],
            [
                'key'           => 'field_about_values_subtitle',
                'label'         => 'Sottotitolo Sezione Valori',
                'name'          => 'about_values_subtitle',
                'type'          => 'text',
                'default_value' => 'Principi che guidano ogni nostro progetto',
            ],
            [ 'key' => 'field_aval1_title', 'label' => 'Valore 1 – Titolo', 'name' => 'aval1_title', 'type' => 'text', 'default_value' => 'Competenza Tecnica' ],
            [ 'key' => 'field_aval1_desc',  'label' => 'Valore 1 – Descrizione', 'name' => 'aval1_desc', 'type' => 'text', 'default_value' => 'Team di ingegneri e architetti con specializzazioni trasversali' ],
            [ 'key' => 'field_aval2_title', 'label' => 'Valore 2 – Titolo', 'name' => 'aval2_title', 'type' => 'text', 'default_value' => 'Trasparenza' ],
            [ 'key' => 'field_aval2_desc',  'label' => 'Valore 2 – Descrizione', 'name' => 'aval2_desc', 'type' => 'text', 'default_value' => 'Processi tracciabili e reporting puntuale per la PA' ],
            [ 'key' => 'field_aval3_title', 'label' => 'Valore 3 – Titolo', 'name' => 'aval3_title', 'type' => 'text', 'default_value' => 'Innovazione' ],
            [ 'key' => 'field_aval3_desc',  'label' => 'Valore 3 – Descrizione', 'name' => 'aval3_desc', 'type' => 'text', 'default_value' => 'Metodologie digitali e approccio data-driven' ],
            [ 'key' => 'field_aval4_title', 'label' => 'Valore 4 – Titolo', 'name' => 'aval4_title', 'type' => 'text', 'default_value' => 'Sostenibilità' ],
            [ 'key' => 'field_aval4_desc',  'label' => 'Valore 4 – Descrizione', 'name' => 'aval4_desc', 'type' => 'text', 'default_value' => 'Soluzioni orientate alla qualità ambientale e sociale' ],

            // ── Approccio Data-Driven ────────────────────────────────────────
            [ 'key' => 'field_about_tab5', 'label' => 'Data-Driven', 'type' => 'tab' ],
            [
                'key'           => 'field_about_dd_title',
                'label'         => 'Titolo Data-Driven',
                'name'          => 'about_dd_title',
                'type'          => 'text',
                'default_value' => 'Approccio Data-Driven',
            ],
            [
                'key'          => 'field_about_dd_text',
                'label'        => 'Testo Data-Driven',
                'name'         => 'about_dd_text',
                'type'         => 'wysiwyg',
                'media_upload' => 0,
                'toolbar'      => 'basic',
            ],
        ],
        'location' => [
            [
                [ 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ],
                [ 'param' => 'page',      'operator' => '==', 'value' => tecnora_get_page_id_by_slug( 'chi-siamo' ) ],
            ],
        ],
    ] );

    // ══════════════════════════════════════════════════════════════════════════
    // GRUPPO 3: CONTATTI
    // ══════════════════════════════════════════════════════════════════════════
    acf_add_local_field_group( [
        'key'    => 'group_tecnora_contact',
        'title'  => 'Contatti – Contenuti',
        'fields' => [

            // ── Hero ──────────────────────────────────────────────────────────
            [ 'key' => 'field_cont_tab1', 'label' => 'Hero', 'type' => 'tab' ],
            [
                'key'           => 'field_cont_hero_title',
                'label'         => 'Titolo Hero',
                'name'          => 'cont_hero_title',
                'type'          => 'text',
                'default_value' => 'Contatti & Compliance',
            ],
            [
                'key'           => 'field_cont_hero_subtitle',
                'label'         => 'Sottotitolo Hero',
                'name'          => 'cont_hero_subtitle',
                'type'          => 'text',
                'default_value' => 'Certificazioni, normative e informazioni di contatto',
            ],

            // ── Info Contatto ─────────────────────────────────────────────────
            [ 'key' => 'field_cont_tab2', 'label' => 'Informazioni', 'type' => 'tab' ],
            [
                'key'           => 'field_cont_section_title',
                'label'         => 'Titolo Sezione Contatti',
                'name'          => 'cont_section_title',
                'type'          => 'text',
                'default_value' => 'Richiedi una Consulenza',
            ],
            [
                'key'           => 'field_cont_section_subtitle',
                'label'         => 'Sottotitolo Sezione Contatti',
                'name'          => 'cont_section_subtitle',
                'type'          => 'text',
                'default_value' => 'Il nostro team è a disposizione per discutere il tuo progetto',
            ],
            [
                'key'           => 'field_contact_address',
                'label'         => 'Indirizzo Sede Legale',
                'name'          => 'contact_address',
                'type'          => 'text',
                'default_value' => 'Via Francesco Caracciolo n. 10, 80122 Napoli',
            ],
            [
                'key'           => 'field_contact_phone',
                'label'         => 'Telefono',
                'name'          => 'contact_phone',
                'type'          => 'text',
                'default_value' => '+39 081 XXX XXXX',
            ],
            [
                'key'           => 'field_contact_email',
                'label'         => 'Email',
                'name'          => 'contact_email',
                'type'          => 'email',
                'default_value' => 'info@tecnora.it',
            ],
            [
                'key'           => 'field_contact_piva',
                'label'         => 'P.IVA / Codice Fiscale',
                'name'          => 'contact_piva',
                'type'          => 'text',
                'default_value' => '10920591210',
            ],

            // ── Certificazioni (3 fisse) ──────────────────────────────────────
            [ 'key' => 'field_cont_tab3', 'label' => 'Certificazioni', 'type' => 'tab' ],
            [
                'key'           => 'field_cert_section_title',
                'label'         => 'Titolo Sezione Certificazioni',
                'name'          => 'cert_section_title',
                'type'          => 'text',
                'default_value' => 'Certificazioni & Compliance',
            ],
            [
                'key'           => 'field_cert_section_subtitle',
                'label'         => 'Sottotitolo Sezione Certificazioni',
                'name'          => 'cert_section_subtitle',
                'type'          => 'text',
                'default_value' => 'Operiamo nel rispetto delle normative più stringenti',
            ],
            [ 'key' => 'field_cert1_title', 'label' => 'Cert. 1 – Titolo', 'name' => 'cert1_title', 'type' => 'text', 'default_value' => 'D.Lgs. 81/2008' ],
            [ 'key' => 'field_cert1_desc',  'label' => 'Cert. 1 – Descrizione', 'name' => 'cert1_desc', 'type' => 'text', 'default_value' => 'Sicurezza nei luoghi di lavoro e coordinamento cantieri' ],
            [ 'key' => 'field_cert2_title', 'label' => 'Cert. 2 – Titolo', 'name' => 'cert2_title', 'type' => 'text', 'default_value' => 'ISO 9001, 14001, 45001' ],
            [ 'key' => 'field_cert2_desc',  'label' => 'Cert. 2 – Descrizione', 'name' => 'cert2_desc', 'type' => 'text', 'default_value' => 'Quality, Environmental e Safety Management Systems' ],
            [ 'key' => 'field_cert3_title', 'label' => 'Cert. 3 – Titolo', 'name' => 'cert3_title', 'type' => 'text', 'default_value' => 'ISO 50001 e CAM' ],
            [ 'key' => 'field_cert3_desc',  'label' => 'Cert. 3 – Descrizione', 'name' => 'cert3_desc', 'type' => 'text', 'default_value' => 'Energy Management e Criteri Ambientali Minimi' ],

            // ── Form & Dati Societari ─────────────────────────────────────────
            [ 'key' => 'field_cont_tab4', 'label' => 'Form & Dati Societari', 'type' => 'tab' ],
            [
                'key'           => 'field_form_section_title',
                'label'         => 'Titolo Sezione Form',
                'name'          => 'form_section_title',
                'type'          => 'text',
                'default_value' => 'Scrivici Direttamente',
            ],
            [
                'key'           => 'field_company_name',
                'label'         => 'Ragione Sociale',
                'name'          => 'company_name',
                'type'          => 'text',
                'default_value' => 'TECNORA S.R.L.',
            ],
            [
                'key'           => 'field_company_reg',
                'label'         => 'Iscrizione Registro Imprese',
                'name'          => 'company_reg',
                'type'          => 'text',
                'default_value' => 'Camera di Commercio di Napoli',
            ],
            [
                'key'           => 'field_company_rea',
                'label'         => 'Numero REA',
                'name'          => 'company_rea',
                'type'          => 'text',
                'default_value' => 'NA-XXXXXXX',
            ],
            [
                'key'           => 'field_company_capital',
                'label'         => 'Capitale Sociale',
                'name'          => 'company_capital',
                'type'          => 'text',
                'default_value' => '€ 10.000,00 i.v.',
            ],
        ],
        'location' => [
            [
                [ 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ],
                [ 'param' => 'page',      'operator' => '==', 'value' => tecnora_get_page_id_by_slug( 'contatti' ) ],
            ],
        ],
    ] );

    // ══════════════════════════════════════════════════════════════════════════
    // GRUPPO 4: OPERE PUBBLICHE
    // ══════════════════════════════════════════════════════════════════════════
    acf_add_local_field_group( [
        'key'    => 'group_tecnora_opere',
        'title'  => 'Opere Pubbliche – Contenuti',
        'fields' => [
            [ 'key' => 'field_op_tab1', 'label' => 'Hero', 'type' => 'tab' ],
            [ 'key' => 'field_op_hero_title',    'label' => 'Titolo Hero',     'name' => 'op_hero_title',    'type' => 'text',  'default_value' => 'Opere e Lavori Pubblici' ],
            [ 'key' => 'field_op_hero_subtitle', 'label' => 'Sottotitolo Hero','name' => 'op_hero_subtitle', 'type' => 'text',  'default_value' => 'Progettazione integrata e direzione lavori' ],
            [ 'key' => 'field_op_hero_image',    'label' => 'Immagine Hero',   'name' => 'op_hero_image',    'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
            [ 'key' => 'field_op_tab2', 'label' => 'Contenuto', 'type' => 'tab' ],
            [ 'key' => 'field_op_intro_title', 'label' => 'Titolo Intro',   'name' => 'op_intro_title', 'type' => 'text', 'default_value' => 'Competenza Strutturale e Infrastrutturale' ],
            [ 'key' => 'field_op_intro_text',  'label' => 'Testo Intro',    'name' => 'op_intro_text',  'type' => 'wysiwyg', 'media_upload' => 0, 'toolbar' => 'basic' ],
            [ 'key' => 'field_op_intro_image', 'label' => 'Immagine Intro', 'name' => 'op_intro_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
        ],
        'location' => [
            [
                [ 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ],
                [ 'param' => 'page',      'operator' => '==', 'value' => tecnora_get_page_id_by_slug( 'opere-pubbliche' ) ],
            ],
        ],
    ] );

    // ══════════════════════════════════════════════════════════════════════════
    // GRUPPO 5: FACILITY MANAGEMENT
    // ══════════════════════════════════════════════════════════════════════════
    acf_add_local_field_group( [
        'key'    => 'group_tecnora_facility',
        'title'  => 'Facility Management – Contenuti',
        'fields' => [
            [ 'key' => 'field_fm_tab1', 'label' => 'Hero', 'type' => 'tab' ],
            [ 'key' => 'field_fm_hero_title',    'label' => 'Titolo Hero',     'name' => 'fm_hero_title',    'type' => 'text',  'default_value' => 'Facility Management' ],
            [ 'key' => 'field_fm_hero_subtitle', 'label' => 'Sottotitolo Hero','name' => 'fm_hero_subtitle', 'type' => 'text',  'default_value' => 'Gestione asset, manutenzione e supporto appalti' ],
            [ 'key' => 'field_fm_hero_image',    'label' => 'Immagine Hero',   'name' => 'fm_hero_image',    'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
            [ 'key' => 'field_fm_tab2', 'label' => 'Contenuto', 'type' => 'tab' ],
            [ 'key' => 'field_fm_intro_title', 'label' => 'Titolo Intro',   'name' => 'fm_intro_title', 'type' => 'text', 'default_value' => 'Gestione Intelligente degli Asset' ],
            [ 'key' => 'field_fm_intro_text',  'label' => 'Testo Intro',    'name' => 'fm_intro_text',  'type' => 'wysiwyg', 'media_upload' => 0, 'toolbar' => 'basic' ],
            [ 'key' => 'field_fm_intro_image', 'label' => 'Immagine Intro', 'name' => 'fm_intro_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
        ],
        'location' => [
            [
                [ 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ],
                [ 'param' => 'page',      'operator' => '==', 'value' => tecnora_get_page_id_by_slug( 'facility-management' ) ],
            ],
        ],
    ] );

    // ══════════════════════════════════════════════════════════════════════════
    // GRUPPO 6: INNOVAZIONE DIGITALE
    // ══════════════════════════════════════════════════════════════════════════
    acf_add_local_field_group( [
        'key'    => 'group_tecnora_innovation',
        'title'  => 'Innovazione – Contenuti',
        'fields' => [
            [ 'key' => 'field_inn_tab1', 'label' => 'Hero', 'type' => 'tab' ],
            [ 'key' => 'field_inn_hero_title',    'label' => 'Titolo Hero',     'name' => 'inn_hero_title',    'type' => 'text',  'default_value' => 'Innovazione Digitale' ],
            [ 'key' => 'field_inn_hero_subtitle', 'label' => 'Sottotitolo Hero','name' => 'inn_hero_subtitle', 'type' => 'text',  'default_value' => 'BIM, GIS e Data Analytics per la PA' ],
            [ 'key' => 'field_inn_hero_image',    'label' => 'Immagine Hero',   'name' => 'inn_hero_image',    'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
            [ 'key' => 'field_inn_tab2', 'label' => 'Contenuto', 'type' => 'tab' ],
            [ 'key' => 'field_inn_bim_title', 'label' => 'Titolo BIM',    'name' => 'inn_bim_title', 'type' => 'text', 'default_value' => 'BIM Methodology' ],
            [ 'key' => 'field_inn_bim_text',  'label' => 'Testo BIM',     'name' => 'inn_bim_text',  'type' => 'wysiwyg', 'media_upload' => 0, 'toolbar' => 'basic' ],
            [ 'key' => 'field_inn_gis_title', 'label' => 'Titolo GIS',    'name' => 'inn_gis_title', 'type' => 'text', 'default_value' => 'Sistemi GIS' ],
            [ 'key' => 'field_inn_gis_text',  'label' => 'Testo GIS',     'name' => 'inn_gis_text',  'type' => 'wysiwyg', 'media_upload' => 0, 'toolbar' => 'basic' ],
            [ 'key' => 'field_inn_data_title','label' => 'Titolo Analytics','name' => 'inn_data_title','type' => 'text', 'default_value' => 'Data Analytics' ],
            [ 'key' => 'field_inn_data_text', 'label' => 'Testo Analytics','name' => 'inn_data_text', 'type' => 'wysiwyg', 'media_upload' => 0, 'toolbar' => 'basic' ],
        ],
        'location' => [
            [
                [ 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ],
                [ 'param' => 'page',      'operator' => '==', 'value' => tecnora_get_page_id_by_slug( 'innovazione' ) ],
            ],
        ],
    ] );

} // fine tecnora_register_acf_fields()
