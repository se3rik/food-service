import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button onClick={() => console.log("Clicked")}>Button</Button>
    </>
  );
}

export default App;
