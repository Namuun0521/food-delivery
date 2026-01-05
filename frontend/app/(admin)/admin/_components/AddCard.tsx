import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash } from "lucide-react";
export const AddCard = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" h-60.25 w-[270.75px] bg-[#F4F4F5] flex flex-col rounded-lg px-4 py-4">
          <div className="flex flex-col justify-center items-center pt-[68.5px]">
            <div className="w-10 h-10 rounded-4xl bg-red-500 text-white flex justify-center items-center">
              {" "}
              +{" "}
            </div>
            <div className="">
              <p className="">Add new Dish to </p>
              <p className="">Appetizers</p>
            </div>
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
          <div className="flex gap-62.5">
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
