const JobTags = (props) => {
  const keywords = [
    props.role,
    props.level,
    ...props.languages,
    ...props.tools,
  ];

  return (
    <ul className="job-tags_wrapper">
      {keywords.map((keyword, i) => (
        <li
          onClick={() => props.setKeywords(keyword)}
          key={i}
          className="filter-tag"
        >
          {keyword}
        </li>
      ))}
    </ul>
  );
};

export default JobTags;
