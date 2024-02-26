import React from "react";
import Logo from "./logo/movieDB_Logo";
import "./leftcontent.css"
import Movies from "./navbarmenu/navbar_menu_list";
import RightContent from "../rightbar/rightContent";

function LeftNavbar() {
    return (
        <div className="header-left-outer-div">
            <div className="header-left-div">
                <a href="/"> <Logo /></a>
                <Movies />
            </div>
        </div>
    )
}
export default LeftNavbar