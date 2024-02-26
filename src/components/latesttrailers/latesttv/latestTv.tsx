import React, { useEffect, useState } from "react";
import Trailer from "../../moviedetails/trailer/trailer";
import { requestOptions } from "../../../module/todayContentModule";
import OnlyTrailer from "./onlyTrailer";

interface props {
    data: any
}
function LatestTvTrailer(props: props): any {
    if (props.data) {
        return (
            props.data.results.map((eachTrailerId: any) => {
                return (
                    <OnlyTrailer data={eachTrailerId} />
                )
            })
        )
    }
    
}
export default LatestTvTrailer;