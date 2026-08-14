import React from "react";
function Header (){
    return(
        
        <header className="app-hearder"
        style={{textAlign:"center"}}>
            <h1>University Hub Portal</h1>
            <nav>
                <a href="/">Home</a>{"   "}
                <a href="/">Courses</a>{"  "}
            </nav>
        </header>
    )
}
export default Header;