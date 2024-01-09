import React from "react";
import { Route, Routes } from "react-router-dom";
import ReadData from "./components/ReadData";
import CreateData from "./components/CreateData";
import UpdateData from "./components/UpdateData";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<ReadData />} />
        <Route path={"/create"} element={<CreateData />} />
        <Route path={"/:id"} element={<UpdateData />} />
      </Routes>
    </div>
  );
};

export default App;
