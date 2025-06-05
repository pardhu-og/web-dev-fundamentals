//DOcsLayout.jsx
import { Outlet } from "react-router-dom";

function DocsLayout(){
    return (
        <div>
            <h3>Docs Layout</h3>
            <p>Now the documents just appear below when we select the document in nav bar, without reloading the page.</p>
            <Outlet/>
            <p> ...The End...</p>
        </div>
    )
}

export default DocsLayout;