import Menus from "./components/Menus";
import Counter from "./components/Counter";
import { SubjectList } from "./components/SubjectList";
import TempConverter from "./components/TempConverter";
import "./App.css";

const menus = [
  { name: "Appliances", url: "#", id: 1 },
  { name: "Groceries", url: "#", id: 2 },
  { name: "Gadgets", url: "#", id: 3 },
  { name: "Clothing", url: "#", id: 4 },
];
const CMSCSubjects = [
  { code: "CMSC100", description: "Web Programming", id: 1 },
  { code: "CMSC150", description: "Scientific Computation", id: 2 },
  { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
];

function App() {
  return (
    <div>
      <Menus data={menus} />
    </div>
  );
}

export default App;
