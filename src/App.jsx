import { Fragment, useState, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import JobFilter from "./components/JobFilter/JobFilter";
import JobCard from "./components/JobCard/JobCard";
import JobData from "../data.json";

function App() {
  /*
  // api call for the data
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
*/

  // get data so gh-pages will work
  useEffect(() => {
    setJobsData(JobData);
  }, []);

  const [jobsData, setJobsData] = useState([]);
  const [filteredKeywords, setFilteredKeywords] = useState([]);

  const addFilteredKeywords = (data) => {
    if (!filteredKeywords.includes(data)) {
      setFilteredKeywords((prevStatte) => [...prevStatte, data]);
    }
  };

  // Filter click Handlers
  const onClearClickHandler = () => {
    setFilteredKeywords([]);
  };
  const onXclickHandler = (data) => {
    const newKeywords = filteredKeywords.filter((keyword) => keyword !== data);
    setFilteredKeywords(newKeywords);
  };

  return (
    <Fragment>
      <div className="banner-filter_container">
        <Banner />
        {filteredKeywords.length > 0 && (
          <JobFilter
            filteredKeywords={filteredKeywords}
            setClearClick={onClearClickHandler}
            setXclick={onXclickHandler}
          />
        )}
      </div>
      <main>
        <JobCard
          jobsData={jobsData}
          keywords={filteredKeywords}
          setKeywords={addFilteredKeywords}
        />
      </main>
    </Fragment>
  );
}

export default App;
