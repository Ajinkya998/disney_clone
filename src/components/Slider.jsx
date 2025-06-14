import React, { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../services/GlobalAPI'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

function Slider() {
    const [trendingVideos, setTrendingVideos] = useState([]);
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
    const elementRef = useRef();
    const screenWidth = window.innerWidth;

    useEffect(() => {
        getTrendingVideos();
    }, [])
    const getTrendingVideos = () => {
        GlobalAPI.getTrendingVideos.then((resp) => {
            console.log(resp.data.results);
            setTrendingVideos(resp.data.results);
        })
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    }
    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    }
    return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer opacity-0 hover:opacity-100' onClick={() => sliderLeft(elementRef.current)} />
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer opacity-0 hover:opacity-100 right-0' onClick={() => sliderRight(elementRef.current)} />
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
                {trendingVideos.map((item) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' alt="" />
                ))}
            </div>
        </div>
    )
}

export default Slider