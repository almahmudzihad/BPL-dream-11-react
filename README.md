# React + Vite
# Taiwind css
# npm i react-toastify


***  App.jsx component
import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/homepage/Banner";
import Player from "./component/homepage/player/Player";
import Navbar from "./component/navbar/Navbar";
import { ToastContainer } from 'react-toastify';

const fatchPlayer = async() => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const playerPromis = fatchPlayer();
  const [coin, setCoin] = useState(1000000);

  return (
    <>
     <Navbar coin={coin}></Navbar>
     <Banner/>
     <Suspense fallback={<span className="loading loading-dots loading-xl "></span>}>
       <Player playerPromis={playerPromis} setCoin={setCoin} coin={coin}></Player>

     </Suspense>

     <ToastContainer />
      
    </>
  );
}

export default App;



# live link
https://bpl-drem-11-zihad.netlify.app/