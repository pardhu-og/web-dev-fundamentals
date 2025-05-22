//Greeting.jsx

export function ProfileCard({ name, role, color, children }) {
  return (
    <div style={{
      border: `2px dashed ${color}`,
      margin: "5px",
      padding: "5px",
      borderRadius: "8px"
    }}>
      <h3>Name: {name}</h3>
      <p>Role: {role}</p>
      {children}
    </div>
  );
}

export function Individual({ description }) {
  return <p>Description: {description}</p>;
}


