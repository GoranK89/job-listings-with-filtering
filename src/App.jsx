import { Fragment, useState, useEffect } from "react";
import Banner from "./components/Banner/Banner";
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
  // console.log(jobsData);

  return (
    <Fragment>
      <Banner />
      <main>
        {jobsData?.map((job) => (
          <JobCard
            key={job?.id}
            companyName={job?.company}
            tagNew={job?.new}
            tagFeatured={job?.featured}
            jobTitle={job?.position}
            postedAt={job?.postedAt}
            jobType={job?.contract}
            jobLocation={job?.location}
            jobNew={job?.new}
            jobFeatured={job?.featured}
          />
        ))}
      </main>
    </Fragment>
  );
}

export default App;
