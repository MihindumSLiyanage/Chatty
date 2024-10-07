import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./components/Logout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}