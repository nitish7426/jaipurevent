import React from "react";
import Logo from "./Logo";
import { footerDetails, navLinks, socialLinks } from "@/constants";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between gap-4">
          <Logo />

          <div className="flex flex-wrap justify-center">
            {navLinks.map(({ id, href, text }) => (
              <Link
                className={buttonVariants({
                  variant: "link",
                  className: "text-base",
                })}
                key={id}
                href={href}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap md:justify-between gap-6  items-center py-6">
          {footerDetails.map(({ heading, icon: Icon, id, text, href }) => (
            <div key={id} className="text-center md:text-start">
              <p className="flex items-center justify-center md:justify-start gap-1 font-medium text-lg">
                <Icon />
                {heading}
              </p>
              <a
                className="block hover:underline text-gray-700"
                href={href}
                target="_blank"
              >
                {text}
              </a>
            </div>
          ))}
        </div>

        <nav
          className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10 text-gray-600 my-6"
          role="social links"
        >
          {socialLinks.map(({ href, icon: Icon, id, text }) => (
            <a
              className="hover:text-pink-600 transition-colors"
              key={id}
              href={href}
            >
              <Icon size={25} />
              <span className="sr-only">{text}</span>
            </a>
          ))}
        </nav>

        <hr className="my-6 border-gray-200 md:my-10" />

        <div className="text-center">
          <p className="text-sm text-gray-600">
            © Copyright 2023. All Rights Reserved. | Crafted By{" "}
            <a
              className="hover:underline"
              href="https://www.instagram.com/nitish_mahawar/"
              target="_blank"
            >
              Nitish Mahawar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
