import "./App.css";
import { MyFooter } from "./components/Footer";
import { MyNavbar } from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <MyNavbar />
      <Home />
      <MyFooter />
    </div>
  );
}

export default App;
