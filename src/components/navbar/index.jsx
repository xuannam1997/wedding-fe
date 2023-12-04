"use client";

import scrollToSection from "@/common/scrollToSection";
import { useState } from "react";

const Navbar = () => {
  const [enableDropdown, setEnableDropdown] = useState(false);

  const handleClickDropdown = () => {
    setEnableDropdown((prev) => !prev);
  };

  const handleClickScroll = (e) => {
    scrollToSection(e);
    setEnableDropdown(false);
  };

  const handleClickHome = (e) => {
    e.preventDefault();
    setEnableDropdown(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="hidden md:block sticky top-0 z-[100] backdrop-blur-lg bg-white/70 shadow">
        <div className="container m-auto flex items-center justify-between">
          <h1 className="font_sacramento">
            <a
              className="flex items-center justify-center gap-1 text-3xl"
              href="/"
            >
              Nam
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30.22 30.01"
                width={11}
                height={11}
                className="ml-0.5"
              >
                <defs />
                <g id="a" />
                <g id="b">
                  <g id="c">
                    <path
                      className="d"
                      d="M13.69,30.01c-.66-4.72-4.16-8.45-7.36-11.99S-.1,10.37,0,5.61c.02-1.06,.22-2.14,.75-3.06C2.1,.19,5.39-.55,7.93,.41c2.54,.97,4.37,3.26,5.51,5.72,1.33-2.73,3.78-4.97,6.72-5.72,2.94-.75,6.33,.15,8.27,2.48,2.38,2.86,2.2,7.2,.54,10.52s-4.52,5.87-7.33,8.3c-2.81,2.43-5.71,4.92-7.47,8.19"
                    ></path>
                  </g>
                </g>
              </svg>
              Thành
            </a>
          </h1>
          <nav className="">
            <div className="flex items-center gap-4 text-md">
              <a
                className="px-2 py-8 cursor-pointer"
                data-scroll-nav="0"
                onClick={handleClickHome}
              >
                Home
              </a>
              <a
                className="px-2 py-8 cursor-pointer"
                data-scroll-nav="1"
                onClick={handleClickScroll}
              >
                Album ảnh
              </a>
              <a
                className="px-2 py-8 cursor-pointer"
                data-scroll-nav="2"
                onClick={handleClickScroll}
              >
                Nhà gái
              </a>
              <a
                className="px-2 py-8 cursor-pointer"
                data-scroll-nav="3"
                onClick={handleClickScroll}
              >
                Nhà trai
              </a>
              <a
                className="px-2 py-8 cursor-pointer"
                data-scroll-nav="4"
                onClick={handleClickScroll}
              >
                Gửi lời chúc
              </a>
              <a
                className="px-2 py-8 cursor-pointer"
                data-scroll-nav="5"
                onClick={handleClickScroll}
              >
                Mừng cưới
              </a>
            </div>
          </nav>
        </div>
      </header>
      <div className="md:hidden navbar bg-base-100 z-[100] px-5 py-5 sticky top-0 backdrop-blur-lg bg-white/70 shadow">
        <div className="flex-1">
          <h1 className="font_sacramento">
            <a
              className="flex items-center justify-center gap-1 text-3xl"
              href="/"
            >
              Nam
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30.22 30.01"
                width={11}
                height={11}
                className="ml-0.5"
              >
                <defs />
                <g id="a" />
                <g id="b">
                  <g id="c">
                    <path
                      className="d"
                      d="M13.69,30.01c-.66-4.72-4.16-8.45-7.36-11.99S-.1,10.37,0,5.61c.02-1.06,.22-2.14,.75-3.06C2.1,.19,5.39-.55,7.93,.41c2.54,.97,4.37,3.26,5.51,5.72,1.33-2.73,3.78-4.97,6.72-5.72,2.94-.75,6.33,.15,8.27,2.48,2.38,2.86,2.2,7.2,.54,10.52s-4.52,5.87-7.33,8.3c-2.81,2.43-5.71,4.92-7.47,8.19"
                    ></path>
                  </g>
                </g>
              </svg>{" "}
              Thành
            </a>
          </h1>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              onClick={handleClickDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentcolor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                ></path>
              </svg>
            </label>
            {enableDropdown && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="py-1">
                  <a onClick={handleClickHome}>Home</a>
                </li>
                <li className="py-1">
                  <a data-scroll-nav="1" onClick={handleClickScroll}>
                    Album ảnh
                  </a>
                </li>
                <li className="py-1">
                  <a data-scroll-nav="2" onClick={handleClickScroll}>
                    Nhà gái
                  </a>
                </li>
                <li className="py-1">
                  <a data-scroll-nav="3" onClick={handleClickScroll}>
                    Nhà trai
                  </a>
                </li>
                <li className="py-1">
                  <a data-scroll-nav="4" onClick={handleClickScroll}>
                    Gửi lời chúc
                  </a>
                </li>
                <li className="py-1">
                  <a data-scroll-nav="5" onClick={handleClickScroll}>
                    Mừng cưới
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
