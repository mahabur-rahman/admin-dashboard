import React from "react";
// scss
import "./navbar.scss";
// react router dom
import { Link } from "react-router-dom";
// react icons
import { BsBell, BsExclamationCircle } from "react-icons/bs";
// react bootstrap
import { Badge } from "react-bootstrap";

// mui
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const Notifications = () => {
  // bell
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  return (
    <>
      <div>
        <Box>
          <Tooltip title="Notification">
            <IconButton onClick={handleClick1} size="small" sx={{ ml: 2 }}>
              <span>
                <BsBell className="bell_icon" />
                <Badge bg="primary bell_badge">4</Badge>
              </span>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl1}
          open={open1}
          onClose={handleClose1}
          onClick={handleClose1}
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
                You have 4 new notifications
              </h6>
              <Link to="/" className="bg-primary text-white view_btn">
                View all
              </Link>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem>
            <span>
              <BsExclamationCircle className="icon text-warning" />
            </span>
            <div>
              <h6 className="title">lorem ipsum</h6>
              <p className="mb-0 para">dolorem earum veritatis oditseno</p>
              <p className="para">30 min. ago</p>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem>
            <span>
              <BsExclamationCircle className="icon text-danger" />
            </span>
            <div>
              <h6 className="title">lorem ipsum</h6>
              <p className="mb-0 para">dolorem earum veritatis oditseno</p>
              <p className="para">30 min. ago</p>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem>
            <span>
              <BsExclamationCircle className="icon text-success" />
            </span>
            <div>
              <h6 className="title">lorem ipsum</h6>
              <p className="mb-0 para">dolorem earum veritatis oditseno</p>
              <p className="para">30 min. ago</p>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem>
            <span>
              <BsExclamationCircle className="icon text-success" />
            </span>
            <div>
              <h6 className="title">lorem ipsum</h6>
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

export default Notifications;
