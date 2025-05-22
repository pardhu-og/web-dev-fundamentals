import { ProfileCard, Individual } from "./components/Dom";

const individualsData = {
  "person1": {
    "name": "Alex Sharma",
    "role": "Lead Developer",
    "description": "A meticulous problem-solver with a knack for optimizing complex systems.",
    "favouriteColor": "lightBlue"
  },
  "person2": {
    "name": "Maria Rodriguez",
    "role": "UX/UI Designer",
    "description": "A creative visionary who brings innovative ideas to life with stunning visuals.",
    "favouriteColor": "lightGreen"
  },
  "person3": {
    "name": "Liam O'Connell",
    "role": "Project Manager",
    "description": "An enthusiastic communicator, always fostering collaboration and positive team dynamics.",
    "favouriteColor": "lightpink"
  },
  "person4": {
    "name": "Sophia Chen",
    "role": "QA Engineer",
    "description": "Detail-oriented and analytical, ensuring top-notch quality in every deliverable.",
    "favouriteColor": "Grey"
  },
  "person5": {
    "name": "Noah Williams",
    "role": "Junior Developer",
    "description": "A versatile individual with a passion for continuous learning and adapting to new challenges.",
    "favouriteColor": "Yellow"
  }
};


function App() {

 const x = Object.values(individualsData)




  return (
    <div style ={{
      width: "80%", 
      margin: "auto",
    }}>
      {Object.values(individualsData).map((person, index) => (
  <ProfileCard
    key={index}
    name={person.name}
    role={person.role}
    color={person.favouriteColor}
  >
    <Individual description={person.description} />
  </ProfileCard>
))}
    </div>
  );
}

export default App;