
import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/homepage/Banner";
import Player from "./component/homepage/player/Player";
import Navbar from "./component/navbar/Navbar";

const fatchPlayer = async() => {
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const playerPromis = fatchPlayer();
  const [coin, setCoin] = useState(10000000);

  return (
    <>
     <Navbar coin={coin}></Navbar>
     <Banner/>
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
       <Player playerPromis={playerPromis} setCoin={setCoin} coin={coin}></Player>

     </Suspense>
      
    </>
  );
}

export default App;
