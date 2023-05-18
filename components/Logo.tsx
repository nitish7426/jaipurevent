import cn from "@/lib/utils";
import { Sacramento } from "next/font/google";
import Link from "next/link";
import React from "react";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

const Logo = () => {
  return (
    <Link
      className={cn("text-2xl font-black text-pink-600", sacramento.className)}
      href="/"
    >
      Jaipur Event
    </Link>
  );
};

export default Logo;
