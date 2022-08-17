import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Error from "./Error";
import Home from "./Home";
import Login from "./Login";
import RouterWrraper from "./RouterWrraper";
import Signup from "./Signup";
import SingleProduct from "./SingleProduct";

function Index() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<RouterWrraper />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<SingleProduct />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </AuthProvider>
  );
}

export default Index;
