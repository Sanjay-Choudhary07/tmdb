import React from "react";
import "./rightcontent.css"
import search from "../../../assets/logos/search.svg"
import bell from "../../../assets/logos/notification.svg"
import add from "../../../assets/logos/plus.svg"
function RightContent(){
    return(
<div className="header-right-div">
<ul className="right-nav-ul">
    <li className="plus"><img src={add} className="plus"></img></li>
    <li className="language">EN</li>
    <li><img className="bell" src={bell}></img></li>
    <li><div className="profile">S</div></li>
    <li><img className="search-logo" src={search}></img></li>
</ul>
        </div>
    )
}
export default RightContent