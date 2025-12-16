import { WPPage } from "@/lib/wordpress";

export const getPageBySlug = async (slug: string): Promise<WPPage> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP}/wp-json/wp/v2/pages?slug=${slug}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  return data[0];
};
