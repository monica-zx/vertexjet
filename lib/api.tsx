export async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed fetching: ${url}`);
  return res.json();
}

export const ENDPOINTS = {
  MENU: "https://wpreact.zedexinfo.com/wp-json/wp/v2/menu-items?menus=3",
  SETTINGS: "https://wpreact.zedexinfo.com/wp-json/acf/v3/options/options",
  PAGE: (slug: string) =>
    `https://wpreact.zedexinfo.com/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard`,
};
