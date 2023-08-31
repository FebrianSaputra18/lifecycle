import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import News from "../component/page/News";
// import FetchData from "../component/ui/FetchData";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"news"} />} />
      <Route path="/news" element={<News/>} />
    </Routes>
  );
};

export default Routers;
