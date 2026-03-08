"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="border-glass-border bg-card/75 shadow-2 fixed bottom-0 left-0 z-20 mx-3 mb-0 w-[calc(100%-1.5rem)] rounded-t-[1.25rem] border backdrop-blur-md lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:m-0 lg:w-max lg:rounded-none lg:rounded-tr-[1.25rem] lg:rounded-bl-[1.25rem] lg:px-5 lg:shadow-none">
      <ul className="flex flex-wrap items-center justify-center gap-5 px-2.5 lg:gap-7 lg:px-5">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`block px-1.5 py-5 text-[0.875rem] font-medium transition-colors md:text-[0.9375rem] ${
                pathname === link.path
                  ? "text-orange"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
