import React, { useState } from "react";
import nextId from "react-id-generator";
import { Col, Row } from "react-bootstrap";
import Header from "../../components/header/header-component";
import ItemList from "../../components/item-list/item-list-component";
import AddItem from "../../components/additem/additem-component";
import "./main-styles.scss";

const Main = () => {
  const [items, setItems] = useState([]);

  const addItems = description => {
    var item = { description: description, id: nextId() };
    var itemss = [item, ...items];
    setItems(itemss);
  };

  const deleteItems = key => {
    var filtered = items.filter(item => item.id != key);
    setItems(filtered);
  };

  const findItem = id => {
    const item = items.find(item => item.id == id);
    const indexOfItem = items.findIndex(item => item.id == id);
    return { item: item, index: indexOfItem };
  };

  const editItem = edItem => {
    const indexOfItem = items.findIndex(item => item.id == edItem.id);
    var filtered = items.filter(item => item.id != edItem.id);
    var arr = [...filtered];
    arr.splice(indexOfItem, 0, edItem);
    setItems([...arr]);
  };

  return (
    <div
      className="container"
      style={{
        borderRadius: "5px",
        backgroundColor: "#d9d1d0",
        marginTop: "111px",
        padding: "69px"
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "#f5eeed",
          borderRadius: "4px",
          boxShadow: "10px 10px #d9d1d0"
        }}
      >
        <Row
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginRight: "0px",
            marginLeft: "0px"
          }}
        >
          <Col sm="12">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="5" style={{ margin: "7% auto" }}>
            <AddItem addItems={addItems} />
          </Col>
          <Col sm="12" md="5" style={{ margin: "7% auto" }}>
            <ItemList
              deleteItems={deleteItems}
              items={items}
              editItem={editItem}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Main;
