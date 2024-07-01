import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import Header from "./components/common/header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Contact from "./components/contact/Contact";
import RegistrationPage from "./RegistrationPage";
import Login from "./Login"; // Import the LoginPage component
import DashBoard1 from "./DashBoard1";
import CoursePage from "./components/allcourses/CoursePage";
import CoursesCard from "./components/allcourses/CoursesCard";
import Certificate from "./components/allcourses/Certificate";
// import Students from "./Students";
import StudentsPage from "./StudentsPage";
import SelectionPage from "./SelectionPage";
import AdminPage from "./AdminPage";
import LoginPage from "./LoginPage";
import { Toaster } from 'react-hot-toast';



const App = () => {
  const location = useLocation();
  const noHeaderPaths = ["/signup", "/login", "/dashboard", '/certificate', '/students', '/admin', '/', '/loginp']; // Add the login path here

  return (
    <>

      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Toaster />
      <Routes>
        <Route path="/signup" exact Component={RegistrationPage} />
        <Route path="/login" exact Component={Login} /> {/* Add the login route */}
        <Route path="/home" exact Component={Home} />
        <Route path="/about" exact Component={About} />
        <Route path="/courses" exact Component={CourseHome} />
        <Route path="/contact" exact Component={Contact} />
        <Route path="/dashboard" exact Component={DashBoard1} />
        <Route path="/course" exact Component={CoursesCard} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<SelectionPage />} />
        <Route path="/loginp" element={<LoginPage />} />




      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
