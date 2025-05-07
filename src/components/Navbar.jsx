import React from 'react'
import MovieDetailsView from "./MovieDetailsView.jsx";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const homeClick = () => {
        navigate(`/`);
    }
    const infoClick = () => {
        navigate(`/info`);
    }
    return (
        <div className='flex justify-center w-full z-100 fixed py-3 pb-5 bottom-0 sm:bottom-auto sm:top-0'>
            <div className='bg-black/80 flex flex-row gap-5 p-2 rounded-2xl '>
                <button className='text-white' onClick={() => homeClick()}>
                    <img className='w-[35px]' src="home.svg" alt='Home' />
                </button>
                <img className='w-[35px]' src="logo.svg" alt="logo" />
                <button className='text-white' onClick={() => infoClick()}>
                    <img className='w-[35px]' src="info.svg" alt='Home' />
                </button>

            </div>

        </div>
    )
}
export default Navbar
