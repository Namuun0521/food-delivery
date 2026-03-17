// "use client";

// import { Button } from "@/components/ui/button";
// import { api } from "@/lib/axios";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";

// import { toast } from "sonner";
// import { CartItem as CartItemType } from "@/app/context/cart-context";
// import { EmptyCart } from "./empty-cart";
// import { CartItem } from "./cart-item";
// import { PaymentSummary } from "./payment-summary";

// interface CartContentProps {
//   cartItems: CartItemType[];
//   subtotal: number;
//   shipping: number;
//   total: number;
//   onUpdateQuantity: (id: string, quantity: number) => void;
//   onRemoveFromCart: (id: string) => void;
// }
// export function CartContent({
//   cartItems,
//   subtotal,
//   shipping,
//   total,
//   onUpdateQuantity,
//   onRemoveFromCart,
// }: CartContentProps) {
//   const [delivery, setDelivery] = useState("");

//   const ToOrder = async () => {
//     if (delivery === "") return toast.error("Hayg oruulnuu");
//     await api.post(
//       "/orders/create",
//       {
//         orderItems: cartItems.map((item: CartItemType) => ({
//           foodId: item._id,
//           quantity: item.quantity,
//           price: item.price,
//         })),
//         address: delivery,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       },
//     );
//   };
//   return (
//     <>
//       <div className="flex-1 overflow-auto px-6 py-4">
//         <h3 className="text-lg font-semibold mb-4">My cart</h3>

//         {cartItems.length === 0 ? (
//           <EmptyCart />
//         ) : (
//           <div className="space-y-4">
//             {cartItems.map((item) => (
//               <CartItem
//                 key={item._id}
//                 item={item}
//                 onUpdateQuantity={onUpdateQuantity}
//                 onRemove={onRemoveFromCart}
//               />
//             ))}
//           </div>
//         )}

//         {cartItems.length > 0 && (
//           <>
//             <div className="mt-6">
//               <h4 className="text-sm font-semibold mb-2">Delivery location</h4>
//               <Input
//                 placeholder="Please share your complete address"
//                 className="bg-white"
//                 onChange={(e) => setDelivery(e.target.value)}
//               />
//             </div>
//             <PaymentSummary
//               subtotal={subtotal}
//               shipping={shipping}
//               total={total}
//             />
//           </>
//         )}
//       </div>

//       {cartItems.length > 0 && (
//         <div className="p-6 border-t">
//           <Button
//             className="w-full bg-red-500 hover:bg-red-600 text-white py-6 rounded-full text-base font-semibold"
//             onClick={ToOrder}
//           >
//             Check out
//           </Button>
//         </div>
//       )}
//     </>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { toast } from "sonner";
import { CartItem as CartItemType } from "@/app/context/cart-context";
import { EmptyCart } from "./empty-cart";
import { CartItem } from "./cart-item";
import { PaymentSummary } from "./payment-summary";

interface CartContentProps {
  cartItems: CartItemType[];
  subtotal: number;
  shipping: number;
  total: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveFromCart: (id: string) => void;
  onOrderSuccess: () => void; // ⭐ Шинээр нэмсэн
}

export function CartContent({
  cartItems,
  subtotal,
  shipping,
  total,
  onUpdateQuantity,
  onRemoveFromCart,
  onOrderSuccess, // ⭐ Шинээр нэмсэн
}: CartContentProps) {
  const [delivery, setDelivery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // ⭐ Loading state

  const ToOrder = async () => {
    if (delivery === "") return toast.error("Hayg oruulnuu");

    try {
      const response = await api.post(
        "/orders/create",
        {
          orderItems: cartItems.map((item: CartItemType) => ({
            foodId: item._id,
            quantity: item.quantity,
            price: item.price,
          })),
          address: delivery,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        },
      );

      console.log("✅ Order created:", response.data);
      toast.success("Order created successfully!");

      // TODO: Cart арилгах функц CartContext-д нэмэх хэрэгтэй
      // Одоохондоо drawer-г хааж байна
    } catch (error: any) {
      console.error("❌ Order failed:", error);
      console.error("Response data:", error?.response?.data);
      console.error("Status:", error?.response?.status);

      const errorMessage =
        error?.response?.data?.message || "Failed to create order";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className="flex-1 overflow-auto px-6 py-4">
        <h3 className="text-lg font-semibold mb-4">My cart</h3>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveFromCart}
              />
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Delivery location</h4>
              <Input
                placeholder="Please share your complete address"
                className="bg-white"
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <PaymentSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-6 border-t">
          <Button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-6 rounded-full text-base font-semibold"
            onClick={ToOrder}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Check out"}
          </Button>
        </div>
      )}
    </>
  );
}
