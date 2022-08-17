import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function PrivateRoute({ Children }) {
  const { currentUser } = useAuth();
  return currentUser ? Children : <Navigate to="login" />;
}
