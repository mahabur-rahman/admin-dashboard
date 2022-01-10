import React, { useState } from "react";
// react bootstrap
import { ButtonGroup, Button } from "react-bootstrap";

const BtnGroup = () => {
  const [btnGroupOne, setBtnGroupOne] = useState([
    { variant: "primary", text: "Left" },
    { variant: "primary", text: "Middle" },
    { variant: "primary", text: "Right" },
  ]);

  const [btnGroupTwo, setBtnGroupTwo] = useState([
    { variant: "danger", text: "Left", space: ".6rem" },
    { variant: "warning", text: "Middle" },
    { variant: "success", text: "Right" },
  ]);

  const [btnGroupThree, setBtnGroupThree] = useState([
    { variant: "outline-primary", text: "Left" },
    { variant: "outline-primary", text: "Middle" },
    { variant: "outline-primary", text: "Right" },
  ]);

  return (
    <>
      {/* btn group 1 */}
      {btnGroupOne.map((elem, idx) => {
        return (
          <ButtonGroup key={idx}>
            <Button variant={elem.variant}>{elem.text}</Button>
          </ButtonGroup>
        );
      })}

      {/* btn group 2 */}
      {btnGroupTwo.map((elem, idx) => {
        return (
          <>
            <ButtonGroup key={idx} style={{ marginLeft: elem.space }}>
              <Button variant={elem.variant}>{elem.text}</Button>
            </ButtonGroup>
          </>
        );
      })}

      {/* btn group 3 */}
      {btnGroupThree.map((elem, idx) => {
        return (
          <>
            <ButtonGroup key={idx} className="mt-2">
              <Button variant={elem.variant}>{elem.text}</Button>
            </ButtonGroup>
          </>
        );
      })}
    </>
  );
};

export default BtnGroup;
