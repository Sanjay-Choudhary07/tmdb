import React from "react";
import "./whatspopular.css"
import { useState } from "react";
import TrendingContent from "../trending/trendingcontent/trendingContent";

interface props {
    weeklydata: any;
    todayContent: any;
}
function WhatsPopular(props: props) {
    let [isSelected, setSelected] = useState(0)
    let [isActiveA, setIsActiveA] = useState(true);
    let [isActiveB, setIsActiveB] = useState(false);
    let [isActiveC, setIsActiveC] = useState(false);
    let [isActiveD, setIsActiveD] = useState(false);
    return (
        <section className="whats-popular-section">
            <div className="whats-popular">
                <div className="whats-popular-column">
                    <h2 className="whats-popular-h2">Whats Popular</h2>
                    <div className="whats-popular-selector">
                        <div className={isActiveA ? "whats-popular-clicked" : "whats-popular--not-clicked"} onClick={(e) => { setSelected(1); setIsActiveA(true); setIsActiveB(false); setIsActiveC(false); setIsActiveD(false); }} ><div className="whats-popular-heading">Streaming</div></div>
                        <div className={isActiveB ? "whats-popular-clicked" : "whats-popular--not-clicked"} onClick={(e) => { setSelected(0); setIsActiveA(false); setIsActiveB(true); setIsActiveC(false); setIsActiveD(false); }}><div className="whats-popular-heading">On TV</div></div>
                        <div className={isActiveC ? "whats-popular-clicked" : "whats-popular--not-clicked"} onClick={(e) => { setSelected(2); setIsActiveA(false); setIsActiveB(false); setIsActiveC(true); setIsActiveD(false); }} ><div className="whats-popular-heading">For Rent</div></div>
                        <div className={isActiveD ? "whats-popular-clicked" : "whats-popular--not-clicked"} onClick={(e) => { setSelected(3); setIsActiveA(false); setIsActiveB(false); setIsActiveC(false); setIsActiveD(true); }}><div className="whats-popular-heading">In Theatres</div></div>
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
export default WhatsPopular;