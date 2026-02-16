// "use client";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { api } from "@/lib/axios";
// import { cn } from "@/lib/utils";
// import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
// import { Calendar, ChevronDown, ChevronsUpDownIcon } from "lucide-react";
// import { useEffect, useState } from "react";
// import { SelectStatus } from "../_components/Change-status";
// import { OrderContentType } from "../../../(client)/_components/cart/Order-Content";

// type User = {
//   userId: any;
//   orderItems: [
//     {
//       foodId: any;
//       quantity: Number;
//       price: Number;
//     },
//   ];
//   status: String;
//   address: String;
// };

// export default function OrdersPage() {
//   const [orderedFood, setOrderedFood] = useState<OrderContentType[]>([]);
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await api.get<OrderContentType[]>("/orders", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//           },
//         });
//         setOrderedFood(data);
//         console.log("Fetched Items", data);
//       } catch (error) {
//         console.log("Error fetching Items", error);
//       }
//     };

//     getData();
//   }, []);
//   console.log(orderedFood);

//   return (
//     <div className="w-screen flex flex-col gap-6 p-8">
//       <div className="w-full flex justify-end">
//         <img
//           src="/Avatar Image (1).png"
//           alt=""
//           className="h-9 w-9 rounded-full"
//         />
//       </div>
//       <Card className="flex flex-col">
//         <div className="flex justify-between px-4 items-center">
//           <div className="flex flex-col">
//             <p className="text-xl font-bold">Orders</p>
//             <p className="text-xs text-[#71717A]">12 items</p>
//           </div>
//           <div className="flex gap-3">
//             <Button className="h-9 w-75 bg-white text-black border border-[#E4E4E7] rounded-full">
//               <Calendar />
//               13 June 2023 - 14 July 2023
//             </Button>
//             <Button className="h-9 w-44.5 rounded-full opacity-20">
//               Change delivery state
//             </Button>
//           </div>
//         </div>
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>
//                 <Checkbox className="h-4 w-4" />
//               </TableHead>
//               <TableHead>№</TableHead>
//               <TableHead>Customer</TableHead>
//               <TableHead>Food</TableHead>
//               <TableHead className="flex justify-between items-center">
//                 Date <ChevronsUpDownIcon />
//               </TableHead>
//               <TableHead>Total</TableHead>
//               <TableHead>Delivery Address</TableHead>
//               <TableHead className="flex justify-between items-center">
//                 Delivery state <ChevronsUpDownIcon />
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {orderedFood.map((item, index) => (
//               <TableRow key={index}>
//                 <TableCell>
//                   <Checkbox className="h-4 w-4" />
//                 </TableCell>
//                 <TableCell>1</TableCell>
//                 <TableCell>{item.userId.username}</TableCell>
//                 <TableCell className="flex items-center">
//                   {item.orderItems.length} foods <ChevronDown />
//                 </TableCell>

//                 <TableCell>2026/01/20</TableCell>
//                 <TableCell>
//                   {item.orderItems.reduce(
//                     (acc, cur) => acc + cur.price * cur.quantity,
//                     0,
//                   )}
//                 </TableCell>
//                 <TableCell>{item.address}</TableCell>
//                 <Dialog>
//                   <DialogTrigger>
//                     <TableCell
//                       className={cn(
//                         item.status === "pending" &&
//                           "bg-white text-whie flex justify-between items-center rounded-full h-8 w-23.5 border border-red-500",
//                         item.status === "cancelled" &&
//                           "bg-white text-whie flex justify-between items-center rounded-full h-8 w-23.5 border ",
//                         item.status === "completed" &&
//                           "bg-white text-whie flex justify-between items-center rounded-full h-8 w-23.5 border border-green-500",
//                       )}
//                     >
//                       {item.status} <ChevronsUpDownIcon />
//                     </TableCell>
//                   </DialogTrigger>
//                   <DialogContent>
//                     <SelectStatus id={item._id} currentStatus={item.status} />
//                   </DialogContent>
//                 </Dialog>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Card>
//     </div>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/lib/axios";
import { cn } from "@/lib/utils";

import { Calendar, ChevronDown, ChevronsUpDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { SelectStatus } from "../_components/Change-status";
import { DialogTrigger } from "@radix-ui/react-dialog";

export type OrderContentType = {
  _id: string;
  userId: {
    username: string;
  };
  orderItems: {
    foodId: any;
    quantity: number;
    price: number;
  }[];
  status: string;
  address: string;
  createdAt: string;
};

function formatYMD(dateLike: string | Date) {
  const d = new Date(dateLike);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}/${mm}/${dd}`;
}

function statusPillClass(status: string) {
  switch (status) {
    case "pending":
      return "border-red-500 text-red-600 bg-red-50";
    case "completed":
      return "border-green-500 text-green-700 bg-green-50";
    case "cancelled":
      return "border-gray-300 text-gray-600 bg-gray-50";
    default:
      return "border-zinc-300 text-zinc-700 bg-white";
  }
}

function statusLabel(status: string) {
  if (status === "pending") return "Pending";
  if (status === "completed") return "Completed";
  if (status === "cancelled") return "Cancelled";
  return status;
}

export default function OrdersPage() {
  const [orderedFood, setOrderedFood] = useState<OrderContentType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get<OrderContentType[]>("/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        setOrderedFood(data);
        console.log("Fetched Items", data);
      } catch (error) {
        console.log("Error fetching Items", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="w-screen flex flex-col gap-6 p-8">
      {/* Avatar */}
      <div className="w-full flex justify-end">
        <img
          src="/Avatar Image (1).png"
          alt=""
          className="h-9 w-9 rounded-full"
        />
      </div>

      <Card className="flex flex-col">
        {/* Header */}
        <div className="flex justify-between px-4 items-center">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Orders</p>
            <p className="text-xs text-[#71717A]">{orderedFood.length} items</p>
          </div>

          <div className="flex gap-3">
            <Button className="h-9 w-75 bg-white text-black border border-[#E4E4E7] rounded-full">
              <Calendar />
              13 June 2023 - 14 July 2023
            </Button>
            <Button className="h-9 w-44.5 rounded-full opacity-20">
              Change delivery state
            </Button>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox className="h-4 w-4" />
              </TableHead>
              <TableHead>№</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Food</TableHead>
              <TableHead className="flex justify-between items-center">
                Date <ChevronsUpDownIcon />
              </TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Delivery Address</TableHead>
              <TableHead className="flex justify-between items-center">
                Delivery state <ChevronsUpDownIcon />
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {orderedFood.map((item, index) => {
              const total = item.orderItems.reduce(
                (acc, cur) => acc + cur.price * cur.quantity,
                0,
              );

              return (
                <TableRow key={item._id}>
                  <TableCell>
                    <Checkbox className="h-4 w-4" />
                  </TableCell>

                  {/* № */}
                  <TableCell>{index + 1}</TableCell>

                  {/* Customer */}
                  <TableCell>{item.userId?.username}</TableCell>

                  {/* Food count */}
                  <TableCell className="flex items-center">
                    {item.orderItems.length} foods <ChevronDown />
                  </TableCell>

                  {/* Date */}
                  <TableCell>{formatYMD(item.createdAt)}</TableCell>

                  {/* Total */}
                  <TableCell>{total}</TableCell>

                  {/* Address */}
                  <TableCell>{item.address}</TableCell>

                  {/* Status */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <TableCell
                        className={cn(
                          "flex justify-between items-center rounded-full h-8 w-24 border px-3 cursor-pointer text-xs font-medium",
                          statusPillClass(item.status),
                        )}
                      >
                        {statusLabel(item.status)}
                        <ChevronsUpDownIcon size={16} className="opacity-70" />
                      </TableCell>
                    </DialogTrigger>

                    <DialogContent>
                      <SelectStatus id={item._id} currentStatus={item.status} />
                    </DialogContent>
                  </Dialog>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
