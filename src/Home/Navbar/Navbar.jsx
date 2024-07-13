import { Link, NavLink } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Navbar = () => {
  const {user} = useAuth()
    const navlinks = <>
     <li><NavLink className={({isActive})=>
    isActive ? "" : ""
    } to="/">Home</NavLink></li>
     <li><NavLink className={({isActive})=>
    isActive ? "" : ""
    } to="/article">Article</NavLink></li>
     <li><NavLink className={({isActive})=>
    isActive ? "" : ""
    } to="/register">Register</NavLink></li>
     <li><NavLink className={({isActive})=>
    isActive ? "" : ""
    } to="/login">Login</NavLink></li>
    </>
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
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navlinks}
      </ul>
    </div>
    <Link to="/" className=" text-2xl">Tech <span>Bolgs</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">
    <img className="w-12 h-12 rounded-full " src="https://i.postimg.cc/x84046zh/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTAx-L3-Jt-Nj-A5-LXNvb-Glka-WNvbi13-LTAw-Mi1w-Ln-Bu-Zw.webp" alt="" />
  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
    <li><a>Profile</a></li>
    <h1>{user?.displayName}</h1>
    <li><a>Dashboard</a></li>
    <li><a>Log Out</a></li>
  </ul>
</div>
  </div>
</div>
    </div>
  )
}

export default Navbar