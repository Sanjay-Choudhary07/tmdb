import React from "react";
import "./ratingpill.css"
import star from "../../../assets/logos/star.svg"
interface Props{
rating:any
}
function RatingPill(props:Props){
return(
    <div className="rating-pill">
        <img className="star-img"src={star}></img>
        {props.rating}
    </div>
)
}
export default RatingPill