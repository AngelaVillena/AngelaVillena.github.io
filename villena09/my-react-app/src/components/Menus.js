import React from "react";
import { Products } from "./Products";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

const appliances = [
  { name: "Sony TV", url: "/appliance_tv.jpg", id: 1 },
  { name: "Washing Machine", url: "/appliance_washingmachine.jpeg", id: 2 },
  { name: "Samsung microwave oven", url: "/appliance_microwave.avif", id: 3 },
  { name: "Samsung Refrigerator", url: "/appliance_ref.avif", id: 4 },
];

const groceries = [
  { name: "Skippy", url: "/grocery_skippy.jpg", id: 1 },
  { name: "Bread", url: "/grocery_bread.png", id: 2 },
  { name: "Cheetos", url: "/grocery_cheetos.png", id: 3 },
];
const gadgets = [
  { name: "Apple Watch", url: "/gadget_applewatch.jfif", id: 1 },
  { name: "VR", url: "/gadget_vr.jpg", id: 2 },
];

const clothes = [
  { name: "Uniqlo Cardigan", url: "/clothes_cardigan.avif", id: 1 },
  { name: "Uniqlo Shirt", url: "/clothes_shirt.avif", id: 2 },
  { name: "Uniqlo Pink Shirt", url: "/clothes_shirt1.avif", id: 2 },
];

export function Menus({ data, title }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const [items, setItems] = useState([]);
  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(itemName) {
    setItems((items) => items.filter((item) => item.name !== itemName));
  }

  const [totalItems, setTotalItems] = useState(0);

  const handleAddToCart = (item) => {
    setTotalItems((prevTotal) => prevTotal + 1);
  };

  const decreaseTotal = () => {
    setTotalItems((prevTotal) => prevTotal - 1);
  };
  return (
    <div>
      <nav className="navigationBar">
        <img src={"/Lazado.svg"} alt="Lazado" width="70" height="70" />
        <nav className="categoriesParent">
          {data.map((menu1, index) => {
            return (
              <button
                className="categories"
                key={index}
                onClick={() => handleButtonClick(menu1.name)}
              >
                {menu1.name}
              </button>
            );
          })}
        </nav>
      </nav>
      <div className="content">
        <div className="products">
          {selectedCategory === "Appliances" && (
            <Products
              data={appliances}
              addToCart={addItem}
              addAnItem={handleAddToCart}
              itemCount={totalItems}
            />
          )}
          {selectedCategory === "Groceries" && (
            <Products
              data={groceries}
              addToCart={addItem}
              addAnItem={handleAddToCart}
              itemCount={totalItems}
            />
          )}
          {selectedCategory === "Gadgets" && (
            <Products
              data={gadgets}
              addToCart={addItem}
              addAnItem={handleAddToCart}
              itemCount={totalItems}
            />
          )}
          {selectedCategory === "Clothing" && (
            <Products
              data={clothes}
              addToCart={addItem}
              addAnItem={handleAddToCart}
              itemCount={totalItems}
            />
          )}
        </div>

        <ShoppingCart
          data={items}
          deleteItem={deleteItem}
          itemCount={totalItems}
          decreaseTotal={decreaseTotal}
        />
      </div>{" "}
    </div>
  );
}
export default Menus;
