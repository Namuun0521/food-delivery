// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { any, z } from "zod";
// import { motion } from "framer-motion";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { ChevronLeft } from "lucide-react";

// import { useContext, useRef } from "react";

// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import Link from "next/link";
// import { StepContext } from "../auth/signup/page";

// const formSchema = z
//   .object({
//     password: z.string().min(8, {
//       message: "Password must include letters and numbers.",
//     }),
//     confirmpass: z.string().min(8, {
//       message: "Weak password. Use numbers and symbols.",
//     }),
//   })
//   .refine((data) => data.password === data.confirmpass, {
//     message: "Passwords do not match. Please try again.",
//     path: ["confirmpass"],
//   });

// export const variants = {
//   enter: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
//   exit: { opacity: 0, x: -100, transition: { duration: 1 }, delay: 1 },
//   initial: { opacity: 0, x: 100 },
// };

// export const CreatePassword = () => {
//   const { data, handleNext, handleBack, setData } = useContext(StepContext);

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       password: data.password,
//       confirmpass: data.confirmpass,
//     },
//   });

//   console.log(form.formState.errors);

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log("agadg");
//     console.log(values);
//     setData((prev) => ({
//       ...prev,
//       password: values.password,
//     }));
//     handleNext();
//   }
//   return (
//     <motion.div
//       initial="initial"
//       animate="enter"
//       exit="exit"
//       variants={variants}
//     >
//       <div className="w-screen h-scree bg-white flex justify-center items-center gap-12 ">
//         <div className="w-120 bg-white flex flex-col ">
//           <div className="px-8 ">
//             <Button
//               className="h-6 w-6 bg-white text-black border border-[#CBD5E1] text-[16px] mb-8 "
//               onClick={handleBack}
//               type="button"
//             >
//               {" "}
//               <ChevronLeft />
//             </Button>
//             <h1
//               className="text-2xl font-semibold

// "
//             >
//               Create a strong password{" "}
//             </h1>
//             <div
//               className="text-gray-500 text-base
// "
//             >
//               Create a strong password with letters, numbers.
//             </div>
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className=" pt-8 space-y-10"
//               >
//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <input
//                           type="password"
//                           placeholder="Password"
//                           {...field}
//                         />
//                       </FormControl>

//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="confirmpass"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <input
//                           type="password"
//                           placeholder="Confirm"
//                           {...field}
//                         />
//                       </FormControl>

//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <div className="flex flex-col gap-6">
//                   <div className="flex items-center gap-3">
//                     <Checkbox id="terms" />
//                     <Label htmlFor="terms">Show password</Label>
//                   </div>
//                 </div>
//                 <div className="flex">
//                   <Button className="h-11 w-full bg-white text-black border border-[#CBD5E1] text-[16px] mb-8 ">
//                     Let's Go
//                   </Button>
//                 </div>
//                 <Link href="/auth/login">letsgo</Link>
//               </form>
//             </Form>
//             <div className="flex">
//               <div className="text-gray-500 pt-1.5">
//                 Already have an account?
//               </div>
//               <Button className="text-blue-500 " variant="ghost">
//                 Log in{" "}
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <img
//             alt="img"
//             src="/Frame 1321316047.png"
//             className="w-214 h-226px "
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };
