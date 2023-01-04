import { useState, useEffect } from "react";
import Image from "../../assets/images/account.svg";
import CompanyLogo from "./CompanyLogo";
import JobDetails from "./JobDetails";
import JobTags from "./JobTags";

const JobCard = (props) => {
  const [filteredData, setFilteredData] = useState([]);

  const srcImgSliceIndex = Image.lastIndexOf("/");
  const imgsSrc = Image.slice(0, srcImgSliceIndex);
  const companyLogoSliceIndex = props.jobsData[0]?.logo.lastIndexOf("/");
  const renderCompanyLogos = (job) =>
    `${imgsSrc}${job.logo.slice(companyLogoSliceIndex)}`;

  const modifyData = () => {
    if (props.keywords?.length > 0) {
      const newData = props.jobsData.filter((data) => {
        return props.keywords.every((keyword) => {
          return (
            data.role == keyword ||
            data.level == keyword ||
            data.languages.includes(keyword) ||
            data.tools.includes(keyword)
          );
        });
      });
      setFilteredData(newData);
    } else {
      setFilteredData(props.jobsData);
    }
  };

  useEffect(() => {
    modifyData();
  }, [props.jobsData, props.keywords]);

  return (
    <div className={"job-card_container"}>
      {filteredData?.map((job) => (
        <div
          key={job.id}
          className={
            job.featured
              ? "job-posting_wrapper featured-border"
              : "job-posting_wrapper"
          }
        >
          <CompanyLogo src={job.logo} />
          <JobDetails
            companyName={job.company}
            tagNew={job.new}
            tagFeatured={job.featured}
            jobTitle={job.position}
            postedAt={job.postedAt}
            jobType={job.contract}
            jobLocation={job.location}
            jobFeatured={job.featured}
            jobNew={job.new}
          />
          <JobTags
            role={job.role}
            level={job.level}
            languages={job.languages}
            tools={job.tools}
            setKeywords={props.setKeywords}
          />
        </div>
      ))}
    </div>
  );
};

export default JobCard;
