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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useState } from "react";
import { Trash } from "lucide-react";

type CardsProps = {
  image: string;
  mname: string;
  price: number;
  discription: string;
};
export const AddedCard = (props: CardsProps) => {
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
      <DialogContent className="sm:max-w-118">
        <DialogHeader>
          <DialogTitle>Dishes info</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4">
          <div className="gap-3 flex">
            <Label className="text-gray-500 w-30 text-xs" htmlFor="name-1">
              Dish name
            </Label>
            <Input
              id="name-1"
              name="name"
              defaultValue="Brie Crostini Appetizer"
            />
          </div>
          <div className="gap-3 flex">
            <Label className="text-gray-500 w-30 text-xs" htmlFor="username-1">
              Dish category
            </Label>
            <Input id="username-1" name="username" defaultValue="Appetizer" />
          </div>
        </div>
        <DialogFooter>
          <div className="flex gap-[250px]">
            <DialogClose asChild>
              <Button className="text-red-500 border-red-500" variant="outline">
                {" "}
                <Trash />{" "}
              </Button>
            </DialogClose>
            <Button className=" w-31.5" type="submit">
              Save changes
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
