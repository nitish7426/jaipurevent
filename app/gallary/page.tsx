import Image from "next/image";
import React from "react";

const Gallary = () => {
  return (
    <section className="container py-12 md:py-16 space-y-6 md:space-y-8 lg:space-y-10">
      <h1 className="heading">Gallary</h1>
      <div className="columns-1 md:columns-2 lg:columns-3 space-y-4 md:space-x-4">
        {Array(20)
          .fill("")
          .map((value, i) => (
            <Image
              className="h-auto w-full"
              key={i}
              src={`/image${i + 1}.jpeg`}
              height={400}
              width={400}
              alt={`image${i + 1}`}
            />
          ))}
      </div>
    </section>
  );
};

export default Gallary;
