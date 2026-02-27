/**
 * Tecnora – Definizioni TypeScript per window.wpData
 *
 * Esposto da WordPress via wp_localize_script() in inc/wp-data.php.
 * Usare con il pattern: window.wpData?.fields?.hero_title ?? 'Default'
 */

// ─── Immagine ACF (return_format: 'array') ────────────────────────────────────
export interface WpAcfImage {
  url: string;
  alt: string;     // Testo alternativo – obbligatorio per WCAG 2.1 (1.1.1)
  title: string;
  id: number;
}

// ─── Campi ACF per pagina (unione di tutti i campi possibili) ─────────────────
export interface WpAcfFields {
  // SEO (globale)
  seo_title?: string;
  seo_description?: string;
  hero_image?: WpAcfImage;

  // Home
  hero_title?: string;
  hero_subtitle?: string;
  hero_bg_image?: WpAcfImage;
  hero_cta_primary_label?: string;
  hero_cta_secondary_label?: string;
  mission_title?: string;
  mission_text?: string;   // HTML da WYSIWYG
  cta_title?: string;
  cta_text?: string;
  cta_button_label?: string;

  // Chi Siamo
  about_title?: string;
  about_text?: string;     // HTML da WYSIWYG
  about_image?: WpAcfImage;
  about_dd_title?: string;
  about_dd_text?: string;  // HTML da WYSIWYG

  // Contatti
  contact_address?: string;
  contact_phone?: string;
  contact_email?: string;
  contact_piva?: string;

  // Indice esteso per campi aggiuntivi dinamici
  [key: string]: string | number | boolean | WpAcfImage | undefined;
}

// ─── Payload principale window.wpData ─────────────────────────────────────────
export interface WpData {
  pageSlug: string;
  pageTitle: string;
  currentRoute: string;
  homeUrl: string;
  siteUrl: string;
  basePath: string;        // Base per BrowserRouter (es. "/" o "/sottocartella/")
  themeUrl: string;
  nonce: string;
  restUrl: string;
  isHome: boolean;
  acfActive: boolean;
  fields: WpAcfFields;
}

// ─── Dichiarazione globale per TypeScript ─────────────────────────────────────
declare global {
  interface Window {
    wpData?: WpData;
  }
}

export { };
