"use client";
import React from "react";
import Breadcrumb from "./BreadCrumb";

const OrderCompletedPage = () => (
  <div>
    {/* Breadcrumb Component */}
    <Breadcrumb/>

    {/* Order Completed Content */}
    <div className="text-center py-16 bg-white">
      <div className="flex justify-center items-center mb-6">
        <div className="bg-pink-100 rounded-full p-4">
          <svg
            className="w-12 h-12 text-pink-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10 15l-3.5-3.5 1.41-1.41L10 12.17l5.09-5.09 1.41 1.41z" />
          </svg>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Your Order Is Completed!</h1>
      <p className="text-gray-600 mb-6">
        Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.
      </p>
      <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600">
        Continue Shopping
      </button>
    </div>
  </div>
);

export default OrderCompletedPage;
