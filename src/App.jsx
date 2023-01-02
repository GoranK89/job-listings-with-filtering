import { Fragment, useState, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import JobFilter from "./components/JobFilter/JobFilter";
import JobCard from "./components/JobCard/JobCard";

function App() {
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

  const [jobsData, setJobsData] = useState([]);
  const [filteredKeywords, setFilteredKeywords] = useState([]);

  const addFilteredKeywords = (data) => {
    if (!filteredKeywords.includes(data)) {
      setFilteredKeywords((prevStatte) => [...prevStatte, data]);
    }
  };

  const onClearClickHandler = () => {
    setFilteredKeywords([]);
  };
  const onXclickHandler = (index) => {
    filteredKeywords.splice(index, 1);
    setFilteredKeywords([...filteredKeywords]);
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
        <JobCard jobsData={jobsData} setKeywords={addFilteredKeywords} />
      </main>
    </Fragment>
  );
}

export default App;
