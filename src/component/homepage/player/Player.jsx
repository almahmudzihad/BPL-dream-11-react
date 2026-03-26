import React, { use, useState } from 'react';
import Availableplayer from '../../availablePlayer/Availableplayer';
import SelectedPlayer from "../../availablePlayer/selectedPlayer/SelectedPlayer"



const Player = ({playerPromis, setCoin, coin}) => {
    
    const player = use(playerPromis);
    const [selectType, setSelectType] = useState('available');
    const [selectedPlayer, setSelectedPlayer] = useState([]);
   
    return (
        <div className='container mx-auto my-12'>
            <div className='flex justify-between items-center mb-8'>
                {
                    selectType === "available" ? <h2 className='font-bold text-3xl'> Avilabel Players</h2> : <h2 className='font-bold text-3xl'> Select Players({selectedPlayer.length} / {player.length})</h2> 
                }
                
                <div>
                    <button 
                    onClick={()=>setSelectType('available')}
                    className={`btn ${ selectType === 'available' ? 'bg-[#e7fe29]': ' '} rounded-r-none rounded-l-xl`}>Avilabel</button>
                    <button 
                    onClick={()=>setSelectType('select')}
                    className={`btn ${selectType === 'select' ? 'bg-[#e7fe29]': ' '} rounded-l-none rounded-r-xl`}>Selected {selectedPlayer.length}</button>
                </div>
            </div>

                {
                    selectType === "available"? 
                    <Availableplayer 
                    player={player} 
                    setCoin={setCoin} 
                    coin={coin} 
                    setSelectedPlayer={setSelectedPlayer} 
                    selectedPlayer={selectedPlayer} 
                    /> 
                    :
                     <SelectedPlayer 
                     selectedPlayer={selectedPlayer} 
                     setSelectedPlayer={setSelectedPlayer}
                     setCoin={setCoin} 
                     coin={coin}  
                     />
                }
                


           

        </div>
    );
};

export default Player;