import {
  Divider,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupsIcon from "@mui/icons-material/Groups";
import PeopleIcon from "@mui/icons-material/People";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import React from "react";
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import { getLogInUserDetails } from "../api/index.js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LeftSideBar = (userDetail) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const navlink = useNavigate();
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [fullName, setFullName] = useState([]);
  const [education, setEducation] = useState([]);
  const [skill, setSkill] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [coverImage, setCoverImage] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("/api/v1/users/user-info", { withCredentials: true }) // by using withCredentials cookies are added.
        .then((res) => {
          return res.data.data;
        })
        .catch((error) => {
          console.log(error);
          navlink(`/`);
        })
        .then((data) => {
          // console.log(username);
          return (
            setUsername(data.username),
            setAvatar(data.avatar),
            setCoverImage(data.coverImage)
          );
        });
    } catch (err) {
      return console.log(err);
    }
  }, [userDetail]);

  return (
    <div className="flex flex-col bg-white rounded">
      <div className="flex flex-col justify-center items-center rounded">
        <img
          src="banner.jpg"
          alt="background-img"
          className="z-0 rounded-t-lg w-96 h-28"
        />{" "}
        <img
          src="userpic.jpg"
          alt="profile-pic"
          className=" z-10 rounded-[50%] w-20 h-20 border-4 mt-[-3rem] aspect-square"
        />
      </div>
      <div className="flex justify-center item-center px-3 pb-4">
        <h1 className="font-black text-xl">{username}</h1>
      </div>
      <div className="flex justify-center item-center px-3 pb-4">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <Divider />
      <div>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <BookmarkAddedIcon />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemButton>
          </List>
        </Box>
      </div>
    </div>
  );
};

export default LeftSideBar;
