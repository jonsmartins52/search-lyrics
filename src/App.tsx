import { useState } from "react";
import "./App.css";

import Aside from "./components/Aside";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Aside />
      <main className="main">letra</main>
    </div>
  );
}

export default App;
