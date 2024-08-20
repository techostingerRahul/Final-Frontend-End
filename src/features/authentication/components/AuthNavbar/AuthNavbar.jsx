import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.svg";
import "./AuthNavbar.css";

export function AuthNavbar() {
  console.log("Auth Navbar reached");

  const styles = {
    // zIndex: 10,
    boxShadow: "0px 5px 6.1px rgba(171, 29, 121, 0.23)",
  };

  return (
    <header className="z-10 relative" style={styles}>
      <div className="header-content ">
        <h1 className="logo">
          <Link to="/">
            {" "}
            <img src={logo} alt="/" />
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/loginpage">Login</Link>
            </li>
            <li>
              <Link to="/signuporlogin">Create a new account</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-underline  "></div>
    </header>
  );
}
