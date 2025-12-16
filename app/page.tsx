
// "use client";

// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/store/store";
// import { useEffect } from "react";
// import { setPageContent } from "@/store/slices/pageSlice";
// import { apiGet, ENDPOINTS } from "@/lib/api";
// import HeroBanner from "@/components/banner/HeroBanner";
// import { PageBlock } from "@/lib/types";
// import { WPPage } from "@/lib/wordpress"

// export default function HomePage() {
//   const dispatch = useDispatch<AppDispatch>();
//   const { content } = useSelector((s: RootState) => s.pages);

//   useEffect(() => {
//     async function load() {
//       const pages = await apiGet<WPPage<PageBlock>[]>(
//         ENDPOINTS.PAGE("home")
//       );

//       const blocks = pages[0]?.acf?.flexible_content ?? [];

//       dispatch(
//         setPageContent({
//           slug: "home",
//           content: blocks,
//         })
//       );
//     }

//     load();
//   }, [dispatch]);

//   return (
//     <>
//       {content.map((block, i) => {
//         switch (block.acf_fc_layout) {
//           case "hero_banner":
//             return <HeroBanner key={i} data={block} />;
//           default:
//             return null;
//         }
//       })}
//     </>
//   );
// }


"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { WPPage } from "@/lib/wordpress";

import { apiGet } from "@/lib/api";
import { HomepageACF } from "@/lib/types";

import {
  setHomepage,
  setHomepageLoading,
} from "@/store/slices/homepageSlice";

import HeroBanner from "@/components/banner/HeroBanner";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((s: RootState) => s.homepage);

  useEffect(() => {
    async function load() {
      dispatch(setHomepageLoading());

     const page = await apiGet<WPPage<HomepageACF>>(
  `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/pages/12`
);

      dispatch(setHomepage(page.acf as HomepageACF));
      dispatch(setHomepage(page.acf));
    }

    load();
  }, [dispatch]);

  if (loading || !data) return null;

  return <HeroBanner data={data} />;
}
