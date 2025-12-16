"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";

import { ACFOptionsResponse, Footer } from "@/lib/types";
import { setSettings } from "@/store/slices/settingsSlice";
import { setFooter, FooterState } from "@/store/slices/footerSlice";


import { apiGet, ENDPOINTS } from "@/lib/api";
import FooterMenu from "./FooterMenu";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const { logo } = useSelector((s: RootState) => s.settings);
  const footer: FooterState = useSelector((s: RootState) => s.footer);

  useEffect(() => {
    async function load() {
      const [settings, footerRes ] = await Promise.all([
        apiGet<ACFOptionsResponse>(ENDPOINTS.SETTINGS),
        apiGet<Footer>(ENDPOINTS.SETTINGS)
      ]);

      dispatch(
        setSettings({
          logo: settings.acf?.site_logo?.url ?? "",
        })
      );

      if (footerRes.acf?.footer) {
      dispatch(setFooter(footerRes.acf.footer));
    }
      
    }

    load();
  }, []);

  return (
    <header className="border-b shadow-sm bg-black">
      <div className="container mx-auto ">
        <div className="px-2.5 flex items-center justify-between py-2.5"> 
        <FooterMenu data={footer} logo={logo}/>
        </div>
      </div>
    </header>
  );
}
