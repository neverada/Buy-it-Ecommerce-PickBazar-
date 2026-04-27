// import React, { useState } from 'react'
// import logo from '../../assets/pickbazar-logo.png'

// import { useNavigate } from "react-router";

// import './header.css'

// const Header = () => {
//     const [loggedIn, SetLogin] = useState(false)
//     const navigate = useNavigate()
//     return (
//         <nav className="relative ">
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//                 <div className="relative flex h-16 items-center justify-between">
//                     <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

//                         <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
//                             <span className="absolute -inset-0.5"></span>
//                             <span className="sr-only">Open main menu</span>
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
//                                 <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
//                             </svg>
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
//                                 <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
//                             </svg>
//                         </button>
//                     </div>
//                     <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                         <div className="flex shrink-0 items-center">
//                             <img src={logo} alt="Your Company" className="h-8 w-auto" />
//                         </div>
//                         <div className="hidden sm:ml-6 sm:block">
//                             <div className="flex space-x-4">
//                                 <a href="#" aria-current="page" className="rounded-md  px-3 py-2 text-sm font-medium text-[var(--primary-color)]">Dashboard</a>
//                                 <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[var(--primary-color)]">Team</a>
//                                 <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[var(--primary-color)]">Projects</a>
//                                 <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-[var(--primary-color)]">Calendar</a>
//                             </div>
//                         </div>
//                     </div>
//                     {!loggedIn? ( <button className='bg-[var(--primary-color)] text-white px-4 py-2 rounded-md cursor-pointer' onClick={() => navigate('/login')}>Login In </button> ):( <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                         <button type="button" className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
//                             <span className="absolute -inset-1.5"></span>
//                             <span className="sr-only">View notifications</span>
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
//                                 <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" stroke-linecap="round" stroke-linejoin="round" />
//                             </svg>
//                         </button>

//                         <el-dropdown className="relative ml-3">
//                             <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
//                                 <span className="absolute -inset-1.5"></span>
//                                 <span className="sr-only">Open user menu</span>
//                                 <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
//                             </button>

//                             <el-menu anchor="bottom end" popover className="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
//                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Your profile</a>
//                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Settings</a>
//                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Sign out</a>
//                             </el-menu>
//                         </el-dropdown>
//                     </div>) }
//                 </div>
//             </div>

//             <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
//                 <div className="space-y-1 px-2 pt-2 pb-3">
//                     <a href="#" aria-current="page" className="block rounded-md  px-3 py-2 text-base font-medium text-[var(--primary-color)]">Dashboard</a>
//                     <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
//                     <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
//                     <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
//                 </div>
//             </el-disclosure>
//         </nav>

//     )
// }
// export default Header

import React, { useState } from "react";
import logo from "../../assets/pickbazar-logo.png";
import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  toggleCart,
} from "../../slice/ProductSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [loggedIn, setLoggedIn] = useState(false); // Consistent casing
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Toggle Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Logo and Nav Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div
              className="flex shrink-0 items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="PickBazar" className="h-6 w-auto" />
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8 items-center">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-[var(--primary-color)] transition-colors"
              >
                Shops
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-[var(--primary-color)] transition-colors"
              >
                Offers
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-[var(--primary-color)] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleCart())}
              className="relative p-2 text-[var(--primary-color)] hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingBagIcon />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {!loggedIn ? (
              <button
                className="bg-[var(--primary-color)] hover:bg-opacity-90 text-white px-5 py-2.5 rounded text-sm font-bold transition-all"
                onClick={() => navigate("/login")}
              >
                Join
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-[var(--primary-color)]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex rounded-full bg-gray-200 text-sm focus:outline-none ring-2 ring-transparent hover:ring-[var(--primary-color)] transition-all"
                  >
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="User"
                    />
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-xl ring-1 ring-black ring-opacity-5">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </a>
                      <button
                        onClick={() => setLoggedIn(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2">
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Shops
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Offers
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
