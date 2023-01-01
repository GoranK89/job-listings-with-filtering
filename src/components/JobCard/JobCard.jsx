import Image from "../../assets/images/photosnap.svg";
import CompanyLogo from "./CompanyLogo";
import JobDetails from "./JobDetails";
import JobTags from "./JobTags";

const JobCard = (props) => {
  const srcImgSliceIndex = Image.lastIndexOf("/");
  const imgsSrc = Image.slice(0, srcImgSliceIndex);
  const companyLogoSliceIndex = props.jobsData[0]?.logo.lastIndexOf("/");
  const renderCompanyLogos = (job) =>
    `${imgsSrc}${job.logo.slice(companyLogoSliceIndex)}`;

  return (
    <div className="job-card_container">
      {props.jobsData?.map((job) => (
        <div key={job.id} className="job-posting_wrapper">
          <CompanyLogo src={renderCompanyLogos(job)} />
          <JobDetails
            companyName={job.company}
            tagNew={job.new}
            tagFeatured={job.featured}
            jobTitle={job.position}
            postedAt={job.postedAt}
            jobType={job.contract}
            jobLocation={job.location}
          />
          <JobTags
            id={job.id}
            role={job.role}
            level={job.level}
            languages={job.languages}
            tools={job.tools}
          />
        </div>
      ))}
    </div>
  );
};

export default JobCard;
