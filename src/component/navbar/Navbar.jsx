import React from 'react';
import iconImg from '../../assets/icon-png.webp';

const Navbar = ({coin}) => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                <button className="flex justify-between items-center gap-2 font-bold text-xl">
                   {coin} Coins
                   <img className='w-6' src={iconImg} alt="" />
                   
                </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;