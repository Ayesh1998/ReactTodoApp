import React from "react";
import { Card } from "react-bootstrap";

import "./header-styles.scss";
import { FaClipboardList } from "react-icons/fa";

const Header = () => {
  return (
    <div className="headerMain">
      <Card>
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
            TODO APP
          </Card.Title>

          <Card.Text style={{ textAlign: "center" }}>
            <FaClipboardList
              style={{ marginRight: "12px", marginBottom: "5px" }}
            />{" "}
            MY TODO LIST FOR TODAY{" "}
            <FaClipboardList
              style={{ marginLeft: "12px", marginBottom: "5px" }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Header;
