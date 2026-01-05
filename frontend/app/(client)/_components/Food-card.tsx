"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

export interface FoodItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface FoodCardProps {
  item: FoodItem;
  onClick: (item: FoodItem) => void;
}

export function FoodCard({ item, onClick }: FoodCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 p-0 bg-white">
      <div className="relative h-40 overflow-hidden group">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Button
          size="icon"
          className="absolute bottom-3 right-3 w-8 h-8 bg-white text-gray-900 rounded-full shadow-md hover:bg-red-500 hover:text-white hover:shadow-lg transition-all"
          onClick={() => onClick(item)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-1.5">
          <h4 className="text-red-500 font-bold text-base leading-tight">
            {item.name}
          </h4>
          <span className="text-gray-900 font-bold text-sm whitespace-nowrap ml-2">
            {item.price}
          </span>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
}
