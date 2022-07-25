import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon"></TwitterIcon>
      <SidebarOption Icon={HomeIcon} text="Home"></SidebarOption>
      <SidebarOption Icon={SearchIcon} text="Search"></SidebarOption>
      <SidebarOption
        Icon={NotificationsIcon}
        text="Notification"
      ></SidebarOption>
      <SidebarOption Icon={MessageIcon} text="Message"></SidebarOption>
      <SidebarOption Icon={BookmarkIcon} text="Bookmark"></SidebarOption>
      <SidebarOption Icon={PersonIcon} text="Person"></SidebarOption>
      <SidebarOption Icon={MoreHorizIcon} text="More"></SidebarOption>
      <Button variant="outlined" className="sidebar__tweet" >
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
