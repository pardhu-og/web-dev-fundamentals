
import useInput from "./hooks/useInput"
function App() {
const name = useInput("")
const password = useInput("")
function Submit(e){
  e.preventDefault()
  console.log(`Username: ${name.input} Password: ${password.input}`)
  name.reset();
  password.reset();
}
  return (
    <div>
     <form onSubmit={Submit}>
       <p>Username: <input type="text" value={name.input} onChange={name.read}/></p>
       <p>Password: <input type="password" value={password.input} onChange={password.read}/></p>
       <button type = "submit">Submit</button>
     </form>
    </div>
  )
}
export default App;

