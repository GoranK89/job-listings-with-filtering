import PhotoSnap from "../../assets/images/photosnap.svg";
import CompanyLogo from "./CompanyLogo";
import JobDetails from "./JobDetails";
import JobTags from "./JobTags";

const JobCard = (props) => {
  return (
    <div className="job-posting_container">
      <CompanyLogo src={PhotoSnap} />
      <JobDetails
        companyName={props.companyName}
        tagNew
        tagFeatured={props.tagFeatured}
        jobTitle={props.jobTitle}
        postedAt={props.postedAt}
        jobType={props.jobType}
        jobLocation={props.jobLocation}
        jobNew={props.jobNew}
        jobFeatured={props.jobFeatured}
      />
      <JobTags jobsData={props.jobNew} />
    </div>
  );
};

export default JobCard;
