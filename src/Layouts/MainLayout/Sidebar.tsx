'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (event: any) => {
    if(!event.target.closest(".sidebar")) setSidebarOpen(false)
  };
  return (
      <div className="relative">
      {!isSidebarOpen && (
        <button
          className="fixed top-0 left-0 z-50 p-2 bg-green-500 text-white shadow-md md:hidden hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
      <div
        className={`sidebar fixed top-0 left-0 w-64 h-full text-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:translate-x-0 md:static bg-[var(--green-bg)] md:bg-transparent border-r-4 border-gray-500 overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='sidebar-section'>
          <div className='flex justify-center mb-4'>
            <Image src={"/images/newproduct/logo.jpg"} alt='logo' width={200} height={150} />
          </div>
          <div className='sidebar-btn'>
            <Image src={"/images/newproduct/sidebar-icon.jpg"} alt='icon' width={30} height={30} />
            Explore
          </div>
          <div className='sidebar-btn'>
            <Image src={"/images/newproduct/sidebar-icon.jpg"} alt='icon' width={30} height={30} />
            Earn
          </div>
          <div className='sidebar-btn'>
            <Image src={"/images/newproduct/sidebar-icon.jpg"} alt='icon' width={30} height={30} />
            Message
          </div>
          <div className='sidebar-btn'>
            <Image src={"/images/newproduct/sidebar-icon.jpg"} alt='icon' width={30} height={30} />
            Me
          </div>
          <div className='mt-4 flex justify-center'>
            <Link className='sidebar-launch-link btn-green w-full text-center' href = '/launch-token'>Launch</Link>
          </div>
          <div className='flex justify-center mt-4'>
            Terms & Privacy Policy
          </div>
          <div className='social'>
            <Image src={"/images/newproduct/social.jpg"} alt='social' width={30} height={30} />
            <Image src={"/images/newproduct/social.jpg"} alt='social' width={30} height={30} />
            <Image src={"/images/newproduct/social.jpg"} alt='social' width={30} height={30} />
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={(e) => {
            e.stopPropagation();
            closeSidebar(e)
          }
        }
        ></div>
      )}
    </div>
  )
}

export default SideBar;

// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const SideBar = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = (event: any) => {
//     if (!event.target.closest(".sidebar")) setSidebarOpen(false);
//   };

//   return (
//     <div className="relative">
//       {!isSidebarOpen && (
//         <button
//           className="fixed top-0 left-0 z-50 p-2 bg-green-500 text-white shadow-md md:hidden hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out"
//           onClick={toggleSidebar}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       )}
//       <div
//         className={`sidebar fixed top-0 left-0 w-64 text-white shadow-lg transform h-full ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out z-40 md:translate-x-0 md:static bg-[var(--green-bg)] md:bg-transparent border-r-4 border-gray-500 overflow-y-auto`}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className='sidebar-section'>
//           <div className='flex justify-center mb-4'>
//             <Image src={"/images/newproduct/logo.jpg"} alt='logo' width={200} height={150} />
//           </div>
//           <div className='sidebar-btn'>
//             <Image src={"/images/newproduct/sidebar-icon.jpg"} alt='icon' width={30} height={30} />
//             Explore
//           </div>
//           <div className='sidebar-btn'>
//             <Image src={"/images/newproduct/sidebar-icon.jpg"} alt='icon' width={30} height={30} />
//             Earn
//           </div>
//           <div className='sidebar-btn'>
//             <Image src={"/images/newproduct/sidebar-icon.jpg"} alt='icon' width={30} height={30} />
//             Message
//           </div>
//           <div className='sidebar-btn'>
//             <Image src={"/images/newproduct/sidebar-icon.jpg"} alt='icon' width={30} height={30} />
//             Me
//           </div>
//           <div className='mt-4 flex justify-center'>
//             <Link className='sidebar-launch-link btn-green w-full text-center' href='/launch-token'>
//               Launch
//             </Link>
//           </div>
//           <div className='flex justify-center mt-4'>
//             Terms & Privacy Policy
//           </div>
//           <div className='social'>
//             <Image src={"/images/newproduct/social.jpg"} alt='social' width={30} height={30} />
//             <Image src={"/images/newproduct/social.jpg"} alt='social' width={30} height={30} />
//             <Image src={"/images/newproduct/social.jpg"} alt='social' width={30} height={30} />
//           </div>
//         </div>
//       </div>

//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
//           onClick={(e) => {
//             e.stopPropagation();
//             closeSidebar(e);
//           }}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default SideBar;