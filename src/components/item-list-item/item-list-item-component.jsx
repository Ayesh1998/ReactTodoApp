import React, { useState } from "react";
import { FaTrashAlt, FaPen, FaSignInAlt } from "react-icons/fa";
import { Row, Col, Form, Button } from "react-bootstrap";

import "./item-list-item-styles.scss";

const ItemListItem = ({
  items: { description },
  id,
  deleteItems,
  editItem
}) => {
  const [edit, setEdit] = useState(false);
  const [descriptions, setdescription] = useState("");

  const onChang = event => {
    setdescription(event.target.value);
  };

  const onSubmitHandler = eve => {
    eve.preventDefault();
    var itemss = { description: descriptions, id: id };
    editItem(itemss);
    console.log("itemssss " + itemss);
    setEdit(false);
    setdescription("");
  };

  return (
    <div className="itemListItemMain" style={{ marginTop: "2px" }}>
      <Row>
        <Col sm={12} className="itemWrap">
          {edit ? (
            <Form onSubmit={onSubmitHandler}>
              <Form.Group
                style={{ marginBottom: "7px" }}
                controlId="formBasicEmail"
              >
                <Form.Label style={{ fontWeight: "600" }}>Edit Item</Form.Label>
                <Form.Control
                  style={{ zIndex: "2" }}
                  type="text"
                  value={descriptions}
                  placeholder="Add Item"
                  onChange={onChang}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ marginBottom: "8px" }}
              >
                <FaSignInAlt />
                <span style={{ marginLeft: "14px" }}>Save</span>
              </Button>
            </Form>
          ) : (
            <div>
              <span className="itemDescription">{description}</span>
              <div className=" float-right">
                <FaPen
                  style={{ marginRight: "13px" }}
                  onClick={() => {
                    setEdit(true);
                    setdescription(description);
                  }}
                />

                <FaTrashAlt
                  style={{ marginRight: "13px" }}
                  onClick={() => deleteItems(id)}
                />
              </div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ItemListItem;
