"use client";
import { testimonials } from "@/constants";
import React, { useState } from "react";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);

  const { id, image, location, name, text } = testimonials[selected];

  return (
    <section className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        <h3 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          What clients saying
        </h3>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-pink-600 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-pink-600 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-pink-600 rounded-full"></span>
        </div>

        <div className="flex items-start max-w-6xl mx-auto mt-16">
          <button
            title="left arrow"
            className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:block hover:bg-gray-100"
            onClick={() => setSelected((s) => (s == 0 ? 2 : s - 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div>
            <p className="flex items-center text-center text-gray-500 md:text-lg lg:mx-8">
              {text}
            </p>

            <div className="flex flex-col items-center justify-center mt-8">
              <img
                className="object-cover rounded-full w-14 h-14"
                src={image}
                alt=""
              />

              <div className="mt-4 text-center">
                <h1 className="font-semibold text-gray-800 ">{name}</h1>
                <span className="text-sm text-gray-500 ">{location}</span>
              </div>
            </div>
          </div>

          <button
            title="right arrow"
            className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 lg:block hover:bg-gray-100"
            onClick={() => setSelected((s) => (s == 2 ? 0 : s + 1))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
