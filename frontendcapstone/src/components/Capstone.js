import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Capstone.css";

export const Capstone = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("capstone_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);


// export const Farms = () => (
//   <>
//       <Route
//           render={() => {
//               if (localStorage.getItem("find-a-farm_user")) {
//                   return (
//                       <>
//                           <HeaderCard />
//                           <ApplicationViews />
//                       </>
//                   );
//           } else {
//           return <Redirect to="/welcome" />;
//           }
//       }}
//   />
//       <Route path="/welcome">
//           <HeaderCard />
//           <WelcomePage />
//       </Route>
//   </>
// )






