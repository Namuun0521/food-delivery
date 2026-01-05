import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputGroup } from "@/components/ui/input-group";

import { ToastContainer, toast } from "react-toastify";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useState } from "react";

type CardsProps = {
  image: string;
  mname: string;
  price: number;
  discription: string;
};
export const Cards = (props: CardsProps) => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter === 0) {
      alert("Counter cannot go below zero!");
      return;
    }
    setCounter(counter - 1);
  };
  const notify = () => toast("Done!");
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" h-85.5 bg-[#F4F4F5] flex flex-col rounded-lg px-4 py-4">
          <img
            alt="photo"
            src={props.image}
            className=" h-52.5 w-full rounded-t-lg"
          />
          <div className="py-2 px-2">
            <div className="flex justify-between text-center items-center">
              <div className="text-2xl font-semibold text-red-500 ">
                {props.mname}
              </div>
              <div className="text-lg font-semibold">${props.price}</div>
            </div>
            <div className="text-sm">{props.discription}</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="min-w-206.5 py-6 px-6">
        <DialogTitle></DialogTitle>
        <div className=" flex gap-6">
          <img
            alt="photo"
            src={props.image}
            className=" h-91 w-94.25 rounded-t-lg"
          />
          <div className="pt-8 h-91 flex flex-col justify-between">
            <div className="">
              <div className="text-2xl font-semibold text-red-500 ">
                {props.mname}{" "}
              </div>
              <div className="text-sm">{props.discription}</div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="">Total price</div>
              <div className=" flex justify-between pb-6">
                <div className="text-lg font-semibold">${props.price}</div>
                <div className="buttons flex justify-center items-center gap-3">
                  <div>
                    <Button
                      variant="outline"
                      className="w-11 h-11 rounded-4xl"
                      onClick={() => decrease()}
                    >
                      -
                    </Button>
                  </div>
                  <div key={counter} className="counter-value pulse">
                    <strong key={counter} className="pulse">
                      {counter}
                    </strong>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      className="w-11 h-11 rounded-4xl"
                      onClick={() => increase()}
                    >
                      +
                    </Button>
                  </div>
                  <div></div>
                </div>
              </div>
              <Button onClick={notify}>Add to cart</Button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
