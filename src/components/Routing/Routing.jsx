import React from "react";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";
import MainLayout from "../../pages/Layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";

export default function Routing() {
  return (
    <CustomErrorBoundary>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </CustomErrorBoundary>
  );
}
