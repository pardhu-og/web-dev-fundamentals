//Responsive.jsx
import { useContext } from "react";
import { Themecontext } from "../contexts/Themecontext";
export default  function Responsive (){
    const {btnStat} = useContext(Themecontext)
    return (
        <div className={`space-y-5 ${btnStat==="light"?"text-black":"text-white"}`}>
            <h1 className="text-5xl md:text-7xl  text-center ">Responsive Typography Showcase</h1>
            <h2 className="text-3xl md:text-5xl">Lorem ipsum dolor sit amet consectetur.</h2>
            <h3 className="text-xl md:text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <h4 className="text-base md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur!</h4>
            <p className="text-sm md:text-l leading-relaxed tracking-wide indent-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam facere exercitationem sequi natus impedit distinctio eos animi, aperiam veritatis reiciendis facilis iste quae consequuntur? Dolorem ipsa sed incidunt nihil earum neque? Quasi, officia tempore cumque ea, esse dicta, doloribus voluptate itaque impedit minus et omnis magnam consectetur recusandae rem.</p>

            <p className="text-xs md:text-sm leading-relaxed tracking-wide">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatum omnis cum provident nesciunt doloremque inventore at quod enim iure.</p>

       <p>List of items that are unordered</p>
            <ul>
                <li className="indent-5">-First thing</li>
                <li className="indent-5"> -Second thing<ul>
                    <li className="indent-9">-First in second</li>
                    <li className="indent-9">-Second in second</li></ul></li>
                <li className="indent-5">-Third thing</li>
            </ul>

            <ol>List of items that are ordered
                <li className="indent-5">1. The thing of the first</li>
                <li className="indent-5">2. The thing of the second</li>
                <li className="indent-5">3. The thing of the third</li>
            </ol>
            <ul className="text-center">Links to some important sites
                <li className="text-blue-500"><a className="hover:text-red-500"href="https:www.Google.com" target="_blank">Google</a></li>
                <li className="text-blue-500 "><a className="hover:text-red-500" href="https:www.wikipedia.com" target="_blank">Wikipedia</a></li>
            </ul>
        </div>
    )
}