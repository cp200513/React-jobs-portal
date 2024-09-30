import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

import JobListingSingle from "./JobListingSingle.jsx";

const JobListing = ({ isHome = false }) => {
  const apiURL = !isHome ? "/api/jobs?_limit=3" : "/api/jobs";

  const [Jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiResponse = await fetch(apiURL);
        const data = await apiResponse.json();

        setJobs(data);
      } catch (e) {
        console.log("\nError Fetching Data ");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {!isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {/* <!-- Job Listi/\ng 1 --> */}

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Jobs.map((job, index) => {
                return <JobListingSingle key={job.id} job={job} />;
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default JobListing;
