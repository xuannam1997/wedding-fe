import useCountDown from "@/hooks/useCountDown";
import Image from "next/image";

const Brides = () => {
  const { days, hours, minutes, seconds } = useCountDown(
    "Dec 15 2023 17:00:00"
  );

  return (
    <section
      data-scroll-index="2"
      className="py-10 md:py-20 scroll-mt-20"
      id="bride"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-3 px-5">
          <h2 className="text-2xl md:text-[40px] uppercase tracking-widest text-center">
            Tiệc cưới nhà gái
          </h2>
          <p className="md:text-lg text-zinc-500 text-center">
            Sự hiện diện của quý vị là niềm vinh hạnh cho gia đình chúng tôi
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 234.1 91.43"
            width={90}
            className="mt-5"
          >
            <defs />
            <g id="a" />
            <g id="b">
              <g id="c">
                <g>
                  <path
                    className="d"
                    d="M229.2,48.2s-5.46-4.49-5.46-7.35c-.09-2.92,4.27-3.65,5.18-.93,.91-2.72,5.27-1.99,5.18,.93,0,2.86-4.9,7.35-4.9,7.35Z"
                  ></path>
                  <path
                    className="d"
                    d="M5.46,48.2S0,43.72,0,40.85c-.09-2.92,4.27-3.65,5.18-.93,.91-2.72,5.27-1.99,5.18,.93,0,2.86-4.9,7.35-4.9,7.35Z"
                  ></path>
                  <g>
                    <path
                      className="e"
                      d="M81.03,69.05c2.19,6.36,6.8,10.06,14.6,11.69-6.4-4.14-12.03-9.24-14.6-11.69Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M123.18,68.9c-.07,1.83,2.82,1.89,2.83,.06,.07-1.83-2.82-1.89-2.83-.06Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M69.65,53.02c-4.33,4.91-6.4,11.8-3.56,18.15,.4-7.82,2.41-14.76,3.56-18.15Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M114.78,77.33c-.08,2.35,3.61,2.43,3.63,.08,.08-2.36-3.61-2.42-3.63-.08Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M97.45,80.61c-2.31-9.15-9.16-11.69-16.01-12.66,2.49,2.4,8.88,8.27,16.01,12.66Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M67.13,72.19c7.22-3.06,7.52-13.96,3.93-19.94-1,2.76-3.62,10.84-3.93,19.94Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M98.83,45.63c.07-1.84-2.83-1.9-2.84-.06-.07,1.84,2.83,1.91,2.84,.06Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M140.37,27.32c.05-1.62-2.47-1.65-2.48-.05-.06,1.61,2.47,1.66,2.48,.05Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M105.65,39.48c2.15-1.99-1.05-5.32-3.13-3.26-2.15,1.99,1.05,5.32,3.13,3.26Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M188.08,16.62c-1.32-1.05-3.34-1.08-4.71-.1-.5,.64-1.47-.12-.85-.7,4.11-3.34-2.26-8.62-4.57-3.44-2.24,6.74-9.75,13.15-16.13,18.02,6.6-2.37,15.41-3.28,12.82-1.29,.24-.09-10.53,.07-18.06,5.04,8.97-3.34,21.16-.13,28.91-5.37,4.1-2.81,6.2-8.77,2.59-12.16Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M146.47,18.77c-.72-3.32,7.36,4.01,7.32,12.67,1.65-9.24-4.7-16.9-3.74-26.07-2.63-3.49-8.26-.03-6.33,3.9,.12,.24,.04,.53-.18,.68-3.15-1.61-6.1-.47-5.76,3.82,1.81,7.69,12.32,9.79,14.94,17.22-.27-7.74-5.96-12-6.25-12.21Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M149.31,59.96c-9.25-.94-16.6-4.81-19.25-6.38,.69,7.86,20.56,9.95,23.98,6.58-1.62,.03-3.2-.05-4.73-.2Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M154.28,59.08c-5.75-4.95-16.26-7.78-23.58-6.37,3.1,1.82,12.43,6.65,23.58,6.37Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M119.95,54.5c4.46-7.22,4.04-18.12,1.21-25.81-.89,3.44-2.74,12.66-1.21,25.81Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M173.11,40.83c1.91,.07,2.08-2.9,.19-3.05-2.06-.23-2.25,3.03-.19,3.05Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M119.96,29.07c-5.13,6.3-4.97,17.77-1.17,24.66-1.29-12.08,.24-20.8,1.17-24.66Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M170.41,49.09c-.87,2.42-1.72-2.61-2.34-2.81,.13,1.13,1.08,5.2-.64,6.64-.29-.05-.49-.32-.44-.61,.56-3.46,.36-5.36-.33-6.7,.47,2.81-3.5,7.53-3.37,10.79,.7,1.5,2.57,.57,2.88-.81,.22-.65,1.23-.3,1.01,.34-.13,.4-.07,.75,.15,1.04,.72,.83,2.1,.77,2.78-.31,1.18-.99-.39-5.06,1.46-3.59,2.37,3.1,4.31-.49,2.2-3.05-.64-1-2.63-3.44-5.15-4.78,.72,.88,1.41,2.12,1.78,3.84Z"
                      fill="none"
                    />
                    <path
                      className="e"
                      d="M153.06,17.6c1.4,4.66,2.81,9.47,1.66,14.64,3.63-7.29,2.31-17.04,2.29-17.16,1.92-3.12,2.4,11.14-1.68,18.31,8.19-7.21,10.02-15.12,10.04-15.21,2.63-2-.44,6.49-5.95,12.65,6.75-5.47,22.38-16.05,16.64-25.15-2.88-3.15-7.52,2.17-8.26,.36,.29-5.71-8.23-6.88-9.52-1.32-.08,.43-.69,.57-.95,.2-8.4-9.17-6.49,8.41-4.27,12.68Z"
                      fill="none"
                    />
                    <path
                      className="d"
                      d="M190.89,19.83c-.38-3.29-3.12-5.68-6.33-4.97,1.69-3.74-2.73-7.53-6.02-4.89,1.02-5.35-5.58-8.13-9.71-4.81-.56-5.88-9.01-7.15-11.27-1.68-1.88-2.91-6.3-3.11-7.25,.61-3.2-2.97-8.64-.14-7.97,4.2-3.32-1.2-6.26,2.21-5.62,5.62,.55,3.94,4.67,7.18,7.76,9.5,13.12,9,7.55,15.36-3.6,22.44,.7-1.78,1.2-3.86,1.42-6.04,2.3-.33,4.57-9.76,2.01-7.02,.18,1.82-.44,4.13-1.91,5.56,.14-3.25-.36-6.59-1.71-9.38,2.25-2.01-1.01-5.49-3.17-3.36-1.74,1.57,0,4.62,2.23,3.88,2.57,5.37,1.8,12.92-.51,17.37-5.04,3.04-11.47,5.91-18.36,8.14,4.79-7.99,4.43-20.89,.33-28.51-8.03,5.56-7.75,21.77-2.49,29.2-8.86,2.81-17.81,4.78-26.77,7.23,1.42-1.46,2.67-3.31,3.66-5.46,5.44-3.51,6.5-8.04,15.58-7.52-1.7-2.63-7.03-.25-8.79,.7,1.57-2.76,2.36-5.95,2.38-9.55,3.76-.69,3.23-6.6-.63-6.57-4.12-.17-4.55,6.26-.44,6.63-.05,6.26-2.46,11.04-7.36,14.54,.93-2.49,1.49-5.14,1.6-7.67,2.78-.55,2.36-4.93-.51-4.91-2.94-.14-3.46,4.4-.57,4.92-.4,17-13.29,16.48-25.32,22.03,3.93-5.41,3.78-14.55-.56-19.55-6.65,4.85-9.74,14.9-5.06,22.47-7.98,5.01-16.7,11.2-19.29,18.44,7.08-8.88,18.85-19.21,32.92-23.5,2.29,8.33,8.23,12.9,18.63,14.34,.36,.03,.63-.29,.58-.64-1.13-5.79-4.08-12.58-16.57-14.64,11.53-3.06,40.66-16.29,34.56,7.51-3.67-.33-4.13,5.44-.48,5.74,3.15,.41,4.39-4.23,1.52-5.47,1.28-3.4,1.2-8.64-.89-11.94,2.08,1.19,4.04,2.75,5.71,4.58-1.91,2.32,1.56,5.44,3.67,3.31,2.07-1.86-.42-5.35-2.85-3.99-3.62-3.94-8.3-6.74-13.44-7.38,6.3-1.7,12.87-3.65,18.85-6.14,.6,9.63,24.04,12.54,27.26,6.36-4.72-5.67-15.14-8.67-22.96-8.25,6.73-2.65,13.4-9.78,20.49-9.44,7.91,.03,16.15-.45,9.48,10.76-2.3,2.59-.28,7.72,3.18,4.74,1.85,2.8,5.72,.31,5.41-2.63,9.22,2.53,.92-11.27-5.52-11.44-.43-.4-.93-.74-1.46-1.04,2.51-.08,4.62-.5,6.43-1.28,2.21,2.66,6.26-1.04,3.83-3.5-1.78-1.97-5.23,.03-4.35,2.56-6.94,2.88-15.21-.86-22.56,1.7,9.32-15.66,41.71,.04,42.79-21.93Zm-51.79,8.7c-1.61,0-1.55-2.54,.05-2.48,1.6,0,1.56,2.54-.05,2.48Zm-37.27,9.27c.01-2.93,4.62-2.83,4.51,.09-.01,2.93-4.62,2.83-4.51-.09Zm-5.85,7.77c0-1.84,2.91-1.78,2.84,.06-.01,1.85-2.91,1.78-2.84-.06Zm-23.28,19.69c-.91,3.12-2.59,5.86-5.57,6.93,.3-9.1,2.93-17.18,3.93-19.94,2.22,3.8,2.87,8.68,1.65,13.01Zm-3.05-12.24c-1.14,3.39-3.15,10.33-3.56,18.15-2.84-6.35-.78-13.24,3.56-18.15Zm11.38,16.02c2.57,2.45,8.21,7.55,14.6,11.69-7.8-1.63-12.42-5.33-14.6-11.69Zm16.41,11.56c-7.13-4.39-13.51-10.25-16.01-12.66,6.85,.96,13.69,3.51,16.01,12.66Zm20.96-3.2c-.02,2.35-3.7,2.28-3.63-.08,.02-2.35,3.7-2.28,3.63,.08Zm6.22-9.89c1.83,0,1.77,2.9-.06,2.83-1.83-.01-1.77-2.89,.06-2.83Zm-4.67-13.03c-1.53-13.15,.31-22.37,1.21-25.81,2.83,7.69,3.25,18.59-1.21,25.81Zm.01-25.43c-.93,3.86-2.46,12.58-1.17,24.66-3.8-6.89-3.96-18.36,1.17-24.66Zm53.21,8.71c1.98,0,1.92,3.13-.06,3.06-1.98,0-1.92-3.13,.06-3.06Zm.61,12.25c2.1,2.56,.18,6.15-2.2,3.05-.1-.26-.39-.4-.66-.31-.89,.73,.34,2.63-.8,3.9-.68,1.07-2.06,1.13-2.78,.31-.23-.29-.28-.64-.15-1.04,.22-.65-.8-.99-1.01-.34-.3,1.37-2.19,2.31-2.88,.81-.13-3.26,3.83-7.98,3.37-10.79,.69,1.34,.89,3.24,.33,6.7-.05,.29,.15,.57,.44,.61,1.73-1.45,.78-5.5,.64-6.64,2.73,6.75,3.05,1.92,.56-1.04,2.52,1.34,4.51,3.78,5.15,4.78ZM151.54,3.86c1.97-3.64,4.44-.14,6.33,1.26,1.81-5.52,9.71-5.51,9.93,.92,.74,1.8,5.41-3.51,8.26-.36,5.75,9.12-9.88,19.66-16.63,25.15,5.5-6.16,8.58-14.65,5.95-12.65-.02,.09-1.85,8-10.04,15.21,4.07-7.16,3.6-21.43,1.68-18.31,.02,.12,1.34,9.87-2.29,17.16,2.44-9.99-5.66-18.63-3.18-28.38Zm-5.86,19.12c-3.04-2.33-7.27-5.31-7.9-9.22-.34-4.28,2.6-5.42,5.76-3.81,.22-.15,.29-.44,.18-.68-1.94-3.92,3.7-7.39,6.33-3.9-.96,9.16,5.39,16.82,3.74,26.07-.42-8.94-6.45-14.19-7.44-13.42-.22,1.58,6.11,4.18,6.37,12.96-1.26-3.38-4.28-5.9-7.04-8Zm-5.72,38.04c-7.21-1.4-9.3-5.44-9.9-7.44,2.54,1.96,15.59,7.25,23.98,6.58-1.75,1.06-5.81,2.47-14.08,.86Zm14.32-1.94c-11.15,.28-20.48-4.55-23.58-6.37,7.33-1.41,17.83,1.42,23.58,6.37Zm31.21-30.31c-7.77,5.25-19.93,2.03-28.91,5.37,7.5-4.96,18.34-5.13,18.06-5.04,2.6-2-6.22-1.08-12.82,1.29,6.04-4.55,13.41-10.98,15.78-17.07,.66-3.96,6.59-4.23,6.2,.18,.33,1.15-2.91,3.38-.63,3.16,8.02-4.09,8.62,9.03,2.31,12.1Z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="mt-10 text-white">
        <div className="container hero relative m-auto">
          <Image
            src="/images/bg-3.jpg"
            alt=""
            className="object-cover object-center pointer-events-none z-1 rounded-lg opacity-90"
            fill
            loading="lazy"
            sizes="100vw"
          />
          <div className="hero-overlay bg-black z-10" />
          <div className="flex flex-col-reverse lg:flex-row gap-5 md:gap-20 items-stretch md:items-center p-5 py-10 md:p-20 md:py-24 z-20">
            <div className="p-10 rounded-lg backdrop-blur-lg bg-white/40 mt-5 md:mt-0">
              <div className="grid w-full max-w-[350px] md:max-w-[350px]">
                <div className="grid grid-cols-7 gap-1 justify-items-center">
                  <div className="w-10 h-10 flex items-center justify-center font-semibold">
                    T2
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center font-semibold">
                    T3
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center font-semibold">
                    T4
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center font-semibold">
                    T5
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center font-semibold">
                    T6
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center font-semibold">
                    T7
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center font-semibold">
                    CN
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 justify-items-center">
                  <div className="w-10 h-10 flex items-center justify-center"></div>
                  <div className="w-10 h-10 flex items-center justify-center"></div>
                  <div className="w-10 h-10 flex items-center justify-center"></div>
                  <div className="w-10 h-10 flex items-center justify-center"></div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    1
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    2
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    3
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    4
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    5
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    6
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    7
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    8
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    9
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    10
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    11
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    12
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    13
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    14
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-700 text-white">
                    15
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    16
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    17
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    18
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    19
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    20
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    21
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    22
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    23
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    24
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    25
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    26
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    27
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    28
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    29
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    30
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    31
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center"></div>
                  <div className="w-10 h-10 flex items-center justify-center"></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-[32px] uppercase tracking-wider font-semibold">
                Tiệc cưới tại gia đình&nbsp;
                <br className="md:hidden" />
                nhà gái
              </h3>
              <div className="mt-7 text-xl leading-9">
                <p>Được tổ chức vào lúc 17 giờ 00 phút</p>
                <p>Thứ 6 ngày 15 / 12 / 2023</p>
                <p>
                  Địa chỉ: TDP Nhân Vực, Thị trấn Đạo Đức, Bình Xuyên, Vĩnh Phúc
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 mt-7">
                <div className="rounded-lg backdrop-blur-sm bg-white/30 p-5 flex items-center">
                  <div className="grid grid-flow-col gap-5 text-center w-full">
                    <div className="flex flex-col justify-center items-center">
                      <span className="font-mono text-3xl">
                        <span>{days}</span>
                      </span>
                      ngày
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="font-mono text-3xl">
                        <span>{hours}</span>
                      </span>
                      giờ
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="font-mono text-3xl">
                        <span>{minutes}</span>
                      </span>
                      phút
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <span className="font-mono text-3xl">
                        <span>{seconds}</span>
                      </span>
                      giây
                    </div>
                  </div>
                </div>
                <a
                  className="hero relative rounded-lg min-h-[100px] w-full md:max-w-[200px] cursor-pointer text-white"
                  target="_blank"
                  href="https://maps.app.goo.gl/Tp8pHQu5rFfoV7pF8"
                >
                  <Image
                    src="/images/thanh_map.png"
                    alt=""
                    className="object-cover object-center pointer-events-none z-10 rounded-lg opacity-90"
                    fill
                    loading="lazy"
                    sizes="100vw"
                  />
                  <div className="hero-overlay bg-black rounded-lg z-10"></div>
                  <div className="flex gap-4 justify-between w-full p-5 z-50">
                    <span className="text-lg">Chỉ đường</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      x={0}
                      y={0}
                      viewBox="0 0 448.011 448.011"
                      width={25}
                    >
                      <g>
                        <path
                          d="m438.731 209.463-416-192c-6.624-3.008-14.528-1.216-19.136 4.48a15.911 15.911 0 0 0-.384 19.648l136.8 182.4-136.8 182.4c-4.416 5.856-4.256 13.984.352 19.648 3.104 3.872 7.744 5.952 12.448 5.952 2.272 0 4.544-.48 6.688-1.472l416-192c5.696-2.624 9.312-8.288 9.312-14.528s-3.616-11.904-9.28-14.528z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                </a>
                <div className="mt-1">
                  <a
                    className="btn glass !text-white"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1-22Z7vi9aXaf_AV5_sxahj-WEQZslp7F_dz2MghSwh4/edit#gid=0"
                  >
                    Đăng ký đi xe về nhà gái
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brides;
