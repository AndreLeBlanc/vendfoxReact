import React, { Fragment } from "react";
import BlogContent from "./BlogContent";
import { Link } from "react-router-dom";
export default function BLogList() {
  const PostList = BlogContent.slice(0, 6);
  return (
    <Fragment>
      <div className="row">
        {PostList.map((value, i) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
            <div className="blog blog-style--1">
              <div className="thumbnail">
                <a href={value.link}>
                  <img
                    className="w-100"
                    src={`/assets/images/blog/${value.images}`}
                    alt="Blog Images"
                  />
                </a>
              </div>
              <div className="content">
                <p className="blogtype">{value.category}</p>
                <h4 className="title">
                  <Link to={value.link}>{value.title}</Link>
                </h4>
                <div className="blog-btn">
                  <Link to={value.link} className="rn-btn text-white">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
