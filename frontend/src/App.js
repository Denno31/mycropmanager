import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FieldScreen from "./screens/FieldScreen";
import HomeScreen from "./screens/HomeScreen";
import SignIn from "./screens/LoginScreen";
import CropScreen from "./screens/CropScreen";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signin" element={<SignIn />}></Route>
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
        <Route exact path="/home" element={<HomeScreen />}></Route>
        <Route exact path="/fields/" element={<FieldScreen />}></Route>
        <Route exact path="/fields/:id" element={<FieldScreen />}></Route>
        <Route exact path="/crops/" element={<CropScreen />}></Route>
        <Route exact path="/crops/:id" element={<CropScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
