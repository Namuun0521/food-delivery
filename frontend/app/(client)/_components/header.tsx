// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   ArrowRight,
//   ChevronRight,
//   ShoppingBasket,
//   ShoppingCart,
//   User,
// } from "lucide-react";
// import { useAuth } from "../context/AuthProvider";

// interface HeaderProps {
//   totalItems: number;
//   onCartClick: () => void;
// }

// export function Header({ totalItems, onCartClick }: HeaderProps) {
//   const { user } = useAuth();
//   return (
//     <header className="bg-[#1a1a1a] px-8 py-3 flex items-center justify-between border-b border-gray-800">
//       <div className="flex items-center gap-3">
//         <img src="/Logo Container.png" alt="" />
//       </div>

//       <div className="flex items-center gap-3">
//         <Button
//           variant="outline"
//           className="px-4 py-1.5 h-9 bg-white rounded-full text-xs flex items-center gap-2 hover:bg-gray-50 border-none shadow-sm"
//         >
//           <span className="text-red-500 text-sm"> Delivery address:</span>
//           <span className="text-gray-700 font-medium">Add Location</span>
//           <span className="text-gray-400 text-xs">
//             {" "}
//             <ChevronRight />
//           </span>
//         </Button>

//         <Button
//           size="icon"
//           className="w-9 h-9 bg-red-500 rounded-full hover:bg-red-600 relative transition-all shadow-md"
//           onClick={onCartClick}
//         >
//           <ShoppingCart className="h-4 w-4 text-white" />
//           {totalItems > 0 && (
//             <span className="absolute -top-1 -right-1 bg-white text-red-500 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm">
//               {totalItems}
//             </span>
//           )}
//         </Button>
//         <Button
//           size="icon"
//           variant="ghost"
//           className="w-9 h-9 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
//         >
//           <span className="text-white text-sm">
//             {" "}
//             <User />
//           </span>
//         </Button>
//         {user ? <></> : <Button>Login</Button>}
//       </div>
//     </header>
//   );
// }
// "use client";

// import { useAuth } from "@/app/context/AuthProvider";
// import { useCart } from "@/app/context/cart-context";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   ChevronRight,
//   LocationEdit,
//   Map,
//   MapIcon,
//   ShoppingCart,
//   User,
// } from "lucide-react";
// import Link from "next/link";
// import { Changeaddress } from "./Changeaddress";

// interface HeaderProps {
//   totalItems?: number;
//   onCartClick?: () => void;
// }

// export const Header = ({ totalItems }: HeaderProps) => {
//   const { addToCart, getTotalItems, setIsCartOpen } = useCart();

//   const { user, logout } = useAuth();

//   return (
//     <div className="w-screen h-17 flex items-center justify-between bg-black px-4">
//       <img src="/Logo Container.png" alt="" className="h-11 w-36.5" />
//       <div className="flex gap-3">
//         {user ? (
//           <></>
//         ) : (
//           <Link href="auth/signup">
//             <Button className="h-9 w-18.25 bg-white text-black rounded-full">
//               Sign up
//             </Button>
//           </Link>
//         )}
//         {user ? (
//           <></>
//         ) : (
//           <Link href="auth/login">
//             <Button className="h-9 w-16.25 bg-red-500 text-white rounded-full">
//               Log In
//             </Button>
//           </Link>
//         )}
//         <Dialog>
//           <DialogTrigger asChild>
//             <div className="px-4 py-1.5 h-9 bg-white rounded-full text-xs flex items-center gap-2 hover:bg-gray-50 border-none ">
//               <LocationEdit className="text-red-500" />
//               <p className="text-red-500">Delivery address:</p>
//               <p className="text-[#71717A]">Add Location</p>
//               <ChevronRight className="text-[#18181B]" />
//             </div>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogTitle>
//               <Changeaddress />
//             </DialogTitle>
//           </DialogContent>
//         </Dialog>
//         <Button
//           size="icon"
//           className="w-9 h-9 bg-white rounded-full hover:bg-red-600 relative transition-all shadow-md"
//           onClick={() => setIsCartOpen(true)}
//         >
//           <ShoppingCart className="h-4 w-4 text-black" />
//         </Button>
//         {user ? (
//           <Button
//             className="text-white flex items-center"
//             variant="outline"
//             onClick={logout}
//           >
//             Hello {user.username}!
//           </Button>
//         ) : (
//           <Link href="auth/login">
//             <Button className="w-9 h-9 bg-red-500 rounded-full hover:bg-red-600 relative transition-all shadow-md">
//               <User />
//             </Button>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };
"use client";

import { useState } from "react";
import { useAuth } from "@/app/context/AuthProvider";
import { useCart } from "@/app/context/cart-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, LocationEdit, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Changeaddress } from "./Changeaddress";

export const Header = () => {
  const { setIsCartOpen, getTotalItems } = useCart();
  const { user, logout, refreshUser } = useAuth(); // ✅ refreshUser байх ёстой
  const [open, setOpen] = useState(false);

  const totalItems = getTotalItems();

  return (
    <div className="w-screen h-17 flex items-center justify-between bg-black px-4">
      <img src="/Logo Container.png" alt="Logo" className="h-11 w-36.5" />

      <div className="flex gap-3 items-center">
        {/* Sign up / Login */}
        {!user && (
          <>
            <Link href="/auth/signup">
              <Button className="h-9 bg-white text-black rounded-full">
                Sign up
              </Button>
            </Link>

            <Link href="/auth/login">
              <Button className="h-9 bg-red-500 text-white rounded-full">
                Log In
              </Button>
            </Link>
          </>
        )}

        {/* Address dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="px-4 py-1.5 h-9 bg-white rounded-full text-xs flex items-center gap-2 hover:bg-gray-50 border-none"
            >
              <LocationEdit className="text-red-500" />
              <span className="text-red-500">Delivery address:</span>

              <span className="text-[#71717A] max-w-40 truncate">
                {user?.address?.trim() ? user.address : "Add Location"}
              </span>

              <ChevronRight className="text-[#18181B]" />
            </button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delivery address</DialogTitle>
            </DialogHeader>

            <Changeaddress
              onClose={() => setOpen(false)}
              onSaved={refreshUser}
            />
          </DialogContent>
        </Dialog>

        {/* Cart */}
        <Button
          size="icon"
          className="w-9 h-9 bg-white rounded-full relative"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="h-4 w-4 text-black" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white rounded-full px-1.5 py-0.5">
              {totalItems}
            </span>
          )}
        </Button>

        {/* User / Logout */}
        {user ? (
          <Button variant="outline" className="text-white" onClick={logout}>
            Hello {user.username}!
          </Button>
        ) : (
          <Link href="/auth/login">
            <Button className="w-9 h-9 bg-red-500 rounded-full">
              <User />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
