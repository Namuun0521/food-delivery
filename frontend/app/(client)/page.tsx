"use client";

import { api } from "@/lib/axios";

import { useEffect, useState } from "react";
import { Header } from "./_components/header";
import { SubheaderPhoto } from "./_components/SubheaderPhoto";
import { Footer } from "./_components/Footer";
import { useCart } from "../context/cart-context";
import { Category } from "../(admin)/admin/_components/CreateFoodDialog";
import { MenuSection } from "../_components/MenuSection";
import Marquee from "../_components/Marquee";

export type MenuSectionType = {
  id: number;
  title: string;
};

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { addToCart, setIsCartOpen, getTotalItems } = useCart();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<Category[]>("/categories");
      setCategories(data);
    };

    fetchCategories();
  });

  return (
    <div className="min-h-screen bg-[#2a2a2a]">
      <Header />

      <SubheaderPhoto />

      {categories.map((el) => (
        <MenuSection
          key={el._id}
          categoryId={el._id}
          categoryName={el.name}
        ></MenuSection>
      ))}
      <Marquee />
      <Footer />
    </div>
  );
}
