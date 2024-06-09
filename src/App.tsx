import { useState } from "react";
import "./App.css";
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ padding: "50px" }}>
        <h1>Hello, Vite + Ant Design!</h1>
        <Button type="primary">Ant Design Button</Button>
      </div>
    </>
  );
}

export default App;
