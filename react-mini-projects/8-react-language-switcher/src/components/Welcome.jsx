// Welcome.jsx
import { useContext } from "react"
import { LanguageContext } from "../LanguageContext"

function Welcome(){
    const {lang, setLang} = useContext(LanguageContext)

    return (
        <div style={{background: "pink",
            textAlign: "center", fontSize:"50px"

        }}>
           {lang === "English" && <h1>Welcome</h1>}
           {lang === "Hindi" && <h1>स्वागत है</h1>}
           {lang === "Telugu" && <h1>స్వాగతం</h1>}
        </div>
    )
}

export default Welcome