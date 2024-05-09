import React from "react";

class Appliances extends React.Component {
  print1 = (category) => {
    console.log("Added " + category.name + " to your cart!");
  };
  render() {
    const appliance = this.props.data;

    return (
      <div class="appliancesProducts">
        {appliance.map((appliance1, index) => {
          return (
            <div className="applianceTile">
              <img
                className="applianceImage"
                src={appliance1.url}
                width="120"
                height="120"
              />
              <h2 className="productName">{appliance1.name}</h2>
              <button
                onClick={() => this.print1(appliance1)}
                className="addToCart"
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Appliances;
