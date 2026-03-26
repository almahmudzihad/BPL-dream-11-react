import React, { useState } from 'react';

import Card from '../homepage/Card';

const Availableplayer = ({player, setCoin, coin, setSelectedPlayer, selectedPlayer}) => {
    
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                player.map(player => {
                    return  <Card key={player.playerName} player={player} setCoin={setCoin} coin={coin} setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} />
                })
            }
           
        </div>
    );
};

export default Availableplayer;