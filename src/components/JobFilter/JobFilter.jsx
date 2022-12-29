const JobFilter = () => {
  return (
    <div className="job-filter_container">
      <div className="job-filter-tag_wrapper">
        <span>Frontend</span>
        <button>X</button>
      </div>
      <div className="job-filter-tag_wrapper">
        <span>CSS</span>
        <button className="btn">X</button>
      </div>
      <button href="#" className="clear-filter">
        Clear
      </button>
    </div>
  );
};

export default JobFilter;
