"use client";

import HeroSection from "@/Components/Hero/Hero";
import InsightTypographyPage from "@/Components/Insight";
import {
  heroDetails
} from "@/data/blogArticleData";

export default function blogArticlePage() {
  return (
    <div>
      <HeroSection {...heroDetails} />
      <InsightTypographyPage/>
    </div>
  );
}
