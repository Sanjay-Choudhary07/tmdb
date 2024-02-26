import React, { useEffect, useState } from "react";
import "./action.css"
import Choice from "./choices/choice";
import Trailer from "../../trailer/trailer";
import { requestOptions } from "../../../../module/todayContentModule";
import { JsxElement } from "typescript";
import UserScoreDetailsPage from "../../userscoreDetailPage/userScoreDetail";

import playbutton from "../../../../assets/logos/playicon.svg"
import list from "../../../../assets/logos/bullet_list.png"
import like from "../../../../assets/logos/heart.svg"
import save from "../../../../assets/logos/bookmark.svg"
import star from "../../../../assets/logos/star.svg"
import UserScore from "../../../userscore/userScore";
interface props {
    data: any
    vote: any
}



function Action(props: props) {


    const [showVideo, setShowVideo] = useState(false)
    const [res, setData] = useState({})

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
    myHeaders.append("accept", "application/json");

    var requestOptions: requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://api.themoviedb.org/3/movie/${props.data}/videos?language=en-US&=858e15de9492d5090a05cffb61809d40`, requestOptions)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(error => error);

    function isShowing() {
        setShowVideo(!showVideo)
    }
 
    return (
        <div className="action">
            {/* <div className="user-score"><UserScore movie={props.vote}/></div> */}
            <div className="user-score-div">
            <UserScoreDetailsPage movie={props.vote}/>
            <h2 className="user-score-title">User <br></br>Score</h2>
            </div>
         
            <Choice data={list} />
            <Choice data={like} />
            <Choice data={save} />
            <div className="choice">
                <img className="choice-icons-star" src={star}></img>
            </div>
            <div>
                <div onClick={isShowing} className="play-trailer">
                    <div className="play-trailer-div">
                        <img className="play-trailer-icon" src={playbutton}></img>
                        <div className="play-trailer">Play Trailer</div>
                    </div>

                </div>
            </div>

            {showVideo && <Trailer data={res} />}
        </div>
    )
}

export default Action