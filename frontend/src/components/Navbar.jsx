import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Logo from '../assets/SRflix_logo.png'  
const Navbar = () => {
  return (
<nav className="bg-black text-gray-200 flex justify-between items-center p-4 h-20 text-sm md:text-[15px] font-semibold text-nowrap">


  <img
  src={Logo}
  alt="Logo"
  className="h-20 w-52 object-fill cursor-pointer brightness-125 hover:scale-x-110 hover:scale-y-100 transition duration-300"
      />


   <ul className="hidden xl:flex space-x-6">
      <li className="cursor-pointer hover:text-[#e50914]">Home</li>
      <li className="cursor-pointer hover:text-[#e50914]">Tv Shows</li>
      <li className="cursor-pointer hover:text-[#e50914]">Movies</li>
      <li className="cursor-pointer hover:text-[#e50914]">Anime</li>
      <li className="cursor-pointer hover:text-[#e50914]">Games</li>
      <li className="cursor-pointer hover:text-[#e50914]">New & Popular</li>
      <li className="cursor-pointer hover:text-[#e50914]">Upcoming</li>
   </ul>


   <div className="flex items-center space-x-4 relative">
      <div className="relative hidden md:inline-flex">
        <input type="text" className="bg-[#333333] px-4 py-2 rounded-full main-max-w-72 pr-10 outline-none" placeholder="Search..." />
        <Search
  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
/>
      </div>
      <button className="bg-[#e50914] px-5 py-2 text-white cursor-pointer font-bold  hover:text">Get AI Movie Picks</button>
     <button className="border border-[#333333] py-2 px-4 cursor-pointer font-bold  hover:text">Sign In</button>

   </div>
   

</nav>
  )
}

export default Navbar

// advance

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Search } from 'lucide-react';
// import Logo from '../assets/SRflix_logo.png'; 

// const Navbar = () => {
//   return (
//     <nav className="bg-black text-gray-200 flex justify-between items-center px-4 md:px-8 h-20 font-semibold text-sm md:text-[15px]">
      
//       {/* Logo */}
//       <Link to="/">
//         <img
//           src={Logo}
//           alt="S&Rflix Logo"
//           className="h-16 w-auto object-contain cursor-pointer brightness-110 hover:scale-105 transition-transform duration-300"
//         />
//       </Link>

//       {/* Navigation links */}
//       <ul className="hidden xl:flex space-x-6">
//         <li className="cursor-pointer hover:text-[#e50914] transition-colors duration-200">Home</li>
//         <li className="cursor-pointer hover:text-[#e50914] transition-colors duration-200">TV Shows</li>
//         <li className="cursor-pointer hover:text-[#e50914] transition-colors duration-200">Movies</li>
//         <li className="cursor-pointer hover:text-[#e50914] transition-colors duration-200">Anime</li>
//         <li className="cursor-pointer hover:text-[#e50914] transition-colors duration-200">Games</li>
//         <li className="cursor-pointer hover:text-[#e50914] transition-colors duration-200">New & Popular</li>
//         <li className="cursor-pointer hover:text-[#e50914] transition-colors duration-200">Upcoming</li>
//       </ul>

//       {/* Right section */}
//       <div className="flex items-center space-x-4">
//         {/* Search */}
//         <div className="relative hidden md:flex">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-[#333333] text-gray-200 px-4 py-2 rounded-full pr-10 focus:outline-none focus:ring-2 focus:ring-[#e50914] transition-all duration-200 w-48 md:w-64"
//           />
//           <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//         </div>

//         {/* Buttons */}
//         <button className="bg-[#e50914] px-4 md:px-5 py-2 text-white font-bold rounded hover:bg-red-700 transition-colors duration-200">
//           Get AI Movie Picks
//         </button>
//         <button className="border border-[#333333] px-4 py-2 font-bold rounded hover:border-gray-500 transition-colors duration-200">
//           Sign In
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
