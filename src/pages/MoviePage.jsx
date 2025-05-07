import React, {Fragment, useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom";
import app from "./App.jsx";
import {API_BASE_URL, API_OPTIONS} from '../apiConfig.js';
import MovieDetailsView from "../components/MovieDetailsView";
import Spinner from "../components/Spinner.jsx";
import Navbar from "../components/Navbar.jsx";


const MoviePage = () => {
    const [searchParams] = useSearchParams();
    const movie_id = searchParams.get("movie_id");
    const [isLoading, setIsLoading] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [trailerKey, setTrailerKey] = useState('');
    const [genres, setGenres] = useState([])
    const [Similars, setSimilars] = useState([])

    const fetchMovieDetails = async () => {
        if (!movie_id) return;
        setIsLoading(true);
        try {
            const MovieDetailResponse = await fetch(`${API_BASE_URL}/movie/${movie_id}`, API_OPTIONS);
            const responseTrailer = await fetch(`${API_BASE_URL}/movie/${movie_id}/videos?language=en-US`, API_OPTIONS);

            if (!MovieDetailResponse.ok || !responseTrailer.ok) {
                throw new Error('failed');
            }
            const movieDetailsData = await MovieDetailResponse.json();
            const dataTrailer = await responseTrailer.json();
            if (movieDetailsData.response === false) {
                setErrorMessage(movieDetailsData.Error || 'failed to fetch movie details');
                setMovieDetails([]);
                setIsLoading(false);
                return;
            }
            //Pegando o trailer na Array de vídeos retornados
            const trailer = dataTrailer.results.find(video =>
                video.type === "Trailer" && video.site === "YouTube" && video.official
            );
            const fallbackTrailer = dataTrailer.results.find(video =>
                video.type === "Trailer" && video.site === "YouTube"
            );

            setTrailerKey(trailer.key || fallbackTrailer.key || []);
            setMovieDetails(movieDetailsData);
            setIsLoading(false);

        }catch (error) {
            console.error(error);
        }
    }
    const fetchGenre = async (movieDetails) => {
        try {
            const genreResponse = await fetch(`${API_BASE_URL}/genre/movie/list?language=en`, API_OPTIONS);
            const genreData = await genreResponse.json();
            const movieGenresId = movieDetails.genres.map((genre) => genre.id)
            const movieGenres = genreData.genres.filter((genre) => movieGenresId.includes(genre.id));
            setGenres(movieGenres.map((genre) => genre.name));

        } catch (error) {
            console.error(error);
        }
    };
    const fetchSimilars = async () =>{
        try {
            const similarResponse = await fetch(`${API_BASE_URL}/movie/${movie_id}/similar?language=en-US&page=1`, API_OPTIONS);
            const similarData = await similarResponse.json();
            setSimilars(similarData.results);
            console.log(similarData.results);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchMovieDetails(), fetchSimilars();
    }, [movie_id]);

    useEffect(() => {
        fetchGenre(movieDetails);
    }, [movieDetails]);

    useEffect(() => {
        let timeout;
        if (isLoading) {
            timeout = setTimeout(() => {
                setErrorMessage("O carregamento demorou demais. As informações deste filme podem estar indisponíveis.");
                setIsLoading(false);
            }, 10000); // 10 segundos
        }
        return () => clearTimeout(timeout); // limpa o timeout se carregar a tempo
    }, [isLoading]);


    return (
        <div>
            <Navbar />
            {isLoading ? (
                <Spinner />
            ) : errorMessage ? (
               <div className='flex sm:flex-row flex-col h-svh sm:mx-20 justify-center content-center items-center'>
                   <img className='sm:w-[1000px]' src="confusedcat.png" alt="confusedcatimg"/>
                   <p className='text-red-900 font-extralight text-center sm:text-5xl'>{errorMessage}</p>
               </div>


            ) : (
                <MovieDetailsView
                    movieDetails={movieDetails}
                    setIsLoading={setIsLoading}
                    movieTrailer={trailerKey}
                    genres={genres}
                    Similars = {Similars}
                />

            )}
        </div>

    )
}
export default MoviePage;