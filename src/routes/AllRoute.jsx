import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { route } from "./route";
import { AuthGuard } from "../guards/AuthGuard";
const AllRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading .....</h1>}>
        <Routes>
          {route?.map((item, idx) => {
            if (item?.isProtected) {
              return (
                <Route
                  key={idx}
                  path={item?.path}
                  element={
                    <AuthGuard>
                      <item.Element />
                    </AuthGuard>
                  }
                />
              );
            } else {
              return (
                <Route key={idx} path={item?.path} element={<item.Element />} />
              );
            }
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoute;
