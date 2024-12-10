"use client";
import { FaRegUser, FaRegHeart, FaRegEnvelope, FaAngleDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-purple-600 text-white max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="bg-purple-700 px-6">
        <div className="px-14 py-2 flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2">
              <FaRegEnvelope />
              <span className="text-sm">mhhasanu@gmail.com</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <MdOutlinePhoneInTalk />
              <span className="text-sm">(12345)67890</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <select className="bg-transparent px-2 py-1 rounded text-sm">
              <option>English</option>
              <option>Urdu</option>
            </select>

            {/* Currency Selector */}
            <select className="bg-transparent px-2 py-1 rounded text-sm">
              <option>USD</option>
              <option>PKR</option>
            </select>

            {/* Login */}
            <Link
              href="#"
              className="hidden sm:flex items-center gap-1 text-sm hover:text-gray-300"
            >
              Login
              <FaRegUser />
            </Link>

            {/* Wishlist */}
            <Link

              href="#"
              className="hidden sm:flex items-center gap-1 text-sm hover:text-gray-300"
            >
              Wishlist
              <FaRegHeart />
            </Link>

            {/* Shopping Cart */}
            <Link href="#" className="flex items-center hover:text-gray-300">
              <FiShoppingCart />
            </Link>

            {/* Shopping Cart */}
            <Link href="#" className="flex items-center hover:text-gray-300">
              <FiShoppingCart />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-20 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-blue-900">Hekto</div>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="sm:hidden flex items-center ml-4">
            <button onClick={toggleMenu}>
              <AiOutlineMenu size={25} className="text-blue-900" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden sm:flex space-x-6">
            <Link
              href="/"
              className="text-red-500 font-medium hover:text-pink-500 transition duration-200"
            >
              Home
              <FaAngleDown className="inline-flex ml-2 text-red-500"/>
            </Link>
            <Link
              href="/about-us"
              className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
            >
              Shop
            </Link>
            <Link
              href="/contact-us"
              className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar Section */}
<div className="flex items-center gap-4 sm:w-64 w-full ml-4">
  {/* Search Input with Button Inside */}
  <div className="flex w-full border border-gray-300">
    <input
      type="text"
      placeholder="Search for products..."
      className="bg-white text-gray-700 text-sm py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-pink-500"
    />

    {/* Search Button inside the input */}
    <button className="bg-pink-500 text-white px-5 py-2 hover:bg-pink-600 transition duration-200">
      <AiOutlineSearch size={20} />
    </button>
  </div>
</div>

        </div>
      </div>

      {/* Right Sidebar Navigation */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 overflow-y-auto`}
      >
        {/* Close Button */}
        <div className="absolute top-0 right-0 p-4">
          <button onClick={closeMenu} className="text-xl font-bold text-blue-900">
            &times;
          </button>
        </div>
        
        {/* Sidebar Navigation Links */}
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            href="/"
            className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
          >
            Shop
          </Link>
          <Link
            href="/contact-us"
            className="text-blue-900 font-medium hover:text-pink-500 transition duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// import { FaRegUser, FaRegHeart, FaRegEnvelope } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";
// import { MdOutlinePhoneInTalk } from "react-icons/md";

// const Header = () => {
//   return (
//     <header className="bg-purple-600 text-white px-6">
//       <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
//         {/* Left Section */}
//         <div className="flex items-center gap-6">
//           <div className="hidden sm:flex items-center gap-2">
//             <FaRegEnvelope />
//             <span className="text-sm">mhhasanu@gmail.com</span>
//           </div>
//           <div className="hidden sm:flex items-center gap-2">
//             <MdOutlinePhoneInTalk />
//             <span className="text-sm">(12345)67890</span>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4">
//           {/* Language Selector */}
//           <select className="bg-transparent px-2 py-1 rounded text-sm">
//             <option>English</option>
//             <option>Urdu</option>
//           </select>

//           {/* Currency Selector */}
//           <select className="bg-transparent px-2 py-1 rounded text-sm">
//             <option>USD</option>
//             <option>PKR</option>
//           </select>

//           {/* Login */}
//           <a
//             href="#"
//             className="hidden sm:flex items-center gap-1 text-sm hover:text-gray-300"
//           >
//             Login
//             <FaRegUser />
//           </a>

//           {/* Wishlist */}
//           <a
//             href="#"
//             className="hidden sm:flex items-center gap-1 text-sm hover:text-gray-300"
//           >
//             Wishlist
//             <FaRegHeart />
//           </a>

//           {/* Shopping Cart */}
//           <a
//             href="#"
//             className="flex items-center hover:text-gray-300"
//           >
//             <FiShoppingCart />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
