import React, { useState } from "react";
// scss
import "./profile.scss";
// react bootstrap
import { Card } from "react-bootstrap";
// icon
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
// react router dom
import { Link } from "react-router-dom";

const Info = ({ imgSrc, name, designation }) => {
  const profileData = [
    { id: 1, icon: <FaTwitter />, url: "/" },
    { id: 2, icon: <FaFacebook />, url: "/" },
    { id: 3, icon: <FaLinkedin />, url: "/" },
    { id: 4, icon: <FaInstagram />, url: "/" },
  ];
  const [socialLink, setSocialLink] = useState(profileData);

  return (
    <>
      <section className="profile_info">
        <Card className="shadow-sm text-center pt-4">
          {/* card img */}
          <Card.Img variant="top" src={imgSrc} fluid alt={name} />
          <Card.Body>
            <Card.Title className="mb-0 name_info">{name}</Card.Title>
            <Card.Text className="designation mb-2">{designation}</Card.Text>
            <div className="profile_link">
              <ul className="list-inline">
                {socialLink.map((elem) => {
                  const { id, icon, url } = elem;
                  return (
                    <li className="list-inline-item" key={id}>
                      <Link to={url}>
                        <span>{icon}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default Info;
