import {useState, useEffect } from "react";
import { todayContent } from "../module/todayContentModule";
import { requestOptions } from "../module/todayContentModule";


export function WeeklyContent(){
    let [trending, setTrending]= useState()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2ZmNDgxZGNjMzYzMTZkNmRiMDA5NTk2YjNkOWNiZiIsInN1YiI6IjY1YzIwMzcyOTU5MGUzMDEyZWIxNGFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1ZDLgsM-Rc2nRp49-wY961c4ZHteYJRPo3Ba7LiYNw");
    myHeaders.append("accept", "application/json");    
    var requestOptions: requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=63ff481dcc36316d6db009596b3d9cbf", requestOptions)
        .then(response => response.json())
        .then(result => { setTrending(result) })
        .catch(error => console.log('error', error));
    }, []);
return trending;
}

export function TodayContent(){
let [todayContent, setTodayContent] = useState<todayContent>()
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2ZmNDgxZGNjMzYzMTZkNmRiMDA5NTk2YjNkOWNiZiIsInN1YiI6IjY1YzIwMzcyOTU5MGUzMDEyZWIxNGFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1ZDLgsM-Rc2nRp49-wY961c4ZHteYJRPo3Ba7LiYNw");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=63ff481dcc36316d6db009596b3d9cbf", requestOptions)
  .then(response => response.json())
  .then(result => setTodayContent(result))
  .catch(error => console.log('error', error));
return todayContent

}

export function MovieDetails(movieId:any):any{

let [movieDetails,setMovieDetails]=useState()
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2ZmNDgxZGNjMzYzMTZkNmRiMDA5NTk2YjNkOWNiZiIsInN1YiI6IjY1YzIwMzcyOTU5MGUzMDEyZWIxNGFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1ZDLgsM-Rc2nRp49-wY961c4ZHteYJRPo3Ba7LiYNw");
myHeaders.append("accept", "application/json");

var requestOptions :requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&key=63ff481dcc36316d6db009596b3d9cbf`, requestOptions)
  .then(response => response.json())
  .then(result => setMovieDetails(result))
  .catch(error => console.log('error', error));
  return console.log(movieDetails)
}

export function Keywords(id:any){
  const[keywords,setKeywords]=useState()
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2ZmNDgxZGNjMzYzMTZkNmRiMDA5NTk2YjNkOWNiZiIsInN1YiI6IjY1YzIwMzcyOTU5MGUzMDEyZWIxNGFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1ZDLgsM-Rc2nRp49-wY961c4ZHteYJRPo3Ba7LiYNweyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2ZmNDgxZGNjMzYzMTZkNmRiMDA5NTk2YjNkOWNiZiIsInN1YiI6IjY1YzIwMzcyOTU5MGUzMDEyZWIxNGFiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1ZDLgsM-Rc2nRp49-wY961c4ZHteYJRPo3Ba7LiYNw");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${id}/keywords`, requestOptions)
  .then(response => response.json())
  .then(result => setKeywords(result))
  .catch(error => console.log('error', error));

  return keywords
}