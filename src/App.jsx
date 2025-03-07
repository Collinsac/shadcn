
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import FirstLayout from "./Layouts/FirstLayout";
import Home from "./Pages/Home";
import Ethique from "./Pages/Ethique";
import Quizz from "./Pages/Quizz";
const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<FirstLayout />}>
          <Route index element={<Home />} />
          <Route path="/home/ethique" element={<Ethique />} />
          <Route  path="/home/quizz" element={<Quizz/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
