import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import WhatdoingSection from "../../components/WhatdoingSection";
import ScrollSection from "../../components/ScrollSection";
import HowusedSection from "../../components/HowusedSection";

export default function Home() {
  return (
    <>
      <div className="md:m-5">
        <Header />
        <Hero />
        <WhatdoingSection />
        <ScrollSection />
        <HowusedSection />
      </div>
      <Footer />
    </>
  );
}
