"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import cn from "@/lib/utils";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  activeClassName?: string;
}

const NavLink = ({
  children,
  href,
  activeClassName,
  className,
}: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname == href;

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors duration-200 font-semibold",
        isActive
          ? `text-pink-600 ${className}`
          : `text-gray-500 hover:text-gray-500/75 ${className}`
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
