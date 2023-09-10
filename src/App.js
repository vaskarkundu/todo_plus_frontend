// import logo from './logo.svg';
import "./App.css";
import AddButton from "./components/addButton";
// import MyApp from './components/test';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./components/card";

function App() {
  return (
    <div className="App bg-secondary">
      <h1 className="fw-bold">To Plus</h1>
      <AddButton />
      <ToastContainer position="bottom-center" />
      <Card></Card>
    </div>
  );
}

export default App;
