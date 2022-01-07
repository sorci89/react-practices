import React, { useState } from "react";

function ButtonWithHooks() {
  const [greeting, setGreeting] = useState({ key1: "Hello2", key2: "Ciao" });
  const [title, setTitle] = useState("2008");

  return (
    <div>
      <h2>{title}</h2>
      <p>{greeting.key1}</p>
      <p>{greeting.key2}</p>
      <button onClick={() => setGreeting({ key1: "Bye2" })}>Click me!</button>
      <button onClick={() => setTitle("2022")}>Click me!</button>
    </div>
  );
}

export default ButtonWithHooks;
