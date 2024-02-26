import React from "react";
import { requestOptions } from "../../module/todayContentModule";
import { useState } from "react";
import MovieCard from "../discover/moviecard/movieCard";
import { TodayContent } from "../../network/network";

function Streaming() {
    const [streamingData, setStreamingData] = useState<any>()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2ZmNDgxZGNjMzYzMTZkNmRiMDA5NTk2YjNkOWNiZiIsInN1YiI6IjY1YzIwMzcyOTU5MGUzMDEyZWIxNGFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1ZDLgsM-Rc2nRp49-wY961c4ZHteYJRPo3Ba7LiYNw");
    myHeaders.append("accept", "application/json");

    var requestOptions: requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.themoviedb.org/3/tv/popular", requestOptions)
        .then(response => response.json())
        .then(result => setStreamingData(result))

    if (streamingData) {
        return (
            <div>
                <MovieCard data={streamingData} />
            </div>
        )
    } else {
        return (
            <div>
                none
            </div>
        )
    }
}
export default Streaming;