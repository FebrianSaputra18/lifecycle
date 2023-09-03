import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import News from "../../../component/page/News";
import Redux from "../../../component/page/Redux";
// import FetchData from "../component/ui/FetchData";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"redux"} />} />
      <Route path="/news" element={<News/>} />
      <Route path="/redux" element={<Redux/>} />

    </Routes>
  );
};

export default Routers;
