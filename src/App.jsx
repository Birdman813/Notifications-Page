import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Notification from "./Components/Notification";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex justify-center items-center bg-[#F9FAFD] lg:h-screen">
      <Notification />
    </main>
  );
}

export default App;
