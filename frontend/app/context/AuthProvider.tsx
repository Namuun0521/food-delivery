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

// type AuthUser = {
//   _id: string;
//   username: string;
//   email: string;
//   role: string;
// };

// type AuthContextType = {
//   user: AuthUser | null;
//   logout: () => void;
//   login: (username: string, password: string) => Promise<void>;
//   register: (
//     username: string,
//     email: string,
//     password: string,
//   ) => Promise<void>;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: PropsWithChildren) => {
//   const router = useRouter();
//   const [user, setUser] = useState<AuthUser | null>(null);

//   const login: AuthContextType["login"] = async (username, password) => {
//     try {
//       const { data } = await api.post<{ user: AuthUser; accessToken: string }>(
//         "/auth/login",
//         { username, password },
//       );

//       localStorage.setItem("accessToken", data.accessToken);
//       setUser(data.user);
//       //     router.push("/");
//       //   } catch {
//       //     toast.error("Invalid username or password");
//       //     throw new Error("LOGIN_FAILED"); // optional (debug-д хэрэгтэй)
//       //   }
//       // };
//       if (data.user.role === "admin") {
//         router.replace("/admin"); // replace зөв (back дарвал login руу буцахгүй)
//       } else {
//         router.replace("/"); // эсвэл "/menu" гэх мэт
//       }
//     } catch {
//       toast.error("Invalid username or password");
//       throw new Error("LOGIN_FAILED");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("accessToken");
//     setUser(null);
//     router.push("/auth/login");
//   };

//   const register: AuthContextType["register"] = async (
//     username,
//     email,
//     password,
//   ) => {
//     try {
//       console.log("REGISTER PAYLOAD 👉", { username, email, password });

//       const { data } = await api.post("/auth/register", {
//         username,
//         email,
//         password,
//       });

//       console.log("REGISTER RESPONSE ✅", data);
//       router.push("/auth/login");
//     } catch (err: any) {
//       toast.error("Registration failed");

//       console.error("REGISTER STATUS ❌", err?.response?.status);
//       console.error("REGISTER DATA ❌", err?.response?.data); // ✅ ЭНЭ Л ГОЛ
//       console.error("REGISTER MESSAGE ❌", err?.message);

//       throw err;
//     }
//   };
//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (!accessToken) return;

//     const fetchMe = async () => {
//       try {
//         const { data } = await api.get<{ user: AuthUser }>("/auth/me", {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         setUser(data.user);
//       } catch {
//         localStorage.removeItem("accessToken");
//         setUser(null);
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

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (ctx === undefined)
//     throw new Error("useAuth must be used within AuthProvider");
//   return ctx;
// };

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

// type AuthUser = {
//   _id: string;
//   username: string;
//   email: string;
//   role: string;
//   address?: string; // ⭐ address нэмэв
// };

