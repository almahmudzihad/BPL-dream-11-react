import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { TiFlag } from "react-icons/ti";
import { toast } from 'react-toastify';

const Card = ({player , setCoin, coin, setSelectedPlayer, selectedPlayer}) => {
   const [isSelected, setIsSelected] = useState(false);
   const handelChoosPlayer = () =>{
    let newCoin = coin - player.rate;
    if(newCoin > 0){
        setCoin(coin - player.rate);
    }else{
        toast.error("Not ecough coin to purchase")
        return;
    }
    
    toast.success(`${player.playerName} is Seleceted`);
    // toast("Wow so easy!");
    setIsSelected(true); 
    setSelectedPlayer([...selectedPlayer, player]);

    
    
   }
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <img className='w-full h-64 object-cover'
                    src={player.playerImg}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><FaUser />{player.playerName}</h2>
                
                    <div className='flex justify-between gap-2 items-center'>
                        <div className='flex gap-2 items-center'>
                            <TiFlag />
                        <p>{player.playerCountry}</p>
                        </div>
                        
                        <button className='btn'>{player.playerType}</button>
                    </div>
                    <div className="divider"></div>
                    <h2 className='font-bold'>Rating {player.rating}</h2>
                    <div className='flex justify-between gap-2 font-bold'>
                        <p>{player.batingStyle}</p>
                        <p className='text-right'>{player.blowingStyle}</p>
                        
                    </div>
                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>Price: ${player.rate}</p>
                        <button
                        className="btn" onClick={handelChoosPlayer} disabled={isSelected}
                        >{isSelected ? "Selected": "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;