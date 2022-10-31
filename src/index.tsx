import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Homepage from "./components/Homepage";
import TeeShirt from "./components/TeeShirt";
import Messenger from "./components/Messenger";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="teeshirt" element={<TeeShirt />} />
          <Route path="Messenger" element={<Messenger />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
