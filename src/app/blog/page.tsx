"use client";
import StrategicAdvice from "@/Components/Advisory/StrategicAdvice";
import HeroSection from "@/Components/Hero/Hero";
import Insights from "@/Components/Insights/index";
import {
  heroDetails,
  strategicAdviceData,
} from "@/data/blogData";

export default function blogPage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <StrategicAdvice {...strategicAdviceData} />
      <Insights />
    </div>
  );
}
