import React from 'react'
import MovieCard from "./MovieCard.jsx";

const SimilarsComponent = ({Similars}) => {
    return (
        <div className='w-full px-5 py-12 xs:p-10 xs:px-40 flex flex-col z-10'>
            <div className='all-movies '>
                <h2>Other like this</h2>
                {Similars.length > 0 ?(
                <div className='overflow-x-auto overflow-hidden  no-scrollbar  px-2'>
                <ul className='flex gap-4 overflow-hidden overflow-x-auto w-max no-scrollbar px-4'>

                        {
                            Similars.map((movie) => (
                               <li key={movie.id} className='flex-shrink-0 w-48'>  <MovieCard movie={movie}/></li>
                            ))
                        }
                </ul>
                </div>)
                    : (<p className='text-rust '>Can't find any for this movie</p>)
                }
            </div>
        </div>
    )
}
export default SimilarsComponent
