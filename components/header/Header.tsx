"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";

import { MenuItem, ACFOptionsResponse, HeaderCTA } from "@/lib/types";
import { normalizeMenu } from "@/lib/normalizeMenu";

import { setMenu } from "@/store/slices/menuSlice";
import { setSettings } from "@/store/slices/settingsSlice";
import { setHeader, HeaderState } from "@/store/slices/headerSlice";


import { apiGet, ENDPOINTS } from "@/lib/api";
import DesktopMenu from "./DesktopMenu";
import HeaderCTAs from "./HeaderCTA";
export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const { logo } = useSelector((s: RootState) => s.settings);
  const { items } = useSelector((s: RootState) => s.menu);
  // const { header } = useSelector((s: RootState) => s.header);
  const header: HeaderState = useSelector((s: RootState) => s.header);

  useEffect(() => {
    async function load() {
      const [menu, settings, headerRes ] = await Promise.all([
        apiGet<MenuItem[]>(ENDPOINTS.MENU),
        apiGet<ACFOptionsResponse>(ENDPOINTS.SETTINGS),
        apiGet<HeaderCTA>(ENDPOINTS.SETTINGS)
      ]);
      
      dispatch(setMenu(normalizeMenu(menu)));

      dispatch(
        setSettings({
          logo: settings.acf?.site_logo?.url ?? "",
          favicon: settings.acf?.favicon?.url ?? "",
        })
      );

      if (headerRes.acf?.header) {
      dispatch(setHeader(headerRes.acf.header));
    }
      
    }

    load();
  }, []);

  return (
    <header className="border-b shadow-sm bg-black">
      <div className="container mx-auto ">
        <div className="px-2.5 flex items-center justify-between py-2.5">       
        {logo && <img src={logo} alt="Logo" className="h-10" />}
        <DesktopMenu items={items} />
        <HeaderCTAs data={header} />
        </div>
      </div>
    </header>
  );
}
