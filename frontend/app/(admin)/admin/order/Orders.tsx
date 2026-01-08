"use client";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@radix-ui/react-checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const data = [
  {
    Costumer: "Test@gamil.com",
    Food: "Paid",
    Date: "2024/12/20",
    Total: "$250.00",
    DeliveryAddress: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen",
    No: 1,
  },
  {
    Costumer: "Test@gamil.com",
    Food: "Paid",
    Date: "2024/12/20",
    Total: "$250.00",
    DeliveryAddress: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen",
    No: 1,
  },
  {
    Costumer: "Test@gamil.com",
    Food: "Paid",
    Date: "2024/12/20",
    Total: "$250.00",
    DeliveryAddress: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen",
    No: 1,
  },
  {
    Costumer: "Test@gamil.com",
    Food: "Paid",
    Date: "2024/12/20",
    Total: "$250.00",
    DeliveryAddress: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen",
    No: 1,
  },
  {
    Costumer: "Test@gamil.com",
    Food: "Paid",
    Date: "2024/12/20",
    Total: "$250.00",
    DeliveryAddress: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen",
    No: 1,
  },
];

export const Orders = () => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  return (
    <div className="w-full h-full bg-gray-500 pl-6 pr-10 pt-6">
      <div className="flex justify-end pb-6">
        <img className=" w-8 h-8 rounded-4xl " src="/Avatar Image.png" alt="" />
      </div>
      <div className="flex bg-white justify-between px-4 py-5">
        <div className="">
          <div className="font-bold text-xl">Orders</div>
          <div className="text-gray-500">32 items</div>
        </div>
        <div className="flex gap-7 justify-end">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-48 justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
          <div className="bg-gray-500 rounded-2xl text-white flex justify-center items-center w-44.76 h-9 text-sm px-4">
            Change delivery state
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  border border-gray-400">
        <Table>
          <TableCaption>A list of your recent Orders</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>
                {" "}
                <input type="checkbox" />
              </TableHead>
              <TableHead>No</TableHead>
              <TableHead className="w-[100px]">Costumer</TableHead>
              <TableHead>Food</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Delivery Address</TableHead>
              <TableHead>Delivery state</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>{item.No}</TableCell>
                <TableCell className="font-medium">{item.Costumer}</TableCell>
                <TableCell>{item.Food}</TableCell>
                <TableCell>{item.Date}</TableCell>
                <TableCell>{item.Total}</TableCell>
                <TableCell>{item.DeliveryAddress}</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </div>
    </div>
  );
};

{
  /* <div className="w-12">
          <input
            type="checkbox"
            // value={setting}
            // checked={this.settings[setting]}
            // onChange={this.onChangeAction.bind(this)}
          />
        </div>
        <div className="w-14">NO</div>
        <div className="w-53.25">Customer</div>
        <div className="w-40">Food</div>
        <div className="w-40">Date</div>
        <div className="w-40">Total</div>
        <div className="w-53.25">Delivery Address</div>
        <div className="w-40">Delivery</div>
      </div>
      <div className="flex justify-center items-center h-13 border border-gray-400">
        <div className="w-12">
          <input
            type="checkbox"
            // value={setting}
            // checked={this.settings[setting]}
            // onChange={this.onChangeAction.bind(this)}
          />
        </div>
        <div className="w-14">1</div>
        <div className="w-53.25">Test@gamil.com</div>
        <div className="w-40">2024/12/20</div>
        <div className="w-40">$26.97</div>
        <div className="w-40">Total</div>
        <div className="w-53.25">Delivery Address</div>
        <div className="w-40">Pending</div>
      </div>
    </div>
  );
}; */
}
