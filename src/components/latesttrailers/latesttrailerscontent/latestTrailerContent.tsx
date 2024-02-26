import React from "react";
import Streaming from "../../popular/Streaming";
import LatestTvTrailer from "../latesttv/latestTv";

interface props {
    isSelected: number;
    data: any;
}
function LatestTrailerContent(props: props) {
    if (props.isSelected == 0) {
        return (
            <div className="latest-scroller-div">
                <LatestTvTrailer data={props.data} />
            </div>
        )
    }
    else if (props.isSelected == 1) {
        return (
            <div className="latest-scroller-div">
                <LatestTvTrailer data={props.data} />
            </div>
        )
    }
    else if (props.isSelected == 2) {
        return (
            <div className="latest-scroller-div">
                <LatestTvTrailer data={props.data} />
            </div>
        )
    } else {
        return (
            <div className="latest-scroller-div">
                <LatestTvTrailer data={props.data} />
            </div>
        )
    }
}
export default LatestTrailerContent