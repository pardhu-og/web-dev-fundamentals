//DOM.jsx

export  function ChildA({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

export  function ChildB({ count }) {
  return <h2>Current Count: {count}</h2>;
}