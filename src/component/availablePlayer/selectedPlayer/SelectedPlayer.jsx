import React from 'react';
import { AiFillDelete  } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const SelectedPlayer = ({selectedPlayer, setSelectedPlayer, setCoin, coin}) => {
    console.log(selectedPlayer);
    const handelDeleteSelectedPlayer = (player) =>{
        console.log(selectedPlayer, "selectedPlayersssss")
        const filteredPlayer = selectedPlayer.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
        console.log(filteredPlayer, "filterPlayerNamam")
        setSelectedPlayer(filteredPlayer);
        setCoin(coin + player.rate)

    }
    return (
        <div>
            {
                selectedPlayer.map((player, ind )=>{
                    return (
                        <div key={ind} className='flex items-center gap-2 justify-between p-10 rounded-xl border m-6'>
                            <div className='flex items-center gap-6'>
                                <img src={player.playerImg} alt=""  className='w-[75px] rounded-md'/>
                                <div>
                                    <h2 className='flex items-center gap-2 font-semibold text-xl pb-2'><FaUser />{player.playerName}</h2>
                                    <p className='font-semibold '>{player.playerType}</p>
                                </div>
                            </div>
                            <button 
                            className='btn text-red-500' 
                            onClick={()=>handelDeleteSelectedPlayer(player)}>
                                <AiFillDelete />
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayer;