import { Button, buttonVariants } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row containter md:items-center py-8 md:py-10 lg:py-12 gap-6 md:gap-8">
      <div className="flex-1 text-center md:text-start space-y-6">
        <h1 className="text-4xl md:text-5xl font-black">
          Float on Cloud Nine with Our Spectacular Balloon Creations!
        </h1>
        <p className="lg:text-lg text-gray-500">
          We specialize in creating mesmerizing balloon decorations that will
          add an extra touch of magic and elegance to your events. From vibrant
          balloon arches and whimsical balloon centerpieces to creative balloon
          sculptures, we bring your visions to life with our artistry and
          attention to detail.
        </p>
        <Link
          className={buttonVariants({
            variant: "default",
            className: "text-base mr-4 rounded-xl font-semibold",
            size: "lg",
          })}
          href="/"
        >
          Get Started
        </Link>
        <Link
          className={buttonVariants({
            variant: "ghost",
            className: "text-base rounded-xl font-semibold",
            size: "lg",
          })}
          href="/"
        >
          Contact Us
        </Link>
      </div>
      <Image
        className="flex-1 aspect-[4/3] object-cover"
        src="https://illustrations.popsy.co/pink/new-year-celebration.svg"
        height={500}
        width={500}
        alt="hero image"
      />
    </section>
  );
};

export default Hero;
