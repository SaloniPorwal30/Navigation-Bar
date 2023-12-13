import React, { useState, useEffect } from "react";
import { Nav, Button } from "react-bootstrap";
import "../App.css";

const NavigationBar = () => {
  const [tabCount1, setTabCount1] = useState(0);
  const [tabCount2, setTabCount2] = useState(0);
  const [tabCount3, setTabCount3] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTabCount1((tabCount1) => tabCount1 + 1);
    }, 3000);

    setTimeout(() => {
      setInterval(() => {
        setTabCount2((tabCount2) => tabCount2 + 1);
      }, 3000);
    }, 1000);

    setTimeout(() => {
      setInterval(() => {
        setTabCount3((tabCount3) => tabCount3 + 1);
      }, 3000);
    }, 2000);
  }, []);

  const handleReset = () => {
    setTabCount1(0);
    setTabCount2(0);
    setTabCount3(0);
  };

  return (
    <>
      <Nav>
        <Nav.Link href="#" className="nav">
          Count1: {tabCount1}
        </Nav.Link>
        <Nav.Link href="#" className="nav">
          Count2: {tabCount2}
        </Nav.Link>
        <Nav.Link href="#" className="nav">
          Count3: {tabCount3}
        </Nav.Link>
      </Nav>
      <Button onClick={handleReset}>Reset</Button>
    </>
  );
};

export default NavigationBar;
