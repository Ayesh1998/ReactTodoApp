import React from "react";
import ItemListItem from "../item-list-item/item-list-item-component";

import "./item-list-styles.scss";

const ItemList = ({ deleteItems, items, findItem, editItem }) => {
  return (
    <div className="itemListMain">
      <span
        className="itemListSpan"
        style={{ fontWeight: "700", marginLeft: "-13px", fontSize: "17px" }}
      >
        Item List
      </span>

      {items.length ? (
        items.map(
          item => (
            <ItemListItem
              key={item.id}
              id={item.id}
              items={item}
              deleteItems={deleteItems}
              findItem={findItem}
              editItem={editItem}
            />
          )

          /* <ItemListItem  description={item.description} deleteItem={deleteItem}  editItem={editItem} /> */
        )
      ) : (
        <div className="dontHaveItems">Empty todoList</div>
      )}
    </div>
  );
};

export default ItemList;
