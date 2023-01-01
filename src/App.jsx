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
        console.log(data);
      } catch (error) {
        console.error(`Could not get API data, ${error}`);
      }
    }
    getJobsData();
  }, []);

  return (
    <Fragment>
      <div className="banner-filter_container">
        <Banner />
        <JobFilter />
      </div>
      <main>
        <JobCard jobsData={jobsData} />
      </main>
    </Fragment>
  );
}

export default App;
