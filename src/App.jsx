import { Fragment, useState, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import JobFilter from "./components/JobFilter/JobFilter";
import JobCard from "./components/JobCard/JobCard";

function App() {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    async function getJobsData() {
      try {
        let response = await fetch("data.json");
        let data = await response.json();
        setJobsData(data);
      } catch (error) {
        console.error(`Could not get API data, ${error}`);
      }
    }
    getJobsData();
  }, []);

  const renderJobCards = () => {
    return jobsData?.map((job) => (
      <JobCard
        key={job?.id}
        companyName={job?.company}
        logo={job?.logo}
        tagNew={job?.new}
        tagFeatured={job?.featured}
        jobTitle={job?.position}
        postedAt={job?.postedAt}
        jobType={job?.contract}
        jobLocation={job?.location}
        jobNew={job?.new}
        jobFeatured={job?.featured}
        languages={job?.languages}
        tools={job?.tools}
        level={job?.level}
        role={job?.role}
      />
    ));
  };

  return (
    <Fragment>
      <div className="banner-filter_container">
        <Banner />
        <JobFilter />
      </div>
      <main>{renderJobCards()}</main>
    </Fragment>
  );
}

export default App;
