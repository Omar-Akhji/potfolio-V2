"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, name }: { href: string; name: string }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`block px-1.5 py-5 text-[0.75rem] font-medium transition-colors xs:text-[0.8125rem] sm:text-[0.875rem] md:text-[0.9375rem] ${
        pathname === href ? "text-orange" : "text-text-muted hover:text-text"
      }`}
    >
      {name}
    </Link>
  );
}
