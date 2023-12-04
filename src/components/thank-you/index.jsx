import Image from "next/image";

const ThankYou = () => {
  return (
    <section className="hero scroll-mt-20 mt-20 bg-cover bg-center md:min-h-[500px] w-full relative">
      <div className="hero-overlay bg-white/10 z-20"></div>
      <Image
        src="/images/bg-7.webp"
        alt=""
        className="object-cover object-center pointer-events-none z-10"
        fill
        loading="lazy"
      />
      <div className="container m-auto flex flex-col relative z-50 items-center px-5 py-20">
        <h3 className="text-5xl md:text-[100px] text-white font-black text-center drop-shadow">
          Thank you!
        </h3>
        <p className="text-3xl md:text-[50px] text-white font-bold text-center drop-shadow">
          See you at the wedding!
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
