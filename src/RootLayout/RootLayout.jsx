import { Outlet } from "react-router-dom"
import Navbar from "../Home/Navbar/Navbar"

const RootLayout = () => {
  return (
    <div>
        <div className="w-[1100px] mx-auto">
            <Navbar/>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default RootLayout