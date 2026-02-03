import { Card } from "@/components/ui/card";

import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { CreateFoodDialog } from "@/app/(admin)/admin/_components/CreateFoodDialog";
import { FoodCard } from "./FoodCard";

export type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  categoryId: {
    _id: string;
    name: string;
  }[];
};

export type FoodSectionProps = {
  categoryName: string;
  categoryId: string;
};

export const CategoryFoods = ({
  categoryName,
  categoryId,
}: FoodSectionProps) => {
  const [foods, setFoods] = useState<Food[]>([]);
  useEffect(() => {
    if (!categoryId) return;

    const getData = async () => {
      const { data } = await api.get<Food[]>(`/foods/category/${categoryId}`);
      setFoods(data);
    };

    getData();
  }, [categoryId]);

  return (
    <Card className="flex flex-col gap-4 p-4">
      <p>{categoryName}</p>
      <div className="grid grid-cols-4 gap-4 p-6">
        <CreateFoodDialog />
        <div>
          {foods.map((food) => (
            <FoodCard
              key={food._id}
              id={food._id}
              name={food.name}
              price={food.price}
              ingredients={food.ingredients}
              image={food.image}
              categoryName={categoryName}
              categoryId={categoryId}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};
