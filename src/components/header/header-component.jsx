import React from "react";
import { Card } from "react-bootstrap";

import "./header-styles.scss";

const Header = () => {
  return (
    <div className="headerMain">
      <Card>
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
            TODO APP
          </Card.Title>

          <Card.Text>
            Duis dolore consectetur id adipisicing Lorem laborum magna. Nisi
            dolore excepteur reprehenderit nisi qui. Voluptate qui sunt est
            culpa eu sint mollit nisi duis deserunt nisi. Labore fugiat do nisi
            quis ad.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Header;
