import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FieldScreen from "./screens/FieldScreen";
import HomeScreen from "./screens/HomeScreen";
import SignIn from "./screens/LoginScreen";
import CropScreen from "./screens/CropScreen";
import IncomeCategoryScreen from "./screens/IncomeCategoryScreen";
import ExpenseCategoryScreen from "./screens/ExpenseCategoryScreen";
import IncomeScreen from "./screens/incomeScreen";
import ExpenseScreen from "./screens/ExpenseScreen";
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
        <Route
          exact
          path="/incomecategories/"
          element={<IncomeCategoryScreen />}
        ></Route>
        <Route
          exact
          path="/incomecategories/:id"
          element={<IncomeCategoryScreen />}
        ></Route>
        <Route
          exact
          path="/expensecategories/"
          element={<ExpenseCategoryScreen />}
        ></Route>
        <Route
          exact
          path="/expensecategories/:id"
          element={<ExpenseCategoryScreen />}
        ></Route>
        <Route exact path="/income/" element={<IncomeScreen />}></Route>
        <Route exact path="/income/:id" element={<IncomeScreen />}></Route>
        <Route exact path="/expense/" element={<ExpenseScreen />}></Route>
        <Route exact path="/expense/:id" element={<ExpenseScreen />}></Route>
        <Route path="*" element={<HomeScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
