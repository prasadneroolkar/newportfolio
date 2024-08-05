import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prevcount) => {
      return prevcount + 1;
    });
    setCount((prevcount) => {
      return prevcount + 1;
    });
  };

  return (
    <>
      <div className="card">
        <button onClick={handleCount}>Click</button>
        <p>{count}</p>
      </div>
    </>
  );
}

export default App;
