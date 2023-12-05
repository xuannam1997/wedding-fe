import { useEffect, useMemo, useState } from "react";

const useAudio = (url) => {
  const audio = useMemo(
    () => typeof Audio !== "undefined" && new Audio(url),
    [url]
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      audio.load();
      // setPlaying(false);
    });

    return () => {
      audio.removeEventListener("ended", () => {
        audio.load();
        // setPlaying(false);
      });
    };
  }, [audio]);

  return [playing, toggle];
};

export default useAudio;
