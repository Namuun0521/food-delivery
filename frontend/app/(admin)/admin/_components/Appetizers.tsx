"use client";

import { AddCard } from "./AddCard";
import { AddedCard } from "./AddedCard";
export type data = {
  image: string;
  price: number;
  mname: string;
  discription: string;
  id: number;
};
export const data = [
  {
    image: "./Product Image.png",
    mname: "Finger food",
    price: 99,
    discription:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "./Product Image.png",
    mname: "name of food",
    price: 99,
    discription:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "./Product Image.png",
    mname: "name of food",
    price: 99,
    discription:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "./Product Image.png",
    mname: "name of food",
    price: 99,
    discription:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "./Product Image.png",
    mname: "name of food",
    price: 99,
    discription:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    image: "./Product Image.png",
    mname: "name of food",
    price: 99,
    discription:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
];
export const Appetizers = () => {
  return (
    <div className="bg-white py-6 px-6">
      <h1 className="py-6"> Appetizers (6) </h1>
      <AddCard />
      <div className=" gap-8  w-full grid grid-cols-1 sm:grid-cols-3 justify-center items-center pt-8 ">
        {data.map((item, index) => (
          <AddedCard
            key={index}
            image={item.image}
            mname={item.mname}
            price={item.price}
            discription={item.discription}
          />
        ))}
      </div>
    </div>
  );
};
