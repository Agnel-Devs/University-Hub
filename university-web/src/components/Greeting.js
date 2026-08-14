import React from "react";
function UserGreeting(props){
    const isloggedIn=props.isloggedIn;
    return(
        <div>
            <h1>
                {isloggedIn?"Welcome back,User!":"Please Sign in"}
            </h1>
            {isloggedIn && <button>Log Out</button>}
            {!isloggedIn && <button>Register Now</button>}
        </div>
    );
}
export default UserGreeting;