"use client";
import Breadcrumb from "@/components/BreadCrumb";
import Image from "next/image";
import React, { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
      image: "/pc1.png",
    },
    {
      id: 2,
      name: "Vel faucibus posuere",
      color: "Black",
      size: "M",
      price: 50.0,
      quantity: 2,
      image: "/pc2.png",
    },
    {
      id: 3,
      name: "Ac vitae vestibulum",
      color: "Red",
      size: "S",
      price: 40.0,
      quantity: 1,
      image: "/pc3.png",
    },
    {
      id: 4,
      name: "Elit massa diam",
      color: "White",
      size: "L",
      price: 100.0,
      quantity: 1,
      image: "/pcs4.png",
    },
    {
      id: 5,
      name: "Proin pharetra elementum",
      color: "Grey",
      size: "42",
      price: 75.0,
      quantity: 1,
      image: "/pc5.png",
    },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {/* BreadCrumb */}
      <Breadcrumb />
      <div className="bg-white min-h-screen max-w-7xl mx-auto">
        {/* Page Content */}
        <main className="container mx-auto my-6 px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Table */}
            <div className="lg:w-2/3">
              <div className="overflow-x-auto">
                <table className="w-full bg-white">
                  <thead className="text-[#1D3178]">
                    <tr>
                      <th className="py-2 text-left pl-4">Product</th>
                      <th className="py-2">Price</th>
                      <th className="py-2">Quantity</th>
                      <th className="py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="text-center">
                        <td className="border-b border-gray-300 px-4 py-2 flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="mr-4"
                          />
                          <div className="text-left">
                            <p className="text-sm text-black">{item.name}</p>
                            <p className="text-sm text-gray-400">
                              Color: {item.color}
                            </p>
                            <p className="text-sm text-gray-400">
                              Size: {item.size}
                            </p>
                          </div>
                        </td>
                        <td className="border-b border-gray-300 px-4 py-2 text-sm text-[#15245E]">
                          £{item.price.toFixed(2)}
                        </td>
                        <td className="border-b border-gray-300 px-4 py-2 text-sm text-[#15245E]">
                          <input
                            type="number"
                            className="w-12 text-center border border-gray-300 rounded"
                            value={item.quantity}
                            min={1}
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                Number(e.target.value)
                              )
                            }
                          />
                        </td>
                        <td className="border-b border-gray-300 px-4 py-2 text-sm text-[#15245E]">
                          £{(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row justify-between gap-4">
                <button className="bg-pink-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
                  Update Cart
                </button>
                <button className="bg-pink-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:w-1/3">
              <h3 className="text-xl font-bold mb-4 text-center text-[#1D3178]">
                Cart Totals
              </h3>
              <div className="bg-[#F4F4FC] p-4 rounded">
                <div className="mb-2 flex justify-between text-[#1D3178] border-b border-gray-300 pb-2">
                  <span>Subtotal:</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="mb-6 flex justify-between text-[#1D3178] border-b border-gray-300 pb-2">
                  <span>Total:</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-400 mb-6">
                  <span className="w-2.5 h-2.5 bg-green-500 mr-2 inline-flex rounded-full"></span>
                  Shipping & taxes calculated at checkout
                </p>
                <button className="bg-green-500 w-full text-white px-4 py-2 rounded">
                  Proceed to Checkout
                </button>
              </div>

              {/* Shipping Calculation */}
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4 text-center text-[#1D3178]">
                  Calculate Shipping
                </h3>
                <div className="bg-[#F4F4FC] p-4 rounded">
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Bangladesh"
                      className="w-full bg-[#F4F4FC] border-b border-gray-300 p-2 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Mirpur Dhaka - 1200"
                      className="w-full bg-[#F4F4FC] border-b border-gray-300 p-2 rounded"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="w-full bg-[#F4F4FC] border-b border-gray-300 p-2 rounded"
                    />
                    <button className="bg-pink-500 hover:bg-purple-600 w-full text-white px-4 py-2 rounded">
                      Calculate Shipping
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CartPage;




// // Example Products Data (replace with actual data or fetch from API)
// export const getServerSideProps = async () => {
//   const products: Product[] = [
//     {
//       id: 1,
//       name: "T-shirt",
//       image: "/images/tshirt.jpg", // Replace with actual image path
//       price: 25,
//       quantity: 2,
//       size: "M",
//       color: "Red",
//     },
//     {
//       id: 2,
//       name: "Jeans",
//       image: "/images/jeans.jpg", // Replace with actual image path
//       price: 50,
//       quantity: 1,
//       size: "L",
//       color: "Blue",
//     },
//   ];

//   return { props: { products } };
// };
