import { Link } from "react-router-dom";
import useAuth from "../../../Firbase/Hook/useAuth";
import logo from "../../../assets/logo.svg";
import { FaUserCircle } from "react-icons/fa";
const NavBar = () => {
  const { user, logOut } = useAuth();

  const navItem = (
    <>
      <Link to="/">
        <li className="font-bold">
          <a>Home</a>
        </li>
      </Link>
      <Link to="/about">
        <li className="font-bold">
          <a>About</a>
        </li>
      </Link>
      <Link to="/services">
        <li className="font-bold">
          <a>Services</a>
        </li>
      </Link>
      <Link to="/contact">
        <li className="font-bold">
          <a>Contact</a>
        </li>
      </Link>
      {user.uid && (
        <Link to="/bookings">
          <li className="font-bold">
            <a>My Bookings</a>
          </li>
        </Link>
      )}
    </>
  );
  return (
    <div className="navbar bg-white flex items-center h-24 mb-8 pt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal bg-white px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        {user.uid ? (
          <>
            <button
              onClick={logOut}
              className="btn btn-outline btn-error mr-4 text-white"
            >
              Log Out
            </button>
            {user.photoURL ? (
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            ) : (
              <FaUserCircle />
            )}
          </>
        ) : (
          <button className="btnbtn-outline btn-error mr-4 text-white">
            <Link to="/signup">Sign Up</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
