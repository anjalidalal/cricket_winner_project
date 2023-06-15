import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/subcomponents/Home";
import News from "./components/subcomponents/News";
import Fantasy from "./components/subcomponents/Fantasy";
import MatchPredictions from "./components/subcomponents/MatchPredictions";
import IPL from "./components/subcomponents/IPL";
import WebStories from "./components/subcomponents/WebStories";
import LeaderBoards from "./components/subcomponents/Leaderboards";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/fantasy-tips" element={<Fantasy />} />
        <Route path="/match-predictions" element={<MatchPredictions />} />
        <Route path="/ipl" element={<IPL />} />
        <Route path="/web-stories" element={<WebStories />} />
        <Route path="/leader-boards" element={<LeaderBoards />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
