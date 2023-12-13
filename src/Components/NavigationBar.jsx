import React, { useState, useEffect } from "react";
import { Nav, Button } from "react-bootstrap";
import "../App.css";

const NavigationBar = () => {
  const [tabCount1, setTabCount1] = useState(0);
  const [tabCount2, setTabCount2] = useState(0);
  const [tabCount3, setTabCount3] = useState(0);

  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setTabCount1((prevCount) => prevCount + 1);
    }, 3000);

    const intervalId2 = setTimeout(() => {
      setInterval(() => {
        setTabCount2((prevCount) => prevCount + 1);
      }, 3000);
    }, 1000);

    const intervalId3 = setTimeout(() => {
      setInterval(() => {
        setTabCount3((prevCount) => prevCount + 1);
      }, 3000);
    }, 2000);

    // Cleanup intervals to avoid memory leaks
    return () => {
      clearInterval(intervalId1);
      clearTimeout(intervalId2);
      clearTimeout(intervalId3);
    };
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
          {" "}
          Count1: {tabCount1}
        </Nav.Link>
        <Nav.Link href="#" className="nav">
          {" "}
          Count2: {tabCount2}
        </Nav.Link>
        <Nav.Link href="#" className="nav">
          {" "}
          Count3: {tabCount3}
        </Nav.Link>
      </Nav>
      <Button onClick={handleReset}>Reset</Button>
    </>
  );
};

export default NavigationBar;
