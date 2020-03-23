import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const AddItem = ({ addItems }) => {
  const [description, setdescription] = useState("");

  const onChang = event => {
    setdescription(event.target.value);
  };

  const onSubmitHandler = eve => {
    eve.preventDefault();
    addItems(description);
    setdescription("");
  };

  return (
    <div className="addItemMain">
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{ fontWeight: "700" }}>Add Item</Form.Label>
          <Form.Control
            style={{ height: "calc(1.2em + .75rem + 2px)" }}
            type="text"
            value={description}
            placeholder="Add Item"
            onChange={onChang}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
