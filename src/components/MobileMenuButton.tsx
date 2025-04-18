"use client";

import { NAV_LINKS } from "@/common";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MenuIcon } from "./icons";
import Link from "./Link";

export default function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu}>
        <MenuIcon className="fill-foreground w-6 h-6" />
      </button>
      <div
        className={clsx(
          "absolute top-22 right-0 w-screen bg-background overflow-y-scroll px-8 pb-8 border-b-1",
          isOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col items-end gap-8" onClick={toggleMenu}>
          {NAV_LINKS.map(({ name, url }) => (
            <Link href={url} key={name}>
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
