import React from "react";
// scss
import "./navbar.scss";
// react router dom
import { Link } from "react-router-dom";

import { BsChatLeftText } from "react-icons/bs";
// react bootstrap
import { Image, Badge } from "react-bootstrap";
// logo
import msg1 from "../../images/msg1.jpg";
import msg2 from "../../images/msg2.jpg";
import msg3 from "../../images/msg3.jpg";
// mui
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Messages = () => {
  // chat
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <>
      <div>
        <Box>
          <Tooltip title="Message">
            <IconButton onClick={handleClick2} size="small" sx={{ ml: 2 }}>
              <span>
                <BsChatLeftText className="bell_icon" />
                <Badge bg="success bell_badge">3</Badge>
              </span>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          onClick={handleClose2}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
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
          transformOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
        >
          <MenuItem>
            <div className="d-flex align-items-center">
              <h6 className="mb-0 text-secondary notify_text">
                You have 3 new messages
              </h6>
              <Link to="/" className="bg-primary text-white view_btn">
                View all
              </Link>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem>
            <span>
              <Image src={msg1} fluid alt="profile" className="person" />
            </span>
            <div>
              <h6 className="title">Maria Hudson</h6>
              <p className="mb-0 para">dolorem earum veritatis oditseno</p>
              <p className="para">30 min. ago</p>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem>
            <span>
              <Image className="person" src={msg2} fluid alt="profile" />
            </span>
            <div>
              <h6 className="title">Anna Nelson</h6>
              <p className="mb-0 para">dolorem earum veritatis oditseno</p>
              <p className="para">30 min. ago</p>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem>
            <span>
              <Image className="person" src={msg3} fluid alt="profile" />
            </span>
            <div>
              <h6 className="title">David Muldon</h6>
              <p className="mb-0 para">dolorem earum veritatis oditseno</p>
              <p className="para">30 min. ago</p>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem>
            <Link to="/" className="show_text">
              Show all notifications
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Messages;
