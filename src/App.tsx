import React from 'react';
import logo from './logo.svg';
import {useState, useEffect } from 'react';
import Discover from './components/discover/discover';
import './App.css';
import Trending from './components/trending/trending';
import Header from './components/header/header';
import { WeeklyContent } from './network/network';
import { TodayContent } from './network/network';
import Footer from './components/footer/footer';
import trendingBackGroundImage from "./assets/logos/trendingbackground.svg"
import LatestTrailers from './components/latesttrailers/latestTrailers';
import WhatsPopular from './components/whatspopular/whatsPopular';
import WatchForFree from './components/watchforfree/watchForFree';

function App() {
const trending=WeeklyContent();
const todayContent=TodayContent()

  return (
    <div className="App" >
      <div className='bodyWrapper'>
        <Header />
        <div className='body'  >
        <Discover data={trending} />
        <Trending weeklydata={trending} todayContent={todayContent}/>
        <LatestTrailers data={todayContent}/>
        <WhatsPopular weeklydata={trending} todayContent={todayContent}/>
        <WatchForFree weeklydata={trending} todayContent={todayContent}/>
        </div>
       <Footer/>
      </div>
    </div>
  );
}
export default App;