import ContactPage from "@/Components/Contact/contact";
import HeroSection from "@/Components/Hero/HeroC";
import { heroDetails } from "@/data/contactUsData";
import React from "react";

export default function HomePage() {
  return (
    <>
      <HeroSection {...heroDetails} />
      <ContactPage/>
    </>
  );
}
