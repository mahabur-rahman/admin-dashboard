import React from "react";
// scss
import "./recentactivity.scss";
// icons
import { BsCircleFill } from "react-icons/bs";
// link
import { Link } from "react-router-dom";

const ActivityTime = () => {
  return (
    <>
      <div id="activity">
        <div className="item_list d-flex">
          <div className="time w-25">
            <p className="mb-0">32 min</p>
          </div>
          <div className="content d-flex">
            <span className="round_circle text-success">
              <BsCircleFill />
            </span>
            <p className="text_para">
              Quia quae rerum
              <Link to="/" className="fw-bold text-dark mx-1">
                explicabo officiis
              </Link>
              beatae
            </p>
          </div>
        </div>
        <div className="item_list d-flex">
          <div className="time w-25">
            <p className="mb-0">56 min</p>
          </div>
          <div className="content d-flex">
            <span className="round_circle text-danger">
              <BsCircleFill />
            </span>
            <p className="text_para">
              Volup diltatem blanditiis blanditiis evenietu
            </p>
          </div>
        </div>
        <div className="item_list d-flex">
          <div className="time w-25">
            <p className="mb-0">2 hrs</p>
          </div>
          <div className="content d-flex">
            <span className="round_circle text-primary">
              <BsCircleFill />
            </span>
            <p className="text_para">
              Voluptates corruptit molestiasvoluptatem
            </p>
          </div>
        </div>
        <div className="item_list d-flex">
          <div className="time w-25">
            <p className="mb-0">1 day</p>
          </div>
          <div className="content d-flex">
            <span className="round_circle text-info">
              <BsCircleFill />
            </span>
            <p className="text_para">
              Tempore autem
              <Link to="/" className="fw-bold text-dark mx-1">
                occaecati volp
              </Link>
              tempore
            </p>
          </div>
        </div>
        <div className="item_list d-flex">
          <div className="time w-25">
            <p className="mb-0">2 days</p>
          </div>
          <div className="content d-flex">
            <span className="round_circle text-warning">
              <BsCircleFill />
            </span>
            <p className="text_para">
              Est sit deumm reiciendis exercitationemi
            </p>
          </div>
        </div>
        <div className="item_list d-flex">
          <div className="time w-25">
            <p className="mb-0">4 week</p>
          </div>
          <div className="content d-flex">
            <span className="round_circle text-success">
              <BsCircleFill />
            </span>
            <p className="text_para">Dpicta dolorem harum nulla eius. Ut qr</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityTime;
