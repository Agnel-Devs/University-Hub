import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
    return(
      <nav>
        <Link to="/">Home</Link>
        <Link to="/students"> Students</Link>
        <Link to="/courses"> Courses</Link>
        <Link to="/about"> About</Link>
        {/* <Link to="/login">Login</Link> */}

        {user ? (
          <>
            <span>Welcome, {user.username}</span>
            <br></br>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <span className="username">No user loged in</span>
            <Link to="/login" className="login-btn">Login</Link>
          </>
        )}
      </nav>
    );
}
export default Navbar;