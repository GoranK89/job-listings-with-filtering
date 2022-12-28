const JobDetails = (props) => {
  return (
    <div className="job-details_box">
      <div className="company-header_wrapper">
        <p>{props.companyName}</p>
        <span className={props.jobNew ? "tag tag-new" : ""}>
          {props.jobNew && "NEW!"}
        </span>
        <span className={props.jobFeatured ? "tag tag-featured" : ""}>
          {props.jobFeatured && "FEATURED"}
        </span>
      </div>
      <p className="job-title">{props.jobTitle}</p>
      <div className="job-info_wrapper">
        <span>{props.postedAt}</span>
        <span>•</span>
        <span>{props.jobType}</span>
        <span>•</span>
        <span>{props.jobLocation}</span>
      </div>
    </div>
  );
};

export default JobDetails;
