import React from "react";
import { Avatar } from "@material-ui/core";
import "./css/SideBar.css";

const SideBar = () => {
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItems">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sideBar">
      <div className="sideBar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
        <Avatar
          className="sideBar__avatar"
          src="https://media-exp3.licdn.com/dms/image/C5103AQG4q4Um1TGugw/profile-displayphoto-shrink_800_800/0/1533348383177?e=1630540800&v=beta&t=GUFnt_SwFPvtuzLPOJgcDTiWMpe1Dpd8iRaFdMKKnqk"
        />
        <h2>Adithya Gowda</h2>
        <h4>adithyagowda@gmail.com</h4>
      </div>
      <div className="sideBar__stats">
        <div className="sideBar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statNumber">2,536</p>
        </div>
        <div className="sideBar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">2,546</p>
        </div>
      </div>
      <div className="sidebar__buttom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("softwareDeveloper")}
        {recentItems("design")}
        {recentItems("developer")}
      </div>
    </div>
  );
};

export default SideBar;