// type AuthContextType = {
//   user: AuthUser | null;
//   logout: () => void;
//   login: (username: string, password: string) => Promise<void>;
//   register: (
//     username: string,
//     email: string,
//     password: string,
//   ) => Promise<void>;
//   refreshUser: () => Promise<void>; // ⭐ нэмэв
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: PropsWithChildren) => {
//   const router = useRouter();
//   const [user, setUser] = useState<AuthUser | null>(null);

//   // ⭐ LOGIN
//   const login: AuthContextType["login"] = async (username, password) => {
//     try {
//       const { data } = await api.post<{
//         user: AuthUser;
//         accessToken: string;
//       }>("/auth/login", { username, password });

//       localStorage.setItem("accessToken", data.accessToken);
//       setUser(data.user);

//       if (data.user.role === "admin") {
//         router.replace("/admin");
//       } else {
//         router.replace("/");
//       }
//     } catch {
//       toast.error("Invalid username or password");
//       throw new Error("LOGIN_FAILED");
//     }
//   };

//   // ⭐ LOGOUT
//   const logout = () => {
//     localStorage.removeItem("accessToken");
//     setUser(null);
//     router.push("/auth/login");
//   };

//   // ⭐ REGISTER
//   const register: AuthContextType["register"] = async (
//     username,
//     email,
//     password,
//   ) => {
//     try {
//       await api.post("/auth/register", {
//         username,
//         email,
//         password,
//       });

//       router.push("/auth/login");
//     } catch (err: any) {
//       toast.error("Registration failed");
//       throw err;
//     }
//   };

//   // ⭐ USER REFRESH
//   const refreshUser = async () => {
//     try {
//       const { data } = await api.get<{ user: AuthUser }>("/auth/me");
//       setUser(data.user);
//     } catch {
//       logout();
//     }
//   };

//   // ⭐ TOKEN байвал auto user татах
//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (!accessToken) return;

//     refreshUser();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{ user, login, logout, register, refreshUser }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside provider");
//   return ctx;
// };
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

// type AuthUser = {
//   _id: string;
//   username: string;
//   email: string;
//   role: string;
//   address?: string;
// };

// type AuthContextType = {
//   user: AuthUser | null;
//   logout: () => void;
//   login: (username: string, password: string) => Promise<boolean>;
//   register: (
//     username: string,
//     email: string,
//     password: string,
//   ) => Promise<void>;
//   refreshUser: () => Promise<void>;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: PropsWithChildren) => {
//   const router = useRouter();
//   const [user, setUser] = useState<AuthUser | null>(null);

//   const logout = () => {
//     localStorage.removeItem("accessToken");
//     setUser(null);
//     router.push("/auth/login");
//   };

//   const refreshUser = async () => {
//     try {
//       const { data } = await api.get<{ user: AuthUser }>("/auth/me");
//       setUser(data.user);
//     } catch {
//       logout();
//     }
//   };

//   // ✅ LOGIN (алдааг console дээр гаргана, throw хийхгүй)
//   const login: AuthContextType["login"] = async (username, password) => {
//     try {
//       const { data } = await api.post<{
//         user: AuthUser;
//         accessToken: string;
//       }>("/auth/login", { username, password });

//       localStorage.setItem("accessToken", data.accessToken);
//       setUser(data.user);

//       if (data.user.role === "admin") router.replace("/admin");
//       else router.replace("/");

//       return true;
//     } catch (err: any) {
//       console.error("LOGIN STATUS ❌", err?.response?.status);
//       console.error("LOGIN DATA ❌", err?.response?.data);
//       console.error("LOGIN MESSAGE ❌", err?.message);

//       toast.error(err?.response?.data?.message ?? "Login failed");
//       return false;
//     }
//   };

//   const register: AuthContextType["register"] = async (
//     username,
//     email,
//     password,
//   ) => {
//     try {
//       await api.post("/auth/register", { username, email, password });
//       router.push("/auth/login");
//     } catch (err: any) {
//       toast.error(err?.response?.data?.message ?? "Registration failed");
//       throw err;
//     }
//   };

//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (!accessToken) return;
//     refreshUser();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{ user, login, logout, register, refreshUser }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside provider");
//   return ctx;
// };

"use client";

import { api } from "@/lib/axios";
import { useRouter } from "next/navigation";
import React, {
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
  address?: string;
};

type AuthContextType = {
  user: AuthUser | null;
  logout: () => void;
  login: (username: string, password: string) => Promise<boolean>;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true); // ⭐

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    router.push("/auth/login");
  };

  const refreshUser = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setUser(null);
      setIsAuthLoading(false);
      return;
    }

    try {
      const { data } = await api.get<{ user: AuthUser }>("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(data.user);
    } catch (err) {
      // ⭐ энд заавал logout хийхгүй! (login дээр саад болдог)
      console.error("ME FAILED ❌", err);
      setUser(null);
      localStorage.removeItem("accessToken");
    } finally {
      setIsAuthLoading(false);
    }
  };

  const login: AuthContextType["login"] = async (username, password) => {
    try {
      const { data } = await api.post<{ user: AuthUser; accessToken: string }>(
        "/auth/login",
        { username, password },
      );

      localStorage.setItem("accessToken", data.accessToken);
      setUser(data.user);

      if (data.user.role === "admin") router.replace("/admin");
      else router.replace("/");

      return true;
    } catch (err: any) {
      console.error("LOGIN STATUS ❌", err?.response?.status);
      console.error("LOGIN DATA ❌", err?.response?.data);
      console.error("LOGIN MESSAGE ❌", err?.message);
      toast.error(err?.response?.data?.message ?? "Login failed");
      return false;
    }
  };

  const register: AuthContextType["register"] = async (
    username,
    email,
    password,
  ) => {
    try {
      await api.post("/auth/register", { username, email, password });
      router.push("/auth/login");
    } catch (err: any) {
      toast.error(err?.response?.data?.message ?? "Registration failed");
      throw err;
    }
  };

  useEffect(() => {
    refreshUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ⭐ Auth шалгаж дуусаагүй үед app render хийхгүй байж болно (optional)
  if (isAuthLoading) return null;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside provider");
  return ctx;
};
