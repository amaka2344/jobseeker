import React from "react";
import { config, jobData } from "./GeneralFunction";
// import axios from "axios";
import JobCard from "./JobCard";

const JobItem = () => {
  const [content, setContent] = React.useState(jobData);
  const [hot, setHot] = React.useState([]);
  const [recent, setRecent] = React.useState([]);
  const [popular, setPopular] = React.useState([]);

  // const FetchData = () => {
  //   let url = "http:/get_url";
  //   axios.get(url, config).then((Response) => {
  //     const AllJobs = Response.data.data;
  //     setContent(AllJobs);

  //     const hotJob = content.filter((job) => job.type === "Hot");
  //     const recentJob = content.filter((job) => job.type === "Recent");
  //     const popularJob = content.filter((job) => job.type === "Popular");

  //     setHot(hotJob);
  //     setRecent(recentJob);
  //     setPopular(popularJob);
  //   });
  // };

  React.useEffect(() => {
    // FetchData();

    const hotJob = content.filter((job) => job.type === "Hot");
    const recentJob = content.filter((job) => job.type === "Recent");
    const popularJob = content.filter((job) => job.type === "Popular");

    setHot(hotJob);
    setRecent(recentJob);
    setPopular(popularJob);
  }, [content]);

  return (
    <div className="section latest-jobs-ads">
      <div className="section-title tab-manu">
        <h4>Latest Jobs</h4>

        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation">
            <a href="#hot-jobs" data-toggle="tab">
              Hot Jobs
            </a>
          </li>
          <li role="presentation">
            <a href="#recent-jobs" data-toggle="tab">
              Recent Jobs
            </a>
          </li>
          <li role="presentation">
            <a className="active" href="#popular-jobs" data-toggle="tab">
              Popular Jobs
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content">
        <div role="tabpanel" className="tab-pane fade in" id="hot-jobs">
          <JobCard Jobs={hot} />
        </div>

        <div role="tabpanel" className="tab-pane fade in" id="recent-jobs">
          <JobCard Jobs={recent} />
        </div>

        <div
          role="tabpanel"
          className="tab-pane fade in active show"
          id="popular-jobs"
        >
          <JobCard Jobs={popular} />
        </div>
      </div>
    </div>
  );
};

export default JobItem;
