import { useEffect } from "react";
import Image from "next/image";
import scrollToTop from "../../common/scrollToTop";

const ScrollToTop = ({ topText }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <a
      href="#"
      className={`to_top ${
        topText
          ? ""
          : "bg-gray rounded-full icon-40 flex items-center justify-center"
      }`}
    >
      <Image
        src="/images/up.png"
        alt="Banner"
        className="block text-[#FFF]"
        width={12}
        height={12}
      />

      {topText && <small>Top</small>}
    </a>
  );
};

export default ScrollToTop;
