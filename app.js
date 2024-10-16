// App.js
import React, { useState } from "react";
import Header from "./Header";
import Counter from "./Counter";

function App() {
  const [title, setTitle] = useState("Welcome to React");

  return (
    <div>
      <Header title={title} />
      <Counter />
    </div>
  );
}

exportdefaultApp;


// Header.js

im
import React from "react";

function Header({ title }) {
  return <h1>{title}</h1>;
}

export default Header;


// Counter.js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

exportdefaultCounter;
