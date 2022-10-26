import React from "react";
import './styles/App.css'
import ProfilePic from "./components/ProfilePic";
import FullName from "./components/FullName";
import JobTitle from "./components/JobTitle";
import Website from "./components/Website";
import Button from "./components/Button";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="MainContainer">
      <ProfilePic />
      <FullName />
      <JobTitle />
      <Website />
      <Button />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}

export default  App;