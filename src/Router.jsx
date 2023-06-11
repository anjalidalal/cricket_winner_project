import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./components/LandingPage";
import AuthModal from "./components/AuthModal";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/authentication" element={<AuthModal />} />
      </Routes>
    </>
  );
};

export default Router;
