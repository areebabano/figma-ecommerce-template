import React from 'react';
import { FaCheck, FaRegHeart, FaRegStar, FaSearch, FaStar } from 'react-icons/fa';
import Breadcrumb from '@/components/BreadCrumb';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { LiaSearchPlusSolid } from 'react-icons/lia';

const ShopPage = () => {
  // Product data
  const products = [
    { id: 1, title: 'Dictum morbi', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 29.99, image: '/ps1.png', rating: 4 },
    { id: 2, title: 'Sodales sit', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 49.99, image: '/ps2.png', rating: 3 },
    { id: 3, title: 'Nibh varius', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 19.99, image: '/ps3.png', rating: 5 },
    { id: 4, title: 'Mauris quis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 39.99, image: '/ps4.png', rating: 2 },
    { id: 5, title: 'Morbi sagittis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 59.99, image: '/ps5.png', rating: 4 },
    { id: 6, title: 'Ultricies venenatis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 99.99, image: '/ps6.png', rating: 2 },
    { id: 7, title: 'Scelerisque dignissim', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.', price: 69.99, image: '/ps7.png', rating: 3 },
  ];

  // Filters data
  const brandFilters = [
    'Coaster Furniture',
    'Fusion Dot High Fashion',
    'Unique Furniture Restor',
    'Dream Furniture Flipping',
    'Young Repurposed',
    'Green DIY Furniture',
  ];

  const discountOffers = ['20% Cashback', '5% Cashback Offer', '25% Discount Offer'];

  const ratingFilters = [
    { rating: 4, count: '(2341)' },  // 4 stars
    { rating: 3, count: '(1726)' },  // 3 stars
    { rating: 2, count: '(258)' },   // 2 stars
    { rating: 2, count: '(25)' },    // 2 stars
  ];

  const categories = [
    'Prestashop',
    'Magento',
    'Bigcommerce',
    'osCommerce',
    '3dcart',
    'Bags',
    'Accessories',
    'Jewellery',
    'Watches',
  ];

  const priceRanges = [
    '$0.00 - $150.00',
    '$150.00 - $350.00',
    '$350.00 - $504.00',
    '$450.00 +',
    '$10.00 - 20000$',
  ];

  const colors = [
    { name: 'Blue', color: 'bg-blue-500' },
    { name: 'Orange', color: 'bg-orange-500' },
    { name: 'Brown', color: 'bg-orange-800' },
    { name: 'Green', color: 'bg-green-500' },
    { name: 'Purple', color: 'bg-purple-500' },
    { name: 'Sky', color: 'bg-sky-500' },
  ];

  return (
    <div className='max-w-7xl mx-auto'>
       {/* Breadcrumb */}
       <Breadcrumb />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 mt-10 px-6 sm:px-20">
        <h2 className="text-[#151875] text-xl font-bold mb-4 sm:mb-0 sm:text-left text-center">
          Ecommerce Accessories & Fashion Item <br />
          <span className="text-sm text-gray-400">About 9,620 results (0.62 seconds)</span>
        </h2>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-6 sm:items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="perPage" className="mr-2 text-sm font-medium text-gray-600">Per Page:</label>
            <select id="perPage" className="border border-gray-300 rounded p-2 text-sm">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
          </div>
          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="sortBy" className="mr-2 text-sm font-medium text-gray-600">Sort By:</label>
            <select id="sortBy" className="border border-gray-300 rounded p-2 text-sm">
              <option value="best-match">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="view" className="mr-2 text-sm font-medium text-gray-600">View:</label>
            <select id="view" className="border border-gray-300 rounded p-2 text-sm">
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row px-6 sm:px-12 gap-2">
        {/* Left Sidebar */}
        <div className="w-full sm:w-1/4 bg-white p-4 space-y-4 ">
          {/* Brand Filter */}
          <div className="p-4 rounded-md">
            <h3 className="text-xl font-bold text-[#151875] inline-block border-b-2 border-[#151875] pb-1 mb-4">
              Product Brand
            </h3>
            <ul>
              {brandFilters.map((brand, index) => (
                <li key={index} className="flex items-center py-2 text-gray-400 text-sm">
                  <FaCheck className={`p-1 mr-2 ${index === 2 ? 'bg-blue-800 text-white' : 'bg-blue-100 text-blue-800'}`} />
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Discount Offer */}
          <div className="p-4 rounded-md">
            <h3 className="text-xl font-bold text-[#151875] inline-block border-b-2 border-[#151875] pb-1 mb-4">Discount Offer</h3>
            <ul>
              {discountOffers.map((offer, index) => (
                <li key={index} className="flex items-center py-2 text-gray-400 text-sm">
                  <FaCheck className="bg-pink-100 text-pink-700 p-1 mr-2" />
                  {offer}
                </li>
              ))}
            </ul>
          </div>

          {/* Rating Filter */}
          <div className="p-4 rounded-md">
            <h3 className="text-xl font-bold text-[#151875] inline-block border-b-2 border-[#151875] pb-1 mb-4">Rating Item</h3>
            <ul>
              {ratingFilters.map((item, index) => (
                <li key={index} className="flex items-center py-2 text-gray-800 text-sm font-semibold">
                  <FaCheck className={`p-1 mr-2 ${index === 2 ? 'bg-yellow-500 text-white' : 'bg-yellow-100 text-yellow-500'}`} />
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex}>
                      {starIndex < item.rating ? <FaStar className="text-yellow-500" /> : <FaRegStar className="text-yellow-500" />}
                    </span>
                  ))}
                  <span className="ml-2">{item.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Category Filter */}
          <div className="p-4 rounded-md">
            <h3 className="text-xl font-bold text-[#151875] inline-block border-b-2 border-[#151875] pb-1 mb-4">Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="flex items-center py-2 text-gray-400 text-sm">
                  <FaCheck className={`p-1 mr-2 ${index === 2 ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-500'}`} />
                  {category}
                </li>
              ))}
            </ul>
          </div>
          {/* Price Filter */}
        <div className="p-4 rounded-md">
          <h3 className="text-xl font-bold text-[#151875] inline-block border-b-2 border-[#151875] pb-1 mb-4">Price Filter</h3>
          <ul>
            {priceRanges.map((range, index) => (
              <li key={index} className="flex items-center py-2 text-gray-400 text-sm">
                <FaCheck
                  className={`p-1 mr-2 ${index === 2 ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-500'}`}
                />
                {range}
              </li>
            ))}
          </ul>
        </div>

       {/* Search Bar with Icon */}
<div className="mt-2 px-2 relative text-sm">
  <input
    type="text"
    placeholder="$10.00 - 20000$"
    className="w-full p-2 border border-gray-300 rounded-md pl-4 pr-10" // Add padding for the icon space
  />
  <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
</div>


        {/* Filter by Color */}
<div className="p-4">
  <h3 className="text-xl font-bold text-[#151875] inline-block border-b-2 border-[#151875] pb-1 mb-4">
    Filter by Color
  </h3>
  <ul className="grid grid-cols-2 gap-2"> {/* Create a grid with 3 columns */}
    {colors.map((color, index) => (
      <li key={index} className="flex items-center text-gray-400 text-sm">
        <span className={`w-3 h-3 ${color.color} rounded-full mr-1`}></span> {color.name}
      </li>
    ))}
  </ul>
</div>

      </div>
          
      {/* Product Display Section */}
<div className="w-full p-4 space-y-8 bg-white mb-6">
  {products.map((product) => (
    <div
      key={product.id}
      className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
    >
      <div className="flex flex-col gap-6 md:flex-row overflow-hidden w-full max-w-4xl bg-white rounded-lg">
        {/* Left Section: Product Image */}
        <div className="w-full md:w-1/2 h-auto">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={230}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
          {/* Product Name */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-[#111C85]">{product.title}</h2>

            {/* Color Options */}
            <div className="flex items-center space-x-2 mr-16">
              <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
              <div className="w-3 h-3 rounded-full bg-pink-600"></div>
              <div className="w-3 h-3 rounded-full bg-purple-600"></div>
            </div>
          </div>

          {/* Price Section and Rating */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <p className="text-sm text-[#111C85]">${product.price}</p>
              {/* Assuming the original price is not available in product data, but if you had it, it could be displayed similarly */}
              <p className="text-sm line-through text-pink-500">${(product.price * 1.2).toFixed(2)}</p>
            </div>

<div className="flex items-center mr-12">
  {[...Array(5)].map((_, index) => (
    <span key={index}>
      {index < (product.rating || 0) ? (
        <FaStar className="text-yellow-500" />  // Filled star
      ) : (
        <FaRegStar className="text-yellow-500" />  // Unfilled star
      )}
    </span>
  ))}
</div>

          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-4 line-clamp-2 mt-2">
            {product.description}
          </p>

          {/* Icons */}
          <div className="flex gap-8 text-[#111C85] ">
            <button
              aria-label="Add to Cart"
              className=" bg-white rounded-full shadow-md py-1 px-1"
            >
              <FiShoppingCart size={20} />
            </button>
            <button
              aria-label="Add to Wishlist"
              className=" bg-white rounded-full shadow-md py-1 px-1"
            >
              <FaRegHeart size={20} />
            </button>
            <button
              aria-label="Search Product"
              className=" bg-white rounded-full shadow-md py-1 px-1"
            >
              <LiaSearchPlusSolid size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
    {/* Centered Image Section */}
    <div className="flex justify-center mt-14 mb-14">
        <Image
          src="/newsletter.png" // Replace with your image path
          alt="News Letter"
          width={700}
          height={600}
        />
      </div>
    </div>
  );
};

export default ShopPage;
