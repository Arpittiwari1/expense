import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "../src/pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./../src/pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import UserProvider from "./context/UserContext";
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <UserProvider>
     <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Root/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        </Routes>
        </Router>
        <Toaster toastOptions={{className:"",style:{fontSize:"13px"},}} />

    </UserProvider>
  );
}
const Root = () => {
  //check if token exist in local storage
  const authenticated = !!localStorage.getItem("token") ? true : false;
  return (
    <div>
      {authenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
    </div>
  );
}
export default App;

