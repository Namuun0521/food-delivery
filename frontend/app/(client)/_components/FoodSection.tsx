"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { parseAsBoolean, useQueryState } from "nuqs";
import { Cards } from "./Cards";
import { Princess_Sofia } from "next/font/google";

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
type FoodSectionProps = {
  categoryName: string;
  title: string;
};
// type Response = {
//   page: number;
//   results: Movie[];
//   total_pages: number;
//   total_result: number;
// };

export const FoodSection = (props: FoodSectionProps) => {
  const { categoryName, title } = props;
  const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState<Movie[]>([]);
  const arr = [1, 2, 3, 4, 5, 6];
  //   const handleClick = () => {
  //     setMore(true);
  //   };

  const [totalPage, setTotalPage] = useState(1);
  //   useEffect(() => {
  //     const getData = async () => {
  //       setLoading(true);
  //       try {
  //         const res = await fetch(
  //           `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${currentPage}`,
  //           {
  //             method: "GET",
  //             headers: {
  //               Authorization:
  //                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGEzNzg5MTlmNDZjZjgwYmNhNDZkMThiYTY2NzQ0MiIsIm5iZiI6MTc2MzUyMzY0Mi43NTEwMDAyLCJzdWIiOiI2OTFkM2MzYTYyYTA5ZGE0NmQ3YWQ2ZDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.HZMwjz4_eYyA0XA28jMAQt2UFvsMXnmYm0DFdEFLGMk",
  //               accept: "application/json",
  //             },
  //           }
  //         );

  //         const data = (await res.json()) as Response;
  //         console.log(data.results, "bbbbbbbhbbbb");
  //         setMovies(data.results);
  //         setTotalPage(data.total_pages);
  //       } catch (error) {
  //         console.log(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     getData();
  //   }, [movieId, currentPage]);

  return (
    <div className="px-22 py-12 bg-gray-500">
      <div className="flex justify-between">
        <h3 className="font-semibold text-3xl text-white">{title}</h3>
      </div>
      <div className=" gap-8  w-full grid grid-cols-1 sm:grid-cols-3 justify-center items-center pt-8 ">
        {data.map((item, index) => (
          <Cards
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
