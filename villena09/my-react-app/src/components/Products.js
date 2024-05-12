export function Products({ data, addToCart, addAnItem, itemCount }) {
  const print1 = (category) => {
    console.log("Added " + category.name + " to your cart!");
  };

  return (
    <>
      <div class="allProducts">
        {data?.map((item, index) => {
          console.log("index" + index);

          return (
            <div className="applianceTile">
              <img
                alt="a"
                className="applianceImage"
                src={item.url}
                width="120"
                height="120"
              />
              <h2 className="productName">{item.name}</h2>
              <button
                onClick={() => {
                  addToCart(item);
                  print1(item);
                  addAnItem(item);
                }}
                className="addToCart"
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Products;
