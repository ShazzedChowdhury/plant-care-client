import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-3">
          <Link
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            {/* logo */}
            <div className="flex items-end gap-1">
              <img
                className="w-10"
                src="https://i.postimg.cc/T1pXyz7n/logo.png"
                alt=""
              />
              <h1 className="text-lg font-semibold">
                plant<span className="text-[#70b023] text-xl">Care</span>
              </h1>
            </div>
          </Link>
          <div className="mt-6 lg:max-w-md">
            <p className="text-sm text-gray-800">
              Keep your plants happy and thriving with our easy-to-use plant
              care tracker. Whether you're a seasoned plant parent or just
              starting out, this tool helps you stay on top of watering
              schedules, sunlight needs, and fertilizing reminders for all your
              green companions. Organize your plant collection, set custom care
              routines, and get gentle reminders so your plants get the
              attention they deserve. Never forget a watering day again!
            </p>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-[#444444]">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 btn p-0 w-10 h-10 rounded-full"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 btn p-0 w-10 h-10 rounded-full"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400 btn p-0 w-10 h-10 rounded-full"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <p className="text-sm mt-2 text-gray-500">
            Visite our social page for more information.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2020 <span className="font-semibold">plantCare</span> Inc.
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
