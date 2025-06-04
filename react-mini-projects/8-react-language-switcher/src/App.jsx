// App.jsx

import { useState, useEffect  } from "react";
import LanguageSelector from "./components/LanguageSelector";
import { LanguageContext } from "./LanguageContext";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";


function App (){
    const[lang, setLang] = useState(JSON.parse(localStorage.getItem("lang")) ||"English")
    
    useEffect(()=>{
      localStorage.setItem("lang", JSON.stringify(lang))
    },[lang])

    
  return(

    <>
    <LanguageContext.Provider value ={{lang, setLang}}>
    <LanguageSelector />
    <Welcome />
    <Footer />
    </LanguageContext.Provider>
    </>

  )

}


export default App;
