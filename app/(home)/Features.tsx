import { features } from "@/constants";
import cn from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="py-12 md:py-16">
      <h2 className="heading">Features</h2>
      <div className="space-y-6 pt-6 md:py-8 lg:pt-10">
        {features.map(({ id, heading, paragraph, image }) => (
          <div
            className={cn(
              "flex flex-col items-center gap-6 md:justify-evenly",
              id % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
            key={id}
          >
            <article className="text-center md:text-start space-y-4 p-5 flex-1 max-w-lg ">
              <h3 className="text-2xl md:text-3xl font-bold text-pink-600">
                {heading}
              </h3>
              <p className="text-gray-600 md:text-lg">{paragraph}</p>
            </article>

            {/* feature image */}
            <Image
              className="aspect-square rounded-xl object-cover flex-1 max-w-md"
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

export default Features;
