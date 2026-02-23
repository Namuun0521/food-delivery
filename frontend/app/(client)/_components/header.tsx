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
  const { getTotalItems, setIsCartOpen } = useCart();
  const { user, logout, refreshUser } = useAuth();

  const [open, setOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <div className="w-screen h-17 flex items-center justify-between bg-black px-4">
      <img src="/Logo Container.png" alt="Logo" className="h-11 w-36.5" />

      <div className="flex gap-3 items-center">
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

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="px-4 py-1.5 h-9 bg-white rounded-full text-xs flex items-center gap-2 hover:bg-gray-50"
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
          className="w-9 h-9 bg-white rounded-full relative transition-all shadow-md"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="h-4 w-4 text-black" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white rounded-full px-1.5 py-0.5">
              {totalItems}
            </span>
          )}
        </Button>

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
