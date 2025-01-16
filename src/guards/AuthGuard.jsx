import React from "react";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";

export const AuthGuard = ({ children }) => {
  // const navigate = useNavigate();
  let token = Cookies.get("token");
  console.log(token);
  // if (token) {
  //   navigate("/signin");
  // }
  return <>{children}</>;

  // return !token ? navigate("/") : navigate("/signin");
};

// export const ProtectedRoutes = () => {
//   const navigate = useNavigate();
//   let token = Cookies.get("chhotelal@tarality.com");
//   console.log(token);

//   return !token ? <Outlet /> : navigate("/taralityhome");
// };
