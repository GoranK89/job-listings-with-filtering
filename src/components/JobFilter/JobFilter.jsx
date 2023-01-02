const JobFilter = (props) => {
  return (
    <div className="job-filter_container">
      {props.filteredKeywords.map((keyword, i) => (
        <div key={i} className="job-filter-tag_wrapper">
          <span>{keyword}</span>
          <button onClick={() => props.setXclick(i)}>X</button>
        </div>
      ))}
      <button className="clear-filter" onClick={props.setClearClick}>
        Clear
      </button>
    </div>
  );
};

export default JobFilter;
