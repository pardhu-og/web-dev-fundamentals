//App.jsx

import { ProfileCard, Individual } from "./components/Greeting";

function App() {
  const name1 = prompt("Enter name for profile 1");
  const role1 = prompt("Enter role for profile 1");
  const desc1 = prompt("Enter description for profile 1");

  const name2 = prompt("Enter name for profile 2");
  const role2 = prompt("Enter role for profile 2");
  const desc2 = prompt("Enter description for profile 2");

  return (
    <div>
      <h1>React Clean Slate</h1>
      
      <ProfileCard name={name1} role={role1} color="red">
        <Individual description={desc1} />
      </ProfileCard>

      <ProfileCard name={name2} role={role2} color="blue">
        <Individual description={desc2} />
      </ProfileCard>
    </div>
  );
}

export default App;

