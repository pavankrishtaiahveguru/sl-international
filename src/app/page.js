import CompanyIntro from "@/components/home/CompanyIntro";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <Services />
      <WhyChooseUs />
      <Process />
      <FinalCTA />
    </>
  );
};

export default page;
