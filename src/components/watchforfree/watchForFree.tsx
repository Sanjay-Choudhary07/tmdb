import React from "react";
import "./freetowatch.css"
import { useState } from "react";
import TrendingContent from "../trending/trendingcontent/trendingContent";

interface props {
    weeklydata: any;
    todayContent: any;
}
function WatchForFree(props: props) {
    let [isSelected, setSelected] = useState(0)
    let [isActiveA, setIsActiveA] = useState(true);
    let [isActiveB, setIsActiveB] = useState(false);
    return (
        <section className="whats-popular-section">
            <div className="free-to-watch">
                <div className="whats-popular-column">
                    <h2 className="whats-popular-h2">Watch For Free</h2>
                    <div className="whats-popular-selector">
                        <div className={isActiveA ? "whats-popular-clicked" : "whats-popular--not-clicked"} onClick={(e) => { setSelected(0); setIsActiveA(true); setIsActiveB(false); }} ><div className="whats-popular-heading">Streaming</div></div>
                        <div className={isActiveB ? "whats-popular-clicked" : "whats-popular--not-clicked"} onClick={(e) => { setSelected(1); setIsActiveA(false); setIsActiveB(true); }}><div className="whats-popular-heading">On TV</div></div>
                    </div>
                </div>
                <div className="trending-scroller">
                    <div >
                        <TrendingContent weeklyData={props.weeklydata} selected={isSelected} todayContent={props.todayContent} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WatchForFree