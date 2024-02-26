import React, { useEffect } from "react";
import { useState } from "react";
import { requestOptions } from "../../module/todayContentModule";
interface props{
    id:any
}

function PlayTrailer(props:props):any{
    let[key,setKey]=useState<any>()
    useEffect(()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2ZmNDgxZGNjMzYzMTZkNmRiMDA5NTk2YjNkOWNiZiIsInN1YiI6IjY1YzIwMzcyOTU5MGUzMDEyZWIxNGFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1ZDLgsM-Rc2nRp49-wY961c4ZHteYJRPo3Ba7LiYNw");
        myHeaders.append("accept", "application/json");
        
        var requestOptions :requestOptions= {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch(`https://api.themoviedb.org/3/movie/${props.id}/videos?key=63ff481dcc36316d6db009596b3d9cbf`, requestOptions)
          .then(response => response.json())
          .then(result => setKey(result))
          .catch(error => console.log('error', error));
      },[])
    

//    if(key){
//     key.results.map((eachTrailer:any)=>{
//            if(key){
//     return(
//         <div>
//  <iframe className="position-trailer-box"width="1080" height="607"src={`https://www.youtube.com/embed/${key.results[0].key}?autoplay=1`}></iframe>
//         </div>
//     )
//    }
//     })
//     return(
//         <div>
//  <iframe className="position-trailer-box"width="1080" height="607"src={`https://www.youtube.com/embed/${key.results[0].key}?autoplay=1`}></iframe>
//         </div>
//     )
//    }

let keyVideo;
if(key){
    key.results.map((eachmovie:any)=>{
        if(eachmovie.name=="Official Trailer" || eachmovie.type=="Trailer" ||eachmovie.official){
           
               return(
                keyVideo=eachmovie.key
               )
            
        }
        })
            return (
               <div className="trailer-frame">
                <div className="trailer-title">Play Trailer</div>
                <iframe className="position-trailer-box"width="1080"  height="620"src={`https://www.youtube.com/embed/${keyVideo}`}></iframe>
               </div>
                
            )
         
}else{
    return(
        <div></div>
    )
}


}
export default PlayTrailer