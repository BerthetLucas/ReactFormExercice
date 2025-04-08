import {Outlet} from "react-router-dom";
import {Nav} from "./Nav.tsx";
import {Footer} from "./Footer.tsx";


export const Layout = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full">
                <Nav/>
            </div>
            <Outlet/>
            <div className="flex items-center justify-center w-full">
                <Footer/>
            </div>
        </>
    )
}