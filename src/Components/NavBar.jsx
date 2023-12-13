import React, { useState, useEffect } from "react";
import { Nav, Button } from "react-bootstrap";
import "../App.css";

const NavigationBar = () => {
  const [tabCount1, setTabCount1] = useState(0);
  const [tabCount2, setTabCount2] = useState(0);
  const [tabCount3, setTabCount3] = useState(0);
  const [tabCount4, setTabCount4] = useState(0);
  const [tabCount5, setTabCount5] = useState(0);

  useEffect(() => {
    const intervalId1 = setTimeout(() => {
      setTabCount1((tabCount1) => tabCount1 + 1);
    }, 1000);

    const intervalId2 = setTimeout(() => {
      setTabCount2((tabCount2) => tabCount2 + 2);
    }, 2000);

    const intervalId3 = setTimeout(() => {
      setTabCount3((tabCount3) => tabCount3 + 3);
    }, 3000);

    const intervalId4 = setTimeout(() => {
      setTabCount4((tabCount4) => tabCount4 + 4);
    }, 4000);

    const intervalId5 = setTimeout(() => {
      setTabCount5((tabCount5) => tabCount5 + 5);
    }, 5000);
    // Cleanup intervals to avoid memory leaks
    return () => {
      clearTimeout(intervalId1);
      clearTimeout(intervalId2);
      clearTimeout(intervalId3);
      clearTimeout(intervalId4);
      clearTimeout(intervalId5);
    };
  }, []);

  const handleReset = () => {
    setTabCount1(0);
    setTabCount2(0);
    setTabCount3(0);
    setTabCount4(0);
    setTabCount5(0);
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
        <Nav.Link href="#" className="nav">
          Count4: {tabCount4}
        </Nav.Link>
        <Nav.Link href="#" className="nav">
          Count5: {tabCount5}
        </Nav.Link>
      </Nav>
      <Button onClick={handleReset}>Reset</Button>
    </>
  );
};

export default NavigationBar;
