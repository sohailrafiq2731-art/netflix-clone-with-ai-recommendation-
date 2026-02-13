// // simple
// import React from 'react'

// const Footer = () => {
//   return (
//      <div className="text-[#737373] text-center py-6">

//       <p>© 2026 S&Rflix. All rights reserved.</p>

//        <p className="font-bold mt-2 text-center py-6">
//         Developed by SOHAIL RAFIQ
//       </p>


//       <p> Read about S&Rflix TV Shows and Movies and watch bonus videos on S&Rflix.com
//     </p>


//     <p>
//         Questions? Contact Us: Call +92-304-4231-293
//     </p>


//     <div className="flex flex-wrap justify-center gap-16 text-sm text-[#737373] mt-4">
  
//         <ul className="flex flex-col gap-2">
//             <li>FAQ</li>
//             <li>Privacy Policy</li>
//             <li>Terms of Use</li>
//             <li>Help Center</li>
//         </ul>



//         <ul className="flex flex-col gap-2">
//             <li>About Us</li>
//             <li>Contact Us</li>
//             <li>Careers</li>
//             <li>Press</li>
//         </ul>



//          <ul className="flex flex-col gap-2">
//             <li>Jobs</li>
//             <li>Internships</li>
//             <li>Volunteer</li>
//             <li>Community</li>

//         </ul>



//         <ul className="flex flex-col gap-2">
//             <li>Legal Notices</li>
//             <li>Investor Relations</li>
//             <li>Cookie Preferences </li>
//             <li>Speed Test</li>
//         </ul>

  

//         <ul className="flex flex-col gap-2">
//             <li>Account</li>
//             <li>Ways to Watch</li>
//             <li>Corporate Information</li>
//             <li>Only on SRflix</li>
//         </ul>
    


//          <ul className="flex flex-col gap-2">
//             <li>Media Center</li>
//             <li>Terms of Use</li>
//             <li>Contact Us</li>
//         </ul>



//         </div>
//     </div>
//   )
// }


// export default Footer




// medium

import React from 'react'

const Footer = () => {
  const columns = [
    ["FAQ", "Privacy Policy", "Terms of Use", "Help Center"],
    ["About Us", "Contact Us", "Careers", "Press"],
    ["Jobs", "Internships", "Volunteer", "Community"],
    ["Legal Notices", "Investor Relations", "Cookie Preferences", "Speed Test"],
    ["Account", "Ways to Watch", "Corporate Information", "Only on S&Rflix"],
    ["Media Center", "Terms of Use", "Contact Us"]
  ]

  return (
    <footer className="bg-black text-[#737373] py-8 px-4">

      {/* Top Info */}
      <div className="text-center space-y-2">
        <p className="text-sm">© 2026 S&Rflix. All rights reserved.</p>
        <p className="font-bold text-white">Developed by SOHAIL RAFIQ</p>
        <p className="text-sm mt-2">
          Read about S&Rflix TV Shows and Movies and watch bonus videos on <span className="text-white font-semibold">S&Rflix.com</span>
        </p>
        <p className="text-sm mt-1">
          Questions? Contact Us: Call +92-304-4231-293
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-12 mt-6 text-left text-sm">

        {columns.map((col, idx) => (
          <ul key={idx} className="flex flex-col gap-2">
            {col.map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition-opacity duration-300 cursor-pointer opacity-80 hover:opacity-100"
              >
                {item}
              </li>
            ))}
          </ul>
        ))}

      </div>

    </footer>
  )
}

export default Footer




// advance
//  import React from 'react'
// import { Facebook, Twitter, Instagram, YouTube } from 'lucide-react'

// const Footer = () => {

//   const footerColumns = [
//     {
//       heading: "Explore",
//       links: ["Home", "Movies", "TV Shows", "Originals"]
//     },
//     {
//       heading: "Company",
//       links: ["About Us", "Careers", "Press", "Investor Relations"]
//     },
//     {
//       heading: "Support",
//       links: ["FAQ", "Help Center", "Terms of Use", "Privacy Policy"]
//     },
//     {
//       heading: "Connect",
//       links: ["Contact Us", "Cookie Preferences", "Speed Test", "Account"]
//     }
//   ]

//   const socialIcons = [
//     { icon: <Facebook size={20} />, link: "#" },
//     { icon: <Twitter size={20} />, link: "#" },
//     { icon: <Instagram size={20} />, link: "#" },
//     { icon: <YouTube size={20} />, link: "#" }
//   ]

//   return (
//     <footer className="bg-black text-[#737373] py-10 px-6">

//       {/* Top Info */}
//       <div className="text-center space-y-2 animate-fadeIn">
//         <p className="text-sm">© 2026 S&Rflix. All rights reserved.</p>
//         <p className="font-bold text-white">Developed by SOHAIL RAFIQ</p>
//         <p className="text-sm mt-2">
//           Read about S&Rflix TV Shows and Movies and watch bonus videos on 
//           <a href="https://s&rflix.com" className="text-white font-semibold ml-1">S&Rflix.com</a>
//         </p>
//         <p className="text-sm mt-1">
//           Questions? Contact Us: Call +92-304-4231-293
//         </p>
//       </div>

//       {/* Columns with Headings */}
//       <div className="flex flex-wrap justify-center gap-12 mt-8 text-left text-sm animate-fadeIn">

//         {footerColumns.map((col, idx) => (
//           <ul key={idx} className="flex flex-col gap-2 min-w-[120px]">
//             <li className="font-semibold text-white mb-2">{col.heading}</li>
//             {col.links.map((link, i) => (
//               <li key={i}>
//                 <a 
//                   href="#" 
//                   className="hover:text-white transition-opacity duration-300 cursor-pointer opacity-80 hover:opacity-100"
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         ))}

//       </div>

//       {/* Social Icons */}
//       <div className="flex justify-center gap-4 mt-8 animate-fadeIn">
//         {socialIcons.map((icon, i) => (
//           <a key={i} href={icon.link} className="hover:text-white transition-opacity duration-300 opacity-80 hover:opacity-100">
//             {icon.icon}
//           </a>
//         ))}
//       </div>

//       {/* Tailwind Fade-in Animation */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 0.8s ease forwards;
//           }
//         `}
//       </style>

//     </footer>
//   )
// }

// export default Footer
