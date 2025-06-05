// Child.jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Child() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "dark" ? "#333" : "#eee", padding: "1rem", color: theme === "dark" ? "#eee" : "#333" }}>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Child;
