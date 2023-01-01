const JobTags = (props) => {
  const languagesList = () =>
    props.languages.map((language, i) => (
      <li key={i} className="filter-tag">
        {language}
      </li>
    ));
  const toolsList = () =>
    props.tools.map((tool, i) => (
      <li key={i} className="filter-tag">
        {tool}
      </li>
    ));

  return (
    <ul className="job-tags_wrapper">
      <li className="filter-tag">{props.role}</li>
      <li className="filter-tag">{props.level}</li>
      {languagesList()}
      {toolsList()}
    </ul>
  );
};

export default JobTags;
