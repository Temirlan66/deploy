import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import Proudcts from "./pages/Proudcts";
import { store } from "./store";

function AppContent() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Proudcts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};
export default App;
