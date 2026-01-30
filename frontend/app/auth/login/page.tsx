// "use client";

// import {
//   createContext,
//   Dispatch,
//   SetStateAction,
//   useEffect,
//   useState,
// } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Section1 } from "../../_components/Section1";
// import { ForgotPass } from "../../_components/ForgotPass";
// import { Verify } from "../../_components/Verify";
// type StepContextType = {
//   step: number;
//   setStep: Dispatch<SetStateAction<number>>;
//   handleNext: () => void;
//   handleBack: () => void;
//   data: Data;
//   setData: React.Dispatch<React.SetStateAction<Data>>;
// };

// export const StepContext = createContext<StepContextType>(
//   {} as StepContextType,
// );

// export type Data = {
//   email: string;
//   password: string;
// };

// const initValue = {
//   email: "",
//   password: "",
// };

// export default function Page() {
//   const [step, setStep] = useState(1);
//   const [isReady, setIsReady] = useState(false);

//   const [data, setData] = useState<Data>(initValue);

//   const handleNext = () => {
//     setStep((prev) => Math.min(prev + 1, 4));
//   };

//   const handleBack = () => {
//     setStep((prev) => Math.max(prev - 1, 1));
//   };

//   useEffect(() => {
//     const saved = localStorage.getItem("data");
//     const savedData = JSON.parse(saved ?? JSON.stringify(initValue));
//     setData({
//       ...savedData,
//       datepicker: new Date(savedData.datepicker),
//     });
//     setIsReady(true);
//   }, []);

//   useEffect(() => {
//     if (!isReady) return;
//     localStorage.setItem("data", JSON.stringify(data));
//   }, [data, isReady]);

//   if (!isReady) return null;

//   return (
//     <StepContext.Provider
//       value={{ setStep, handleNext, handleBack, data, setData, step }}
//     >
//       <div className="h-screen w-screen flex justify-center items-center bg-[#7F7F800D]">
//         <AnimatePresence>{step == 1 && <Section1 />}</AnimatePresence>
//         <AnimatePresence>{step == 2 && <ForgotPass />}</AnimatePresence>
//         <AnimatePresence>{step == 3 && <Verify />}</AnimatePresence>
//       </div>
//     </StepContext.Provider>
//   );
// }
"use client";
import { useAuth } from "@/app/context/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z, { email } from "zod";

export default function Login() {
  const { login } = useAuth();

  const formSchema = z.object({
    username: z.string({
      message: "Invalid email. Use a format like example@email.com.",
    }),
    password: z.string({
      message: "Incorrect password. Please try again.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values.username, values.password);
    console.log("agadg");
    console.log(values);
  }
  return (
    <div className="h-screen w-screen gap-5 flex px-15 items-center justify-center">
      <div className=" w-104 flex flex-col gap-6">
        <ChevronLeft className="h-9 w-9 rounded-md border border-[#E4E4E7] " />
        <div className="flex flex-col gap-1">
          <p className="text-[24px] font-semibold">Log in </p>
          <p className="text-[#71717A] text-[16px]">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        className="h-9 w-104"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        className="h-9 w-104"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="underline text-[14px]">Forgot password ?</p>

              <Button
                className="h-9 w-104 bg-[#18181B] text-white opacity-20 rounded-md"
                type="submit"
              >
                Let's Go
              </Button>
            </form>
          </Form>
        </div>

        <div className="flex gap-3">
          <p className="text-[#71717A] text-[16px]">Don't have an account?</p>
          <Link href="/auth/signup">
            <p className="text-[16px] text-[#2563EB]">Sign up </p>
          </Link>
        </div>
      </div>
      <img src="/Frame 1321316047.png" className="h-225 w-210 rounded-md" />
    </div>
  );
}
