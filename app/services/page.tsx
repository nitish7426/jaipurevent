import { services } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Jaipur Event | Services",
};

const Services = () => {
  return (
    <section className="container py-12 md:py-16 space-y-6 md:space-y-8 lg:space-y-10">
      <h1 className="heading">Services</h1>
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        {services.map(({ heading, id, image }) => (
          <div className="space-y-6" key={id}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center md:text-start">
              {heading}
            </h2>
            <Image
              className="aspect-square h-auto w-full object-cover rounded-xl shadow-lg"
              src={image}
              height={400}
              width={400}
              alt={heading}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
