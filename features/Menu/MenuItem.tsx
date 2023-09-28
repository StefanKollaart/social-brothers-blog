"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  name: string;
  href: string;
}

function MenuItem({ name, href }: MenuItemProps) {
  const pathname = usePathname();
  const isActiveLink = pathname === href;
  const activeLinkExtraClasses =
    "underline underline-offset-active-link decoration-social-brothers-orange";

  return (
    <Link
      href={href}
      className={`text-white text-lg font-semibold ${
        isActiveLink && activeLinkExtraClasses
      }`}
    >
      {name}
    </Link>
  );
}

export default MenuItem;
