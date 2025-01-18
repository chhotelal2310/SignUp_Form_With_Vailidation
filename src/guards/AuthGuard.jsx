import React from "react";
import Cookies from "js-cookie";
// import route from "../routes/route";
export const AuthGuard = ({ children }) => {
  // route?.map
  let token = Cookies.get("token");
  console.log(children);
  console.log(token);
  return <>{children}</>;
};
