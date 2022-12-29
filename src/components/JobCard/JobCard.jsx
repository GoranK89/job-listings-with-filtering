import Image from "../../assets/images/photosnap.svg";
import CompanyLogo from "./CompanyLogo";
import JobDetails from "./JobDetails";
import JobTags from "./JobTags";

const JobCard = (props) => {
  const getImgUrl = () => {
    const lastSlashInImgs = Image.lastIndexOf("/");
    const lastSlashInCompanyLogo = props.logo.lastIndexOf("/");
    const imgsSrc = Image.slice(0, lastSlashInImgs);
    const companyLogo = props.logo.slice(lastSlashInCompanyLogo);
    const result = (imgsSrc + companyLogo).toString();
    return result;
  };

  return (
    <div className="job-posting_container">
      <CompanyLogo src={getImgUrl()} />
      <JobDetails
        companyName={props.companyName}
        tagNew={props.tagNew}
        tagFeatured={props.tagFeatured}
        jobTitle={props.jobTitle}
        postedAt={props.postedAt}
        jobType={props.jobType}
        jobLocation={props.jobLocation}
        jobNew={props.jobNew}
        jobFeatured={props.jobFeatured}
      />
      <JobTags
        languages={props.languages}
        tools={props.tools}
        level={props.level}
        role={props.role}
      />
    </div>
  );
};

export default JobCard;
