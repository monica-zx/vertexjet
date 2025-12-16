export interface WPRendered {
  rendered: string;
}

export interface WPPage<T = unknown> {
  id: number;
  slug: string;
  title: WPRendered;
  content: WPRendered;
  acf: T;
}


export interface PageState {
  slug: string;
  content: WPPage | null;
}
