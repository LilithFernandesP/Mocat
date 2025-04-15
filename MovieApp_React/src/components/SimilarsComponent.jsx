import React from 'react'
import MovieCard from "./MovieCard.jsx";

const Similars = ({Similars}) => {
    return (
        <div className='wrapper pt-0'>
            <div className='all-movies'>
                <h2>Other like this</h2>
                <ul>
                    {Similars.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Similars
