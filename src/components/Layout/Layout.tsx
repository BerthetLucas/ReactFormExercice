import {Outlet} from "react-router-dom";
import {Nav} from "./Nav.tsx";

export const Layout = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full">
                <Nav/>
            </div>
            <Outlet/>
        </>
    )
}