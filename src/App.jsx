import {Routes, Route} from "react-router-dom";
import './App.css'
import HomePage from './Components/HomePage';
import Login from "./Components/Login";
import { AuthProvider } from "./Components/LoginAuthentication/AuthProvider";

export default function App(){
  return(
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}