"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { items } = useSelector((s: RootState) => s.menu);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 right-4"
      >
        ☰
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex justify-end">
          <div className="w-64 bg-white p-4">
            <button onClick={() => setOpen(false)}>✕</button>

            <nav className="flex flex-col gap-4 mt-4">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="text-gray-800 text-lg"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
