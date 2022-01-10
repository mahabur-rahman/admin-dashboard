import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
// link
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
// icons
import { BsCircleFill } from "react-icons/bs";

const handleClick = (event) => {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
};

const CustomSeparator = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      to="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      to="/"
      onClick={handleClick}
    >
      Library
    </Link>,
    <Typography
      key="3"
      sx={{ color: "#51678f", fontSize: ".9rem", fontWeight: 500 }}
    >
      Data
    </Typography>,
  ];

  return (
    <Stack spacing={2} className="breadcrumb_page">
      <Breadcrumbs separator=">">{breadcrumbs}</Breadcrumbs>
      <Breadcrumbs separator="|">{breadcrumbs}</Breadcrumbs>
      <Breadcrumbs separator="-">{breadcrumbs}</Breadcrumbs>
      <Breadcrumbs separator={<BsCircleFill />} className="circle_fill">
        {breadcrumbs}
      </Breadcrumbs>
      <Breadcrumbs separator={""}>{breadcrumbs}</Breadcrumbs>
    </Stack>
  );
};

export default CustomSeparator;
