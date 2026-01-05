"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { any, z } from "zod";
import { motion } from "framer-motion";

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
import { ChevronLeft } from "lucide-react";

import { useContext, useRef } from "react";
import { StepContext } from "../login/page";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Invalid email. Use a format like example@email.com.",
  }),

  password: z.string().min(2, {
    message: "Incorrect password. Please try again.",
  }),
});

export const variants = {
  enter: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  exit: { opacity: 0, x: -100, transition: { duration: 1 }, delay: 1 },
  initial: { opacity: 0, x: 100 },
};

export const ResetPassword = () => {
  const { data, handleNext, handleBack, setData } = useContext(StepContext);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: data.email,
      password: data.password,
    },
  });

  console.log(form.formState.errors);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("agadg");
    console.log(values);
    setData((prev) => ({
      ...prev,
      email: values.email,
      password: values.password,
    }));
    handleNext();
  }

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <div className="w-screen h-scree bg-white flex justify-center items-center gap-12 ">
        <div className="w-120 bg-white flex flex-col ">
          <div className="px-8 ">
            <Button
              className="h-6 w-6 bg-white text-black border border-[#CBD5E1] text-[16px] mb-8 "
              onClick={handleBack}
              type="button"
            >
              {" "}
              <ChevronLeft />
            </Button>
            <h1
              className="text-2xl font-semibold

"
            >
              Reset your password{" "}
            </h1>
            <div
              className="text-gray-500 text-base
"
            >
              Enter your email to receive a password reset link.
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" pt-8 space-y-10"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <input
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex">
                  <Button className="h-11 w-full bg-white text-black border border-[#CBD5E1] text-[16px] mb-8 ">
                    Send link
                  </Button>
                </div>
              </form>
            </Form>
            <div className="flex">
              <div className="text-gray-500 pt-1.5">Don’t have an account?</div>
              <Button className="text-blue-500 " variant="ghost">
                Sign up{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex">
          <img
            alt="img"
            src="/Frame 1321316047.png"
            className="w-214 h-226px "
          />
        </div>
      </div>
    </motion.div>
  );
};
