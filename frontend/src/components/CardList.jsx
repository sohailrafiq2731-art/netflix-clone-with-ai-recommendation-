

import React, { useEffect,useState } from 'react'
import CardImg from '../assets/card_img.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Link } from 'react-router-dom'

const CardList = ({ title, category }) => {
    const [data, setData] = useState([]);
   const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzI5OTkzOWYzMDEzYzA0MjhjMzFjYTE1OWE2ZGNmNyIsIm5iZiI6MTc2ODE1NDgwNC4wOTc5OTk4LCJzdWIiOiI2OTYzZTZiNDU1MjZhMzNlMTU1OTZlYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Yk74pczsBwB3DMiiAyxNao95Bc5km1pU38Mq1Wd8TDc'
  }
};
useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
    .then((res) => res.json())
    .then((res) => setData(res.results))
    .catch((err) => console.error(err));
}, [category]);


    console.log("Title:", title,"Category:", category);

  return (
    <div className="text-white md:px-4">
         <h2 className="pt-10 pb-5 text-lg font-medium">
            {title}
         </h2>
         <Swiper slidesPerView={"auto"} spaceBetween={10} className='mySwiper'>
         {data.map((item, index) => (
            <SwiperSlide key={index} className='max-w-72'>
                <Link to={`/movie/${item.id}`}>
               
                <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} 
                alt=" "
                className="w-full h-44 rounded object-center object-cover"/>
                <p className="text-center pt-2">{item.title}</p>
                 </Link>
            </SwiperSlide>
         ))}
        </Swiper>
    </div>
  )
}

export default CardList










// import React, { useEffect, useState, useRef } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation } from 'swiper'
// import 'swiper/css'
// import 'swiper/css/navigation'

// const CardList = ({ title, category }) => {
//     const [movies, setMovies] = useState([])
//     const swiperRef = useRef(null)

//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzI5OTkzOWYzMDEzYzA0MjhjMzFjYTE1OWE2ZGNmNyIsIm5iZiI6MTc2ODE1NDgwNC4wOTc5OTk4LCJzdWIiOiI2OTYzZTZiNDU1MjZhMzNlMTU1OTZlYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Yk74pczsBwB3DMiiAyxNao95Bc5km1pU38Mq1Wd8TDc'
//         }
//     }

//     useEffect(() => {
//         fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
//             .then(res => res.json())
//             .then(data => {
//                 if (data.results) setMovies(data.results)
//             })
//             .catch(err => console.error(err))
//     }, [category])

//     if (movies.length === 0) return <p className="text-white pt-10">Loading {title}...</p>

//     return (
//         <div className="text-white md:px-4 relative">
//             <h2 className="pt-10 pb-5 text-lg font-medium">{title}</h2>

//             {/* Arrow Buttons */}
//             <button
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
//                 onClick={() => swiperRef.current?.slidePrev()}
//             >
//                 &#8592;
//             </button>
//             <button
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
//                 onClick={() => swiperRef.current?.slideNext()}
//             >
//                 &#8594;
//             </button>

//             <Swiper
//                 slidesPerView={'auto'}
//                 spaceBetween={10}
//                 modules={[Navigation]}
//                 navigation={true}
//                 className="mySwiper"
//                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//             >
//                 {movies.map((item) => (
//                     <SwiperSlide
//                         key={item.id}
//                         className="max-w-[180px] transition-transform duration-300 hover:scale-105 cursor-pointer"
//                     >
//                         <img
//                             src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
//                             alt={item.title}
//                             className="w-full h-44 rounded object-center object-cover"
//                         />
//                         <p className="text-center pt-2">{item.title}</p>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     )
// }

// export default CardList








// import React from 'react'
// import { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'


// const CardList = ({ title, category }) => {
//     const [data, setData] = useState([]);
//    const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzI5OTkzOWYzMDEzYzA0MjhjMzFjYTE1OWE2ZGNmNyIsIm5iZiI6MTc2ODE1NDgwNC4wOTc5OTk4LCJzdWIiOiI2OTYzZTZiNDU1MjZhMzNlMTU1OTZlYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Yk74pczsBwB3DMiiAyxNao95Bc5km1pU38Mq1Wd8TDc'
//   }
// };
// useEffect(() => {
//   fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
//     .then((res) => res.json())
//     .then((res) => setData(res.results))
//     .catch((err) => console.error(err));
// }, []);

//     console.log("Title:", title,"Category:", category);

//     return (
//         <div className="text-white md:px-4">
//             <h2 className="pt-10 pb-5 text-lg font-medium">{title}</h2>
//             <Swiper slidesPerView={"auto"} spaceBetween={10} className='mySwiper'>
//                 {data.map((item) => (
//                     <SwiperSlide key={item.id} className='max-w-[180px]'>
//                         <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} 
                            //  alt=" "
//                          className="w-full h-44 rounded object-center object-cover"/>
//                         <p className="text-center pt-2">{item.description}</p>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     )
// }

// export default CardList
