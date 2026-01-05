import { LayoutDashboard, Van } from "lucide-react";

// export const Layout = () => {
//   return (
//     <div className="h-full w-51.25 bg-white px-5 pt-8">
//       <img className="h-11 w-41.25 " src="/Logo Container11.png" alt="" />
//       <div className="w-41.25 h-10 rounded-4xl bg-black text-white flex justify-center items-center gap-2 mt-10">
//         {" "}
//         <LayoutDashboard /> Food menu{" "}
//       </div>
//       <div className=" flex justify-center items-center gap-2 m-6">
//         {" "}
//         <Van /> Orders{" "}
//       </div>
//     </div>
//   );
// };

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./admin/_components/AppSiderbar";
// import { AppSidebar } from "./admin/_components/AppSiderbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* <SidebarTrigger /> */}
      {children}
    </SidebarProvider>
  );
}
