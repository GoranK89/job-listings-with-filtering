import { Fragment } from "react";
import Banner from "./components/Banner/Banner";
import JobCard from "./components/JobCard/JobCard";

function App() {
  return (
    <Fragment>
      <Banner />
      <main>
        <JobCard />
      </main>
    </Fragment>
  );
}

export default App;
