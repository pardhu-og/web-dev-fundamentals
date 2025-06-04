// Footer.jsx
import { useContext } from "react"
import { LanguageContext } from "../LanguageContext"

function Footer(){
    const {lang, setLang} = useContext(LanguageContext)

    return (
        <div style={{background:"grey", color:"white",  textAlign:"center", padding:"1px" }}>
           {lang === "English" && <h5>The only way to do great work is to love what you do. &copy;</h5>}
           {lang === "Hindi" && <h5>महान काम करने का एकमात्र तरीका यह है कि आप जो करते हैं उससे प्यार करें। &copy;</h5>}
           {lang === "Telugu" && <h5>గొప్ప పని చేయడానికి ఏకైక మార్గం మీరు చేసే పనిని ప్రేమించడం. &copy;</h5>}
        </div>
    )
}

export default Footer;