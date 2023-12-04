import useHeart from "@/hooks/useHeart";
const HeartFall = () => {
  useHeart();

  return (
    <canvas
      id="canvas"
      className="fixed z-[999] w-full h-full pointer-events-none"
    ></canvas>
  );
};

export default HeartFall;
