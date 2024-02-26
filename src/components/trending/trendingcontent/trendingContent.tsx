import MovieCard from "../../discover/moviecard/movieCard";
import { todayContent } from "../../../module/todayContentModule";

import { data, weeklyContent } from "../../../module/weeklyDataModel";
interface Props {
    selected: number,
    weeklyData: weeklyContent | undefined
    todayContent: todayContent | undefined
}
function TrendingContent(props: Props): any {
    // if (props.selected == 1) {
    //     return (
    //         <MovieCard data={props.weeklyData} />
    //     )
    // } else if (props.selected == 0) {
    //     return (
    //         <MovieCard data={props.todayContent} />
    //     )
    // }
    // else if (props.selected == 2) {
    //     return (
    //         <MovieCard data={props.todayContent} />
    //     )
    // }
    // else if (props.selected == 3) {
    //     return (
    //         <MovieCard data={props.todayContent} />
    //     )
    // }
    // else {
    //     return (<div>
    //         loading
    //     </div>)
    // }
    let contentToRender = <div>Loading...</div>; // Default content

    switch (props.selected) {
        case 1:
            contentToRender = props.weeklyData ? <MovieCard data={props.weeklyData} /> : <div>No data available</div>;
            break;
        case 0:
        case 2:
        case 3:
            contentToRender = props.todayContent ? <MovieCard data={props.todayContent} /> : <div>No data available</div>;
            break;
        default:
            break;
    }

    return contentToRender;
}
export default TrendingContent;