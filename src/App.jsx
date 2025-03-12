import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import FirstLayout from "./Layouts/FirstLayout";
import Home from "./Pages/Home";
import Ethique from "./Pages/Ethique";
import Quizz from "./Pages/Quizz";
import Utilisateurs from "./Pages/Utilisateurs";
import Administrateurs from "./Pages/Administrateurs";
import NotesDeServices from "./Pages/NotesDeServices";
import Notifications from "./Pages/Notifications";
import Declaration from "./Pages/Declaration";
import Faq from "./Pages/Faq";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<FirstLayout />}>
          <Route index element={<Home />} />
          <Route path="/home/ethique" element={<Ethique />} />
          <Route path="/home/quizz" element={<Quizz />} />
          <Route path="/home/utilisateurs" element={<Utilisateurs />} />
          <Route path="/home/administrateurs" element={<Administrateurs />} />
          <Route path="/home/notes de services" element={<NotesDeServices />} />
          <Route path="/home/notifications" element={<Notifications />} />
          <Route path="/home/declaration" element={<Declaration />} />
          <Route path="/home/faq" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
