// "use client";

// import { Input } from "@/components/ui/input";
// import { ChevronRight, LocationEdit } from "lucide-react";

// export function DeliveryLocation() {
//   return (
//     <div className="mt-6">
//       <h4 className="text-sm font-semibold mb-2">Delivery location</h4>
//       <Input
//         placeholder="Please share your complete address"
//         className="bg-white"
//       />
//     </div>
//   );
// }
"use client";

import { useAuth } from "@/app/context/AuthProvider";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Changeaddress } from "../Changeaddress";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const DeliveryLocation = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-xl p-4 mt-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <MapPin className="text-red-500" />

        <div>
          <p className=" text-gray-500">Delivery location</p>
          <p className="text-sm font-medium">
            {user?.address || "No address added"}
          </p>
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="rounded-full">
            {/* {user?.address ? "Change" : "Add"} */}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <Changeaddress />
        </DialogContent>
      </Dialog>
    </div>
  );
};
