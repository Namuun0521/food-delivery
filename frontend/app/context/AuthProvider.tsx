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

// "use client";

// import { api } from "@/lib/axios";
// import { useRouter } from "next/navigation";
// import {
//   createContext,
//   PropsWithChildren,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import { toast } from "sonner";

// type AuthContextType = {
//   user: User | null;
//   logout: () => void;
//   login: (username: string, password: string) => Promise<void>;
//   register: (
//     username: string,
//     email: string,
//     password: string,
//   ) => Promise<void>;
// };

// type User = {
//   _id: string;
//   username: string;
//   email: string;
//   role: string;
// };

// const AuthContext = createContext({} as AuthContextType);

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
//     const { data } = await api.post("/auth/register", {
//       username,
//       email,
//       password,
//     });
//     router.push("/auth/login");
//     console.log("REGISTER RESPONSE 👉", data);
//   };

//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");

//     const fetchMe = async () => {
//       try {
//         const { data } = await api.get<{ user: User }>("/auth/me", {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setUser(data.user);
//       } catch {
//         localStorage.removeItem("accessToken");
//       }
//     };
//     fetchMe();
//   }, []);
//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

type AuthUser = {
  _id: string;
  username: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: AuthUser | null;
  logout: () => void;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);

  const login: AuthContextType["login"] = async (username, password) => {
    try {
      const { data } = await api.post<{ user: AuthUser; accessToken: string }>(
        "/auth/login",
        { username, password },
      );

      localStorage.setItem("accessToken", data.accessToken);
      setUser(data.user);
      //     router.push("/");
      //   } catch {
      //     toast.error("Invalid username or password");
      //     throw new Error("LOGIN_FAILED"); // optional (debug-д хэрэгтэй)
      //   }
      // };
      if (data.user.role === "admin") {
        router.replace("/admin"); // replace зөв (back дарвал login руу буцахгүй)
      } else {
        router.replace("/"); // эсвэл "/menu" гэх мэт
      }
    } catch {
      toast.error("Invalid username or password");
      throw new Error("LOGIN_FAILED");
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    router.push("/auth/login");
  };

  const register: AuthContextType["register"] = async (
    username,
    email,
    password,
  ) => {
    try {
      console.log("REGISTER PAYLOAD 👉", { username, email, password });

      const { data } = await api.post("/auth/register", {
        username,
        email,
        password,
      });

      console.log("REGISTER RESPONSE ✅", data);
      router.push("/auth/login");
    } catch (err: any) {
      toast.error("Registration failed");

      console.error("REGISTER STATUS ❌", err?.response?.status);
      console.error("REGISTER DATA ❌", err?.response?.data); // ✅ ЭНЭ Л ГОЛ
      console.error("REGISTER MESSAGE ❌", err?.message);

      throw err;
    }
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    const fetchMe = async () => {
      try {
        const { data } = await api.get<{ user: AuthUser }>("/auth/me", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setUser(data.user);
      } catch {
        localStorage.removeItem("accessToken");
        setUser(null);
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

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (ctx === undefined)
    throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
