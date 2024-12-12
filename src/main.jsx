import "./index.css";
import ReactDOM from "react-dom/client"
import App from "./App.jsx";
import ContextProvider from "./context/Context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
