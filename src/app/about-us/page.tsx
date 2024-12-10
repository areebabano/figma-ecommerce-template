import Image from 'next/image'; // Import Next.js Image component
import Breadcrumb from '@/components/BreadCrumb';

export default function AboutUs() {
  const offers = [
    {
      id: 1,
      title: "Free Delivery",
      image: "/24support1.png",
      alt: "Free Delivery Icon",
    },
    {
      id: 2,
      title: "100% Cash Back",
      image: "/24support2.png",
      alt: "Cash Back Icon",
    },
    {
      id: 3,
      title: "Quality Product",
      image: "/24support3.png",
      alt: "Quality Product Icon",
    },
    {
      id: 4,
      title: "24/7 Support",
      image: "/24support4.png",
      alt: "Support Icon",
    },
  ];

  const loremParagraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.";

  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-40 py-12 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="flex-1">
          <Image
            src="/about.png"
            alt="About Us"
            width={350}
            height={350}
            className="rounded-lg shadow-md"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-2xl font-bold text-[#151875] mb-4">
            Know About Our E-commerce Business, History
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <button className="px-4 py-2 bg-pink-500 text-white text-sm hover:bg-purple-600 transition">
            Contact us
          </button>
        </div>
      </div>

      {/* ShopEx Offer Section */}
      <div className="py-12 bg-white max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-purple-900 mb-8">
          What Feature
        </h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white p-6 hover:border-b-4 border-yellow-400 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={offer.image}
                  alt={offer.alt}
                  width={60}
                  height={60}
                  objectFit="contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-purple-950 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-400 text-sm text-center">
                {loremParagraph}
              </p>
            </div>
          ))}
        </div>

        {/* Our Client Say Section */}
        <div className="py-16 bg-gray-50 max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#151875] mb-8">
            Our Client Say!
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <Image
              src="/client1.png"
              alt="Client 1"
              width={70}
              height={70}
              className="shadow-md"
            />
            <Image
              src="/client2.png"
              alt="Client 2"
              width={70}
              height={70}
<<<<<<< HEAD
              className="shadow-md mb-4"
=======
              className="shadow-md"
>>>>>>> 917b7661c6aa097032c6ef3f24a1e82973450f1f
            />
            <Image
              src="/client3.png"
              alt="Client 3"
              width={70}
              height={70}
              className="shadow-md"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#151875] mb-2">
            Selina Gomez
          </h1>
          <h6 className="text-sm text-gray-500 mb-4">
            Ceo At Webecy Digital
          </h6>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
          </p>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD


=======
>>>>>>> 917b7661c6aa097032c6ef3f24a1e82973450f1f
