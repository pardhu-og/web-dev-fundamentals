export default function Login(){

    return (
        <div className=" h-screen flex justify-center items-center bg-blue-100 p-2">

    <div className="p-12 flex flex-col gap-4 items-center bg-white w-96 shadow-lg rounded-2xl ">
        <h3 className="text-3xl font-serif italic">Nirvana</h3>
        <input  className="border border-gray-400 w-full px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" placeholder="Email" />
        <input className="border border-gray-400 w-full px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" type="password" placeholder="Password" />

        <div className="w-full flex justify-between">
          <a href="https:google.com" target="_blank" className=" text-xs  focus:outline-none focus:ring-2 focus:ring-blue-400 hover:text-blue-500 active:scale-95">Create Account</a>

          <a href="https:google.com" target="_blank" className=" text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 hover:text-blue-500 active:scale-95">Forgot password</a>
        </div>

        <button className="bg-blue-600 text-white w-full px-2 py-2 rounded hover:bg-blue-900 hover:font-bold active:scale-95 transition-all duration-200 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-900" >Login</button>
    </div>
</div>

    )
}