//Dashboard.jsx
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Dashboard(){
    const {logIn} = useContext(AuthContext)

    return (
        <div>
            {(logIn===false) && <h2>Please Login to Continue</h2>}
            {(logIn === true) && 
            <div>
                <h2>This is your dashboard!!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae autem dicta voluptatem ipsum dignissimos voluptatum animi molestiae omnis nostrum, odio deleniti laboriosam repellendus sed iusto eaque id sapiente ducimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae autem dicta voluptatem ipsum dignissimos voluptatum animi molestiae omnis nostrum, odio deleniti laboriosam repellendus sed iusto eaque id sapiente ducimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae autem dicta voluptatem ipsum dignissimos voluptatum animi molestiae omnis nostrum, odio deleniti laboriosam repellendus sed iusto eaque id sapiente ducimus.</p>
                </div>}
        </div>
    )
}

export default Dashboard;