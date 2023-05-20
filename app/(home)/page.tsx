import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Stats from "./Stats";
import CTA from "./CTA";
import Testimonial from "./Testimonial";

const Page = () => {
  return (
    <div className="container">
      <Hero />
      <Features />
      <Stats />
      <Testimonial />
      <CTA />
    </div>
  );
};

export default Page;
