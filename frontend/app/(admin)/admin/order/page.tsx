// "use client";
// import * as React from "react";
// import { ChevronDownIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import { Label } from "@/components/ui/label";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Checkbox } from "@radix-ui/react-checkbox";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// const data = [
//   {
//     Costumer: "Test@gamil.com",
//     Food: "Paid",
//     Date: "2024/12/20",
//     Total: "$250.00",
//     DeliveryAddress: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen",
//     No: 1,
//   },
//   {
//     Costumer: "Test@gamil.com",
//     Food: "Paid",
//     Date: "2024/12/20",
//     Total: "$250.00",
//     DeliveryAddress: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen",
//     No: 1,
//   },
//   {
//     Costumer: "Test@gamil.com",
//     Food: "Paid",
//     Date: "2024/12/20",
//     Total: "$250.00",
//     DeliveryAddress: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen",
//     No: 1,
//   },
//   {
//     Costumer: "Test@gamil.com",
//     Food: "Paid",
//     Date: "2024/12/20",
//     Total: "$250.00",
//     DeliveryAddress: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen",
//     No: 1,
//   },
//   {
//     Costumer: "Test@gamil.com",
//     Food: "Paid",
//     Date: "2024/12/20",
//     Total: "$250.00",
//     DeliveryAddress: "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen",
//     No: 1,
//   },
// ];

// export default function Page() {
//   const [open, setOpen] = React.useState(false);
//   const [date, setDate] = React.useState<Date | undefined>(undefined);
//   return (
//     <div className="flex w-full">
//       {/* <Layout /> */}

//       <div className="w-full h-full bg-gray-500 pl-6 pr-10 pt-6">
//         <div className="flex justify-end pb-6">
//           <img
//             className=" w-8 h-8 rounded-4xl "
//             src="/Avatar Image.png"
//             alt=""
//           />
//         </div>
//         <div className="flex bg-white justify-between px-4 py-5">
//           <div className="">
//             <div className="font-bold text-xl">Orders</div>
//             <div className="text-gray-500">32 items</div>
//           </div>
//           <div className="flex gap-7 justify-end">
//             <Popover open={open} onOpenChange={setOpen}>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant="outline"
//                   id="date"
//                   className="w-48 justify-between font-normal"
//                 >
//                   {date ? date.toLocaleDateString() : "Select date"}
//                   <ChevronDownIcon />
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent
//                 className="w-auto overflow-hidden p-0"
//                 align="start"
//               >
//                 <Calendar
//                   mode="single"
//                   selected={date}
//                   captionLayout="dropdown"
//                   onSelect={(date) => {
//                     setDate(date);
//                     setOpen(false);
//                   }}
//                 />
//               </PopoverContent>
//             </Popover>
//             <div className="bg-gray-500 rounded-2xl text-white flex justify-center items-center w-44.76 h-9 text-sm px-4">
//               Change delivery state
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center  border border-gray-400">
//           <Table>
//             <TableCaption>A list of your recent Orders</TableCaption>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>
//                   {" "}
//                   <input type="checkbox" />
//                 </TableHead>
//                 <TableHead>No</TableHead>
//                 <TableHead className="w-25">Costumer</TableHead>
//                 <TableHead>Food</TableHead>
//                 <TableHead>Date</TableHead>
//                 <TableHead>Total</TableHead>
//                 <TableHead>Delivery Address</TableHead>
//                 <TableHead>Delivery state</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {data.map((item, index) => (
//                 <TableRow key={index}>
//                   <TableCell>
//                     <input type="checkbox" />
//                   </TableCell>
//                   <TableCell>{item.No}</TableCell>
//                   <TableCell className="font-medium">{item.Costumer}</TableCell>
//                   <TableCell>{item.Food}</TableCell>
//                   <TableCell>{item.Date}</TableCell>
//                   <TableCell>{item.Total}</TableCell>
//                   <TableCell>{item.DeliveryAddress}</TableCell>
//                   <TableCell>Pending</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//             <TableFooter></TableFooter>
//           </Table>
//         </div>
//       </div>
//       {/* <Orders /> */}
//     </div>
//   );
// }

"use client";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type OrderStatus = "Pending" | "Delivered" | "Cancelled";

type Order = {
  _id: string;
  customerEmail: string;
  foodSummary: string;
  createdAt: string; // ISO
  total: number;
  deliveryAddress: string;
  status: OrderStatus;
};

export default function Page() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const [orders, setOrders] = React.useState<Order[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchOrders = React.useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // date filter хийх бол query явуулж болно:
      // const dateStr = date ? date.toISOString().slice(0, 10) : "";
      // const url = dateStr ? `/api/orders?date=${dateStr}` : "/api/orders";

      const res = await fetch("/api/orders", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch orders");

      const data = await res.json();
      // Хэрвээ backend чинь {items: []} гэдэг бүтэцтэй буцаавал:
      // setOrders(data.items);
      setOrders(Array.isArray(data) ? data : (data.items ?? []));
    } catch (e: any) {
      setError(e?.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // UI дээр date сонгоход fetch дахин хийх (хэрвээ date filter ашиглах бол)
  React.useEffect(() => {
    // date filter хэрэглэхгүй бол энэ хэсгийг авч болно
    // fetchOrders();
  }, [date, fetchOrders]);

  return (
    <div className="flex w-full">
      <div className="w-full h-full bg-gray-500 pl-6 pr-10 pt-6">
        <div className="flex justify-end pb-6">
          <img className="w-8 h-8 rounded-4xl" src="/Avatar Image.png" alt="" />
        </div>

        <div className="flex bg-white justify-between px-4 py-5">
          <div>
            <div className="font-bold text-xl">Orders</div>
            <div className="text-gray-500">
              {loading ? "Loading..." : `${orders.length} items`}
            </div>
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
                  onSelect={(d) => {
                    setDate(d);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>

            <button
              onClick={fetchOrders}
              className="bg-gray-700 rounded-2xl text-white flex justify-center items-center w-44 h-9 text-sm px-4"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center border border-gray-400 bg-white">
          <Table>
            <TableCaption>A list of your recent Orders</TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead>
                  <input type="checkbox" />
                </TableHead>
                <TableHead>No</TableHead>
                <TableHead className="w-25">Customer</TableHead>
                <TableHead>Food</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Delivery Address</TableHead>
                <TableHead>Delivery state</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading && (
                <TableRow>
                  <TableCell colSpan={8}>Loading orders...</TableCell>
                </TableRow>
              )}

              {!loading && error && (
                <TableRow>
                  <TableCell colSpan={8} className="text-red-600">
                    {error}
                  </TableCell>
                </TableRow>
              )}

              {!loading && !error && orders.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8}>No orders yet.</TableCell>
                </TableRow>
              )}

              {!loading &&
                !error &&
                orders.map((o, index) => (
                  <TableRow key={o._id}>
                    <TableCell>
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      {o.customerEmail}
                    </TableCell>
                    <TableCell>{o.foodSummary}</TableCell>
                    <TableCell>
                      {new Date(o.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>${o.total.toFixed(2)}</TableCell>
                    <TableCell className="max-w-[280px] truncate">
                      {o.deliveryAddress}
                    </TableCell>
                    <TableCell>{o.status}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
