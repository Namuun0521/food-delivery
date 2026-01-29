import { Toaster } from "@/components/ui/sonner";

import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/app/context/AuthProvider";
import { CartProvider } from "@/app/context/cart-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
console.log("AuthProvider rendered");
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" suppressHydrationWarning>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
      <Toaster />
    </div>
  );
}
