export interface HomepageACF {
  banner_title: string;
  banner_subtitle: string;
  banner_background: {
    url: string;
  } | null;
}
export interface HeroBannerBlock {
  acf_fc_layout: "hero_banner";
  banner_title: string;
  banner_subtitle: string;
  banner_background: {
    url: string;
  } | null;
}

export interface MenuItem {
  id: number;
    title: {
    rendered: string;
  }; // ← FIXED
  url: string;
  parent: number;
}

export interface NormalizedMenuItem {
  id: number;
  label: string;
  url: string;
  parent: number;
  children?: NormalizedMenuItem[];
}


// ACF options endpoint response (site logo, favicon)
export interface ACFOptionsResponse {
  acf: {
    site_logo?: { url: string };
    favicon?: { url: string };
  };
}

export interface SiteSettings {
  logo: string;
  favicon: string;
}

export interface HeaderCTA {
  acf?: {
    header?: {
      phone_label?: string;
      phone_number_link?: string;
      cta_label?: string;
      cta_link?: string;
    };
  };
}

export interface Footer {
  acf?: {
    footer?: {
      logo_tag_line?: string;
      newsletter_short_des?:string;
      quick_links?:string;
      destination_links?:string;
      connect_text?:string;
      copyright_text?:string;
    };
  };
}




export type PageBlock = HeroBannerBlock;