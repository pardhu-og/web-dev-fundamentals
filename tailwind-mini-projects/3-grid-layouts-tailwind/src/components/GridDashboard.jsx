//GridDashboard
import Navbar from "./Navbar";
export default function GridDashboard(){
    return(
        <div>
            <Navbar/>
            <div className="h-screen grid grid-cols-auto grid-rows-auto gap-1 m-2 md:m-4 lg:m-6 ">
                <div className="bg-red-200 p-2 col-start-1 col-end-5 text-center text-3xl rounded-xl">Header</div>
                <div className="bg-green-300 p-4 text-xl col-start-1 col-end-5 row-start-2 row-end-3 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4 text-center rounded-xl" >SideBar</div>
                <div className="bg-blue-200 col-start-1 col-end-5 row-start-3 row-end-4 md:col-start-2 md:col-end-5 md:row-start-2 md:row-end-4 flex flex-col text-center gap-8  px-16 py-4 rounded-xl">
                    <p className="text-2xl">Main Content</p> 
                    <div className="bg-orange-400 text-xl h-40 hover:scale-105 hover:shadow-xl rounded-xl p-16 transition-all duration-300">Widget 1</div>
                    <div className="bg-purple-400 p-16 text-xl h-40 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-xl">Widget 2</div>
                </div>
                <div className="bg-gray-500 text-white col-start-1 col-end-5 text-center text-xl rounded-xl" > Footer&copy; </div>
             </div>
        </div>
    )
}