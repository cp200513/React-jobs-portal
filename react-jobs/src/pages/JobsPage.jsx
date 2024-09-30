import React from "react";
import JobListing from "../components/JobListing";

const JobsPage = () => {
  return (
    <section className="bg-blue-200 px-4 py-6">
      <JobListing isHome={true} />
    </section>
  );
};

export default JobsPage;
