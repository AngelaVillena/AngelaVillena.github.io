import React from "react";
import Appliances from "./Appliances";
const appliances = [
  { name: "Sony TV", url: "/appliance_tv.jpg", id: 1 },
  { name: "Washing Machine", url: "/appliance_washingmachine.jpeg", id: 2 },
];

const groceries = [
  { name: "Skippy", url: "/grocery_skippy.jpg", id: 1 },
  { name: "Washing Machine", url: "/grocery_bread.png", id: 2 },
  { name: "Washing Machine", url: "/grocery_cheetos.png", id: 3 },
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

class Menus extends React.Component {
  state = {
    selectedCategory: null,
  };

  handleButtonClick = (category) => {
    this.setState({ selectedCategory: category });
  };
  render() {
    const menu = this.props.data;
    console.log(this.props);

    return (
      <div>
        <nav className="flex-container">
          <img src={"/Lazado.svg"} alt="Lazado" width="70" height="70" />
          <nav className="categoriesParent">
            {menu.map((menu1, index) => {
              return (
                <button
                  className="categories"
                  key={index}
                  onClick={() => this.handleButtonClick(menu1.name)}
                >
                  {menu1.name}
                </button>
              );
            })}
          </nav>
        </nav>{" "}
        <div className="products">
          {this.state.selectedCategory === "Appliances" && (
            <Appliances data={appliances} />
          )}
          {this.state.selectedCategory === "Groceries" && (
            <Appliances data={groceries} />
          )}
          {this.state.selectedCategory === "Gadgets" && (
            <Appliances data={gadgets} />
          )}
          {this.state.selectedCategory === "Clothing" && (
            <Appliances data={clothes} />
          )}
        </div>
      </div>
    );
  }
}
export default Menus;
