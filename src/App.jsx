import {Routes, Route} from "react-router-dom";
import { AuthProvider } from "./Components/LoginAuthentication/AuthProvider";
import './App.css'
import HomePage from './Components/HomePage';
import Login from "./Components/Login";
import BlogPostsPage from "./Components/BlogPostsPage";
import IndividualPostPage from "./Components/IndividualPostPage";

export default function App(){
  return(
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<BlogPostsPage />} />
        <Route path="/post/:id" element={<IndividualPostPage />} />
      </Routes>
    </AuthProvider>
  );
}