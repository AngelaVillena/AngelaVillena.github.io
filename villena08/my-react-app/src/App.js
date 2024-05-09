import Menus from "./components/Menus";
import Appliances from "./components/Appliances";
import "./App.css";

const menus = [
  { name: "Appliances", url: "#", id: 1 },
  { name: "Groceries", url: "#", id: 2 },
  { name: "Gadgets", url: "#", id: 3 },
  { name: "Clothing", url: "#", id: 4 },
];

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
  { name: "TV", url: "/appliance_tv.jpg", id: 1 },
  { name: "Washing Machine", url: "/appliance_washingmachine.jpeg", id: 2 },
];

function App() {
  const isClicked = true;
  return (
    <div>
      <Menus data={menus} title={"Menu"} />
    </div>
  );
}

export default App;
