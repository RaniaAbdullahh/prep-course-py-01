import {useState, useEffect} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import FavList from "./components/FavList";

function App() {
  const [favoriteList,SetFavList] = useState([]);


const fetchData = async () => {
  try{
    const res = await fetch(`${process.env.REACT_APP_SERVER}/favRecipes`);

    const data = await res.json();
    SetFavList(data);

  }catch (error) {
    console.log("error", error);
  }

}


  useEffect(() => {
    fetchData();
  } , []);
 

  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList favoriteList={favoriteList} />} />
      </Routes>
    </>
  );
}


export default App;
