import { lazy } from "react";

const Signin = lazy(() => import("../components/SignIn"));
const OTPVerification = lazy(() => import("../components/OTPVerification"));

export const route = [
  {
    path: "/",
    // guard:true
    Element: Signin,
    isProtected: true,
  },
  {
    path: "/otpverification",
    Element: OTPVerification,
    isProtected: true,
  },
];
