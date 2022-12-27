import PhotoSnap from "../../assets/images/photosnap.svg";

const JobCard = () => {
  return (
    <div className="job-posting_container">
      <img className="company-logo" src={PhotoSnap} alt="company logo" />
      <div className="job-details_box">
        <div className="company-header_wrapper">
          <p>Company Name</p>
          <span className="tag tag-new">New!</span>
          <span className="tag tag-featured">Featured!</span>
        </div>
        <p className="job-title">Job title</p>
        <div className="job-info_wrapper">
          <span>Posted on</span>
          <span>Job type</span>
          <span>Location</span>
        </div>
      </div>

      <div className="job-tags_wrapper">
        <span className="filter-tag">Tag</span>
        <span className="filter-tag">Tag</span>
        <span className="filter-tag">Tag</span>
      </div>
    </div>
  );
};

export default JobCard;
