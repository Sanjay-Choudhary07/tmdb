import React, { useLayoutEffect, useRef } from "react";
import "./navbar_menu_list.css"
import { useState } from "react";
// import Menu from "./menu";
function Movies() {
    return (
        <div>
            <ul className="header-list">
                <li className="movies" id="movie">
                    <div>Movies</div>
                    <div className="list_items">
                        <ul className="dropdown">
                            <li className="dropdown_action">Popular</li>
                            <li className="dropdown_action">Now Playing</li>
                            <li className="dropdown_action">Upcoming</li>
                            <li className="dropdown_action">Top Rated</li>
                        </ul>
                    </div>
                </li>
                <li className="movies" id="show">
                    <div> TV Shows</div>
                    <div className="list_items">
                        <ul className="dropdown">
                            <li className="dropdown_action">Popular</li>
                            <li className="dropdown_action">Airing Today</li>
                            <li className="dropdown_action">On TV</li>
                            <li className="dropdown_action">Top Rated</li>
                        </ul>
                    </div>
                </li>
                <li className="movies" id="people">
                    <div>People</div>
                    <div className="list_items">
                        <ul className="dropdown">
                            <li className="dropdown_action">Popular People</li>
                        </ul>
                    </div>
                </li>
                <li className="movies" id="more">
                    <div>More</div>
                    <div className="list_items">
                        <ul className="dropdown">
                            <li className="dropdown_action">Discussions</li>
                            <li className="dropdown_action">Leaderboard</li>
                            <li className="dropdown_action">Support</li>
                            <li className="dropdown_action">API</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Movies