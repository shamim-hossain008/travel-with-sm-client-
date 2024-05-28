import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { signOut } = useContext(AuthContext) || {};
  const navigate = useNavigate();
  const [userOpen, setUserOpen] = useState(false);

  const handleSignOut = () => {
    signOut()
      .then((result) => {
        toast.success("successfully Sign out");
      })
      .catch((error) => {
        toast.error("error");
      });
    setUserOpen(false);
  };

  const user = localStorage.getItem("user");

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/alltouristsspot">All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/register">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/addturestssport">Add Tourists Spot</NavLink>
          </li>
          <li>
            <NavLink to="/mylist">My List</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <a className="btn btn-ghost text-blue-400 font-bold text-xl">
              Travel-with-SM
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <div
                className="tooltip h-10 w-10 border flex items-center justify-center rounded-full tooltip-bottom"
                data-tip={user?.email}
              >
                <FaUser size={20} />
              </div>

              <button
                onClick={handleSignOut}
                className="btn w-36 text-xl text-white bg-black font-bold "
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn w-36 text-xl text-white bg-black font-bold ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
