import React, { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../services/GlobalAPI';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

function MovieList({ genreId, index_ }) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);
    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalAPI.getMovieGenreId(genreId).then(resp => {
            setMovieList(resp.data.results);
        })
    }
    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    }
    const sliderRight = (element) => {
        element.scrollLeft += 500;
    }
    return (
        <>
            <div className='relative'>
                <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)} className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`} />

                <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5'>
                    {movieList.map((movie, index) => (
                        <>
                            {index_ % 3 == 0 ? <HrMovieCard movie={movie}/> : <MovieCard movie={movie} />}
                        </>
                    ))} 
                </div>
                <IoChevronForwardOutline onClick={() => sliderRight(elementRef.current)} className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${index_ % 3 == 0 ? 'mt-[80px]' : 'mt-[150px]'}`} />
            </div>
        </>
    )
}

export default MovieList