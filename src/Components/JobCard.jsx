import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ Jobs }) => {
  return (
    <React.Fragment>
      {Jobs &&
        Jobs.map((data, id) => (
          <div className="job-ad-item" key={data.id}>
            <div className="item-info">
              <div className="item-image-box">
                <div className="item-image">
                  <a href="/job-details">
                    <img src={data.image} alt="Image" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="ad-info">
                <span>
                  <a href="/job-details" className="title">
                    {data.title}
                  </a>{" "}
                  @ <a href="#">{data.company}</a>
                </span>
                <div className="ad-meta">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        {data.location}{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        Full Time
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-money" aria-hidden="true"></i>$
                        {data.min_salary} - ${data.max_salary}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-tags" aria-hidden="true"></i>
                        {data.office}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="button">
                <Link to={`/job-details/${data.id}`} className="btn btn-primary">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default JobCard;
