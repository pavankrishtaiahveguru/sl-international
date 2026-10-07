import CompanyIntro from "@/components/home/CompanyIntro";
import ClientMarquee from "@/components/home/ClientMarquee";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ClientMarquee />
      <WhyChooseUs />
      <Process />
      <FinalCTA />
    </>
  );
};

export default page;
