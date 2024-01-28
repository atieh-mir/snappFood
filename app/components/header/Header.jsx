
import dynamic from "next/dynamic"
import Category from "./Category"
import Navbar from "./Navbar"

const Header = ()=>{
    return(
        <div className="fixed-top bg-white">
        <Navbar/>
        <Category/>
        </div>
    )
}
export default dynamic(()=> Promise.resolve(Header),{ssr : false})