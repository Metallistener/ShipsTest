import { useEffect, useRef, type FC } from "react";
import Video from "~/assets/video/«Терракотовый воин» — Xi`an.mp4";

export const VideoBackground: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <video
      ref={videoRef}
      src={Video}
      muted
      className="fixed top-0 right-0 left-0 bottom-0 object-cover h-full blur-xl brightness-[0.5]"
    />
  );
};
