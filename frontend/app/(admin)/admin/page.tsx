"use client";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

import { useEffect, useState } from "react";

import { api } from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { CreateCategoryDialog } from "@/app/(admin)/admin/_components/CreateCategoryDialog";
import {
  Category,
  CreateFoodDialog,
} from "@/app/(admin)/admin/_components/CreateFoodDialog";
import { CategoryFoods } from "@/app/(admin)/admin/_components/CategoryFoods";
import { FoodCard } from "./_components/FoodCard";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  categoryIds: {
    _id: string;
    name: string;
  }[];
};

export default function AdminPage() {
  const [selectedCategories, setSelectedCategories] = useState<string | null>(
    null,
  );
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get<Food[]>("/foods");
      setFoods(data);
    };

    getData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<Category[]>("/categories");
      setCategories(data);
    };

    fetchCategories();
  }, []);
  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategories(categoryId);
  };
  const handleDelete = async (id: string) => {
    await api.delete(`categories/delete/${id}`);
  };
  return (
    //     <main className="flex-1 p-8">
    //       <Card className="grid grid-cols-5 gap-4 p-6">
    //         <CreateFoodDialog />

    //         {foods.map((food) => (
    //           <FoodCard
    //             key={food._id}
    //             id={food._id}
    //             name={food.name}
    //             price={food.price}
    //             ingredients={food.ingredients}
    //             image={food.image}
    //           />
    //         ))}
    //       </Card>
    //     </main>
    //   );
    // }
    <main className="w-full flex flex-col gap-6 p-8 ">
      <div className="w-full flex justify-end">
        <img
          src="/Avatar Image (1).png"
          alt=""
          className="h-9 w-9 rounded-full"
        />
      </div>
      <Card className="flex flex-col gap-4 p-6">
        <h3>Dishes category</h3>
        <div className="flex gap-3">
          <Button
            className={cn(
              "bg-white text-black border border-[#E4E4E7] rounded-full",
              selectedCategories === null && "bg-black text-white",
            )}
            onClick={() => handleCategorySelect(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category._id}
              onClick={() => handleCategorySelect(category._id)}
              className={cn(
                "bg-white text-black border border-[#E4E4E7] rounded-full",
                category._id === selectedCategories && "bg-black text-white",
              )}
            >
              {category.name}{" "}
              <Button
                className="rounded-full bg-white text-red-500 h-8 w-8"
                onClick={() => handleDelete(category._id)}
              >
                <Trash />
              </Button>
            </Button>
          ))}
          <CreateCategoryDialog />
        </div>
      </Card>
      <div className="flex gap-4">
        <CreateFoodDialog />

        {foods.map((food) => (
          <FoodCard
            key={food._id}
            id={food._id}
            name={food.name}
            price={food.price}
            ingredients={food.ingredients}
            image={food.image}
            categoryName={food._id}
          />
        ))}
      </div>

      {/* {selectedCategories === null
        ? categories.map((category) => (
            <CreateFoodDialog
              key={category._id}
              categoryId={category._id}
              categoryName={category.name}
            />
          ))
        : categories
            .filter((category) => category._id === selectedCategories)
            .map((el) => (
              <CreateFoodDialog
                key={el._id}
                categoryId={el._id}
                categoryName={el.name}
              />
            ))} */}
    </main>
  );
}
