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
// import { CreateAccount } from "../../_components/CreateAccount";
// import { CreatePassword } from "../../_components/CreatePassword";
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
//   confirmpass: string;
// };

// const initValue = {
//   email: "",
//   password: "",
//   confirmpass: "",
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
//         <AnimatePresence>{step == 1 && <CreateAccount />}</AnimatePresence>
//         <AnimatePresence>{step == 2 && <CreatePassword />}</AnimatePresence>
//       </div>
//     </StepContext.Provider>
//   );
// }

"use client";

import { FirstStep } from "@/app/_components/Firststep";
import { SecondStep } from "@/app/_components/Secondstep";
import { useState } from "react";

export default function Signup() {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep(2);
  };
  const handlePrevStep = () => {
    setStep(1);
  };

  return step === 1 ? (
    <FirstStep step={step} onNextStep={handleNextStep} />
  ) : (
    <SecondStep step={step} onPrevStep={handlePrevStep} />
  );
}
