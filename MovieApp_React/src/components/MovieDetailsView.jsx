import React, {useState} from "react";
import TrailerPlayer from "./TrailerPlayer.jsx";
import MovieCard from "./MovieCard.jsx";
import SimilarsComponent from "./SimilarsComponent.jsx";
const MovieDetailsView = ({movieDetails, setIsLoading, movieTrailer, genres, Similars}) => {
    const [showModal, setShowModal] = useState(false);

    if (!movieDetails || Object.keys(movieDetails).length === 0 || !movieTrailer) {
        return setIsLoading(true);
    }
    console.log(Similars)
    setIsLoading(false);
    return (<div className="MovieDetailsView">
            <div
                className='movie-page-head'
                style={{
                    backgroundImage: `url(${movieDetails.backdrop_path ? `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}` : '/no-movie.png'})`,
                }}>


                <div
                    className='flex flex-col items-center justify-center text-white'>

                    <div className='w-full flex justify-center gap-9'>
                        <p className='release-date'>
                            {movieDetails.release_date ? movieDetails.release_date.split('-')[0] : 'N/A'}
                        </p>
                        <p className='font-black text-red-900 text-xl uppercase hidden sm:text-3xl sm:block'>
                            {genres ? genres.join(' • ') : 'N/A'}
                        </p>
                    </div>

                    <div className='flex flex-col justify-center text-center items-center w-full gap-10'>
                        <h3 className='text-[min(10vw,70px)]  font-extrabold'>{movieDetails.title} </h3>

                        <div className='watch_trailer'>
                            <button onClick={() => setShowModal(true)}>
                                <img src="play-button.svg" alt=""/>Watch Trailer
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <SimilarsComponent Similars={Similars} />
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center content-center bg-black/80">
                    <div
                        className="relative w-full max-w-6xl h-full flex flex-col content-center justify-center items-center px-4">
                        <button
                            onClick={() => setShowModal(false)}
                            className="self-end px-2 text-white text-[60px] font-bold hover:text-red-500 z-10"
                        >
                            &times;
                        </button>

                        <div
                            className="w-full h-auto items-center justify-center aspect-video bg-black rounded-lg overflow-hidden">
                            <TrailerPlayer videoId={movieTrailer}/>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}
export default MovieDetailsView;