//RespponsivePricing.jsc
export default function ResponsivePricing () {
    return (
       <div className="bg-red-100 font-mono pt-24 md:pt-12 md:p-5  min-h-screen flex flex-col items-center gap-8 w-full">
            <div className=""><h1 className="text-5xl  italic bold">Nirvana</h1></div>
            <div className="  bg-green-100  p-4 mb-2 shadow-xl rounded-xl">
            <h2 className="text-center text-3xl italic   ">Select a Plan</h2>
            <div className="flex flex-col gap-4 md:flex-row justify-evenly items-center m-4 p-2 h-fit">
                <div className="shadow-xl bg-indigo-400 rounded-xl p-2 flex flex-col items-center gap-2">
                    <h3 className="font-semibold text-xl">Starter</h3>
                    <p><span className="font-semibold">Price:</span> $19/mo</p>
                    <h4 className="font-semibold">Features</h4>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button className="bg-blue-500 px-2 py-1 rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white active:scale-95">Start Trial</button>
                </div>

                <div className="shadow-2xl border-2 border-indigo-500 bg-purple-400 rounded-xl p-2 flex flex-col items-center gap-2 ">
                    <h3 className="font-semibold text-xl">Pro</h3>
                    <p><span className="font-semibold">Price:</span> $22/mo</p>
                    <h4 className="font-semibold">Features</h4>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button className="bg-blue-500 px-2 py-1 rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white active:scale-95">Start Trial</button>
                    <p className="text-xs mb-4 font-bold text-yellow-200 bg-black px-2 py-0.4 rounded"> ✨ Most Popular</p>
                </div>

                <div className="shadow-xl bg-indigo-400 rounded-xl p-2 flex flex-col items-center gap-2">
                    <h3 className="font-semibold text-xl">Enterprise</h3>
                    <p><span className="font-semibold">Price:</span> $25/mo</p>
                    <h4 className="font-semibold">Features</h4>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button className="bg-blue-500 px-2 py-1 rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white active:scale-95">Start Trial</button>
                </div>
            </div>
        </div>
        </div>
    )
}