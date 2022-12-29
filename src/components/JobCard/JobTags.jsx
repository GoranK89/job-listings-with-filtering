const JobTags = (props) => {
  return (
    <div className="job-tags_wrapper">
      <span className="filter-tag">{props.role}</span>
      <span className="filter-tag">{props.level}</span>
      {props.languages.map((language, i) => (
        <span key={i} className="filter-tag">
          {language}
        </span>
      ))}
      {props.tools.map((tool, i) => (
        <span key={i} className="filter-tag">
          {tool}
        </span>
      ))}
    </div>
  );
};

export default JobTags;
