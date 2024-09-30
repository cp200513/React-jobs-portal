import React from "react";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListing />
      <ViewAllJobs />
    </>
  );
};

export default Homepage;
