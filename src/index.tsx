import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MovieDetails from './components/moviedetails/movieDetails';
import SeeMore from './components/moviedetails/herosection/credits/seemore/seemore';
import AllReviews from './components/moviedetails/allreviews/allReviews';
import RecoMovieDetails from './components/recomendedmoviecard/recomendedMovieCard';
import SeriesDetails from './components/discover/seriescard/series';
const router=createBrowserRouter(
  [{
    path:"/",
    element:<App/>
  },{
    path:`/movies/:moviename/:movieId`,
    element:<MovieDetails/>
  },
{
  path:`/people/:cast`,
  element:<SeeMore/>
},{
  path:`/movies/:moviename/:movieId/review/:id`,
  element:<AllReviews/>
},{
  path:"/movies/:moviename/:movieId/recomendations/:recomendedMovieName/:recomendedMovieId",
  element:<RecoMovieDetails/>
},{
  path:`/series/:seriesname/:seriesId`,
  element:<SeriesDetails/>
}]
   
  
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);

reportWebVitals();