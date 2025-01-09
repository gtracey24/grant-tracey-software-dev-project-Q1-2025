import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

