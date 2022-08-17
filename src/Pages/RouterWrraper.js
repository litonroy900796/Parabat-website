import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Futter from "../components/futter";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/AuthContext";
function RouterWrraper() {
  const { currentUser } = useAuth();
  return (
    <div>
      <Nav />
      {currentUser ? <Outlet /> : <Navigate to="/login" />}

      <Futter />
    </div>
  );
}

export default RouterWrraper;
