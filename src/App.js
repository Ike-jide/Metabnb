import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Mainpage/Home/Home';
import Placetostay from './components/Placetostay/Place-to-stay';




const metas = [
  {
    id: "e1",
    image: "./images/game-icon/Frame 151 (1).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e2",
    image: "./images/game-icon/Frame 151 (2).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e3",
    image: "./images/game-icon/Frame 151 (3).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e4",
    image: "./images/game-icon/Frame 151 (4).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e5",
    image: "./images/game-icon/Frame 151 (5).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e6",
    image: "./images/game-icon/Frame 151 (6).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e7",
    image: "./images/game-icon/Frame 151.png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e8",
    image: "./images/game-icon/Frame 151 (7).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },{
    id: "e9",
    image: "./images/game-icon/Frame 151 (8).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e10",
    image: "./images/game-icon/Frame 151 (9).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e11",
    image: "./images/game-icon/Frame 151 (10).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e12",
    image: "./images/game-icon/Frame 151 (11).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e13",
    image: "./images/game-icon/Frame 151 (12).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e14",
    image: "./images/game-icon/Frame 151 (13).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e15",
    image: "./images/game-icon/Frame 151 (14).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  },
  {
    id: "e16",
    image: "./images/game-icon/Frame 151 (15).png",
    title: "Desert king",
    space: "1MBT per night",
    distance: "2345km away",
    availability: "available for 2weeks stay",
  }
  
];

function App() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home metas={metas}/>}/>
      <Route path='/Place-to-stay' element={<Placetostay metas={metas}/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
