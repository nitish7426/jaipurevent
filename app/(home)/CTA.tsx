import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <article className="text-center flex flex-col items-center gap-4 py-12 px-4 sm:px-6 bg-pink-50 rounded-3xl my-12 md:my-16">
      <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 max-w-4xl">
        Ready to elevate your event with mesmerizing balloon decorations?
      </h3>
      <p className="md:text-lg text-gray-700 max-w-2xl align-middle">
        Contact us today to discuss your vision and let our talented team bring
        it to life. Whether it's a birthday party, wedding, or corporate event,
        we're here to create an unforgettable experience for you and your
        guests. Don't miss out on the opportunity to add that extra touch of
        magic and elegance. Get in touch now and let the enchantment begin!
      </p>
      <Link
        className={buttonVariants({
          className: "rounded-xl",
          size: "lg",
        })}
        href="/contact"
      >
        Contact Us
      </Link>
    </article>
  );
};

export default CTA;
