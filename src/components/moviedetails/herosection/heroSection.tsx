import React from "react";
import "./heroSection.css"
import Genre from "../genre/genre";
import PosterImage from "./posterimage/posterImage";
import { time } from "../time/time";
import Action from "./actions/action";
import Credits from "./credits/credits";
import { requestOptions } from "../../../module/weeklyDataModel";
import { getMajorityColor } from "../imagecolor";
import { releaseDate } from "../releasedate";



interface props {
    data: any
}

function HeroSection(props: props) {
// console.log(props.data)
const releaseYear=releaseDate(props.data.release_date)
    if (props.data) {
        document.title=`${props.data.original_title || props.data } (${releaseYear})`
        return (

            // <div className="backdrop_image" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.data.backdrop_path})`}}>
            <div className="backdrop-image-div">
                  <div className="backdrop_image"  style={{background:`linear-gradient(to right, rgba(32,11,11,.84) calc((50vw - 170px) - 340px), rgba(32,11,11,.84) 50%, rgba(32,11,11,.84) 50%),url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.data.backdrop_path})` ,backgroundSize: "cover" ,backgroundPosition: "center"}}>
                <div className="inner-hero-section">
                    <PosterImage data={props.data?.poster_path} />
                    <div className="right-section">
                        <div className="outer-movie-details-div">
                            <div className="movie-details">
                                <h2 className="movie-title-herosection">{props.data.original_title || props.data}<span><h2 className="release-year">({releaseYear})</h2></span></h2>
                                    <div className="metrics">
                                    <div className="certification metric-data">{props.data.adult ? "A" : "UA"}</div>
                                    <div className="seperator">.</div>
                                    <div className="metric-data">{props.data.release_date}</div>
                                    <div className="seperator">.</div>
                                    <Genre data={props.data.genres} />
                                    <div className="seperator">.</div>
                                    <div className="metric-data">{time(props.data.runtime)}</div>
                                </div>
                                <Action data={props.data.id} vote={props.data}/>
                                <div>
                                    <i className="tagline">{props.data.tagline}</i>
                                    <h3 className="overview">Overview</h3>
                                    <div>
                                        {props.data.overview}
                                    </div>
                                </div>
                                <div className="credits">
                                    <Credits data={props.data.id} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            </div>
          


        )
    }
    else {
        // return (
        //     <div>

        //     </div>
        // )
        return null;
    }

}

export default HeroSection