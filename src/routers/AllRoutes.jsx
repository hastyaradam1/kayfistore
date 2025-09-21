import React, { lazy } from "react";
import { Route, Routes } from "react-router";
const Home = lazy(() => import("../pages/Home"));

const AllRoutes = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
