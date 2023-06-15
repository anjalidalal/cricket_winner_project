import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./components/LandingPage";
import Home from "./components/subcomponents/Home";
import News from "./components/subcomponents/News";
import Fantasy from "./components/subcomponents/Fantasy";
import MatchPredictions from "./components/subcomponents/MatchPredictions";
import IPL from "./components/subcomponents/IPL";
import WebStories from "./components/subcomponents/WebStories";
import LeaderBoards from "./components/subcomponents/Leaderboards";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/match-predictions" element={<MatchPredictions />} />
        <Route path="/ipl" element={<IPL />} />
        <Route path="/web-stories" element={<WebStories />} />
        <Route path="/leader-boards" element={<LeaderBoards />} />
      </Routes>
    </>
  );
};

export default Router;
