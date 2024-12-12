import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative bg-[#F2F0FF] py-12 px-8 lg:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center h-auto">
      
      {/* Left Image (Smaller size and adjusted height) */}
      <div className="absolute top-0 left-0 hidden lg:block ml-2">
        <Image
          src="/hero1.png" // Replace with your actual left image path
          alt="Left Image"
          layout="intrinsic"
          width={220} // Reduced size for the left image
          height={220} // Reduced height
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      {/* Center Content */}
      <div className="text-center lg:text-left lg:px-16 lg:ml-12 mb-12">
        <p className="text-sm text-pink-600 font-medium">
          Best Furniture For Your Castle...
        </p>
        <h1
          className="text-3xl lg:text-4xl text-gray-800 mt-2 font-extrabold"
          style={{
            fontFamily: "Josefin Sans, sans-serif",
            lineHeight: "1.4",
            letterSpacing: "3px",
          }}
        >
          New Furniture Collection <br /> Trends in 2020
        </h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <button className="mt-6 px-6 py-3 font-semibold bg-pink-500 text-white hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="relative lg:block">
        <Image
          src="/hero.png" // Replace with your actual right image path
          alt="Right Image"
          layout="intrinsic"
          width={700} // Increased width
          height={750} // Increased height
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Four-Cornered Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {/* Active Dot */}
        <div className="w-2 h-2 bg-pink-500 transform rotate-45"></div>
        {/* Inactive Dots with Borders */}
        <div className="w-2 h-2 bg-white border-2 border-pink-500 transform rotate-45"></div>
        <div className="w-2 h-2 bg-white border-2 border-pink-500 transform rotate-45"></div>
      </div>
    </div>
  );
};

export default HeroSection;



