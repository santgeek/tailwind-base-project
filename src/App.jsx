import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="bg-blue-500 text-white p-3.5 rounded-lg w-24 mx-auto block mb-5">
        Click me
      </button>
     
      <h1 className="text-violet-500 bg-[#50b23e]">Vite + React</h1>
      

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
