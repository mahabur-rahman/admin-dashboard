import React from "react";
// scss
import "./navbar.scss";
// react icons
import { FaCaretDown } from "react-icons/fa";
import {
  BsPerson,
  BsGear,
  BsQuestionCircle,
  BsBoxArrowRight,
} from "react-icons/bs";
// react bootstrap
import { Image } from "react-bootstrap";
// logo

import profile from "../../images/profile.jpg";
// mui
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Profiles = () => {
  // profile
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  return (
    <>
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
          className="hover_box"
        >
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick3} size="small" sx={{ ml: 2 }}>
              <Avatar>
                <Image
                  src={profile}
                  fluid
                  alt="profile"
                  className="profile_pic"
                />
              </Avatar>
              <span className="name">k. Anderson</span>
              <span className="caret_down">
                <FaCaretDown />
              </span>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl3}
          open={open3}
          onClose={handleClose3}
          onClick={handleClose3}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="text-center px-5 py-2">
            <h5 className="mb-0 name_title">Kevin Anderson</h5>

            <p className="sub_title">Web Designer</p>
          </div>
          <Divider />
          <MenuItem className="px-5 -ml-3">
            <ListItemIcon>
              <BsPerson fontSize="lg" className="pro_icon" />
            </ListItemIcon>
            <span className="prof_text">My Profile</span>
          </MenuItem>
          <Divider />
          <MenuItem className="px-5 -ml-3">
            <ListItemIcon>
              <BsGear fontSize="small" className="pro_icon" />
            </ListItemIcon>
            <span className="prof_text">Account Setting</span>
          </MenuItem>
          <Divider />
          <MenuItem className="px-5 -ml-3">
            <ListItemIcon>
              <BsQuestionCircle fontSize="small" className="pro_icon" />
            </ListItemIcon>
            <span className="prof_text">Need help ?</span>
          </MenuItem>
          <Divider />
          <MenuItem className="px-5 -ml-3">
            <ListItemIcon>
              <BsBoxArrowRight fontSize="small" className="pro_icon" />
            </ListItemIcon>
            <span className="prof_text">Sign Out</span>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Profiles;
