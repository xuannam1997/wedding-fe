"use client";
import useCountDown from "@/hooks/useCountDown";
import Image from "next/image";
const Banner = () => {
  const { days, hours, minutes, seconds } = useCountDown(
    "Dec 16 2023 00:00:00"
  );

  return (
    <section>
      <div
        className=" w-full bg-top bg-cover backdrop-blur flex relative"
        style={{
          height: "calc(100vh - 88px)",
        }}
      >
        <Image
          src="/images/JULI0308.jpg"
          alt="Maci"
          className="object-cover object-top pointer-events-none z-10"
          fill
          loading="lazy"
        />
        <div className="w-full h-full flex items-center bg-black/10 relative z-50">
          <div className="container m-auto flex items-center justify-center flex-col">
            <div className="relative">
              <h2 className="font-hello-honey text-white text-5xl md:text-[90px] lg:text-[120px] md:leading-[90px] lg:leading-[130px]">
                We're Getting Married
              </h2>
            </div>
            <p className="font_sacramento text-white text-4xl md:text-[80px] flex items-center gap-2 md:gap-3 mt-10">
              Nam
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30.22 30.01"
                className="md:ml-5 fill-white w-5 h-5 md:w-8 md:h-8"
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
            </p>
            <div className="count-down-clock">
              <div id="clock">
                <div className="box">
                  <div>{days}</div> <span>Ngày</span>
                </div>
                <div className="box">
                  <div>{hours}</div> <span>Giờ</span>
                </div>
                <div className="box">
                  <div>{minutes}</div> <span>Phút</span>
                </div>
                <div className="box">
                  <div>{seconds}</div> <span>Giây</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
