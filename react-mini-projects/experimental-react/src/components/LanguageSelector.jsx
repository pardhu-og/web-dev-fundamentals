// LanguageSelector.jsx
import {  useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function LanguageSelector (){
    const {lang, setLang} = useContext(LanguageContext)
    
  return( 
    <select onChange={(e)=>setLang(e.target.value)} value = {lang}> 
      <option value="English">English</option>
      <option value="Telugu">Telugu</option>
      <option value="Hindi">Hindi</option>
    </select>
  )
}


export default LanguageSelector;
