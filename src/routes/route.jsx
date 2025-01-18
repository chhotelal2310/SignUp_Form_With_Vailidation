import { lazy } from "react";
const Signin = lazy(() => import("../components/SignIn"));
const OTPVerification = lazy(() => import("../components/OTPVerification"));
const Signup = lazy(() => import("../components/Signup"));
const TaralityHome = lazy(() => import("../Pages/TaralityHome"));

export const route = [
  {
    path: "/signin",
    Element: Signin,
    isProtected: true,
  },
  {
    path: "/otpverification",
    Element: OTPVerification,
    isProtected: true,
  },
  {
    path: "/taralityHome",
    Element: TaralityHome,
    isProtected: true,
  },
  {
    path: "/",
    Element: Signup,
    isProtected: false,
  },
];
