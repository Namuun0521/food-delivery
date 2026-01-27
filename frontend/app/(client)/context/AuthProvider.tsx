// "use client";

// import { api } from "@/lib/axios";
// import { useRouter } from "next/navigation";

// import { createContext, PropsWithChildren, useContext, useState } from "react";
// import { toast } from "sonner";

// type AuthContextType = {
//   user: User | null;
//   login: (username: string, password: string) => Promise<void>;
//   register: (
//     username: string,
//     email: string,
//     password: string,
//   ) => Promise<void>;
// };
// type User = {
//   _id: string;
//   name: string;
//   email: string;
//   role: string;
// };
// export const AuthContext = createContext({} as AuthContextType);

// export const AuthProvider = ({ children }: PropsWithChildren) => {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);

//   const login = async (username: string, password: string) => {
//     try {
//       const { data } = await api.post<{ user: User; accessToken: string }>(
//         "auth/login",
//         {
//           username,
//           password,
//         },
//       );
//       const { user, accessToken } = data;
//       localStorage.setItem("accessToken", accessToken);
//       setUser(user);

//       router.push("/");
//     } catch {
//       toast.error("Invalid username or password");
//     }
//   };
//   const logout = () => {
//     localStorage.removeItem("accessToken");
//     setUser(null);
//   };

//   const register = async (
//     username: string,
//     email: string,
//     password: string,
//   ) => {
//     await api.post("auth/login", {
//       username,
//       email,
//       password,
//     });
//     router.push("auth/login");
//   };
//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {" "}
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

"use client";

import { api } from "@/lib/axios";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";
import { email } from "zod";

type AuthContextType = {
  user: User | null;
  logout: () => void;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
};

type User = {
  _id: string;
  username: string;
  email: string;
  role: string;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    try {
      const { data } = await api.post<{ user: User; accessToken: string }>(
        "auth/login",
        {
          username,
          password,
        },
      );
      const { user, accessToken } = data;
      localStorage.setItem("accessToken", accessToken);
      setUser(user);

      router.push("/");
    } catch {
      toast.error("Invalid username or password");
    }
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
  };

  const register = async (
    username: string,
    email: string,
    password: string,
  ) => {
    const { data } = await api.post("/auth/register", {
      username,
      email,
      password,
    });
    router.push("/auth/login");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const fetchMe = async () => {
      try {
        const { data } = await api.get<{ user: User }>("/auth/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUser(data.user);
      } catch {
        localStorage.removeItem("accessToken");
      }
    };
    fetchMe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
