import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./additem-styles.scss";

const AddItem = ({ addItems }) => {
  const [description, setdescription] = useState("");
  const [emptyForm, setemptyForm] = useState(false);

  const onChang = event => {
    setdescription(event.target.value);
  };

  const onSubmitHandler = eve => {
    eve.preventDefault();
    if (description === "") {
      setemptyForm(true);
    } else {
      addItems(description);
      setdescription("");
      setemptyForm(false);
    }
  };

  return (
    <div className="addItemMain">
      <Form onSubmit={onSubmitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="addItemLabel" style={{ fontWeight: "700" }}>
            Add Item
          </Form.Label>
          <Form.Control
            style={{ height: "calc(1.2em + .75rem + 2px)" }}
            type="text"
            value={description}
            placeholder="Add Item"
            onChange={onChang}
          />
        </Form.Group>
        {emptyForm ? (
          <p style={{ color: "red", fontWeight: "600" }}>
            Please enter a todo item
          </p>
        ) : null}
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
