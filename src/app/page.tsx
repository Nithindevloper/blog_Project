"use client";

import CategoriesSlider from "@/components/Categories/CategoriesSlider";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import LatestCategorySlider from "@/components/LatestCategories/LatestCategorySlider";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HomeSlider />
        <CategoriesSlider />
        <LatestCategorySlider />
      </main>
    </div>
  );
}