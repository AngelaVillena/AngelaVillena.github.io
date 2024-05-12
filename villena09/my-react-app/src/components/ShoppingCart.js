export function ShoppingCart({ data, deleteItem, itemCount, decreaseTotal }) {
  return (
    <div>
      <h2>Shopping Cart (Total:{itemCount})</h2>
      <div>
        {data?.map((item, index) => (
          <div key={index}>
            {item.name}

            <button
              onClick={() => {
                deleteItem(item.name);
                decreaseTotal();
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
