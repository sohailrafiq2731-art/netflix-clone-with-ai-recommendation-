import {Bookmark, Play} from 'lucide-react'
import HeroBg from '../assets/herobg2.png'
import { useEffect, useState } from 'react';

const Hero = () => {
const [movies, setMovies] = useState(null);

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzI5OTkzOWYzMDEzYzA0MjhjMzFjYTE1OWE2ZGNmNyIsIm5iZiI6MTc2ODE1NDgwNC4wOTc5OTk4LCJzdWIiOiI2OTYzZTZiNDU1MjZhMzNlMTU1OTZlYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Yk74pczsBwB3DMiiAyxNao95Bc5km1pU38Mq1Wd8TDc'
  }
};

useEffect(() => {
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then((res) => res.json())
    .then((res) => {
      if(res.results && res.results.length > 0){
        const randomIndex = Math.floor(Math.random() * res.results.length);
        setMovies(res.results[randomIndex]);
      }
    })
    .catch((err) => console.error(err));
},[])

if(!movies){
  return<p>Loading...</p>
}

  return (
    <div className='text-white relative'>
        <img src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} 
        alt="HeroBg"
         className="w-full rounded-2xl h-[480px] object-[center_25%] object-cover" />

         <div className='flex space-x-2 md:space-x-4 absolute bottom-3 left-4 md:bottom-8 md:left-10 font-medium'>
            <button className='flex justify-center items-center bg-white hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base'>
                <Bookmark className='mr-2 w-4 h-5 md:w-5 md:h-5'/>Save for Later</button>
            <button className='flex justify-center items-center bg-[#e50914] hover:bg-gray-200 text-white py-3 px-4 rounded-full cursor-pointer text-sm md:text-base'>
                <Play className='mr-2 w-4 h-5 md:w-5 md:h-5'/>Watch Now</button>
         </div>
    </div>
  )
}

export default Hero