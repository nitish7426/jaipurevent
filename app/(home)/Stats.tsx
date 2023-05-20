import { stats } from "@/constants";
import React from "react";

const Stats = () => {
  return (
    <section className="pb-12 md:pb-16 space-y-8 md:space-y-10">
      <div className="grid md:grid-cols-3">
        {stats.map(({ id, count, text }) => (
          <div className="text-center space-y-4 py-6" key={id}>
            <div className="text-6xl md:text-7xl font-extrabold text-gray-900">
              {count}
            </div>
            <div className="text-xl md:text-2xl font-semibold text-gray-600">
              {text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
