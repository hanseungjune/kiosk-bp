/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const useGetVideo = (videoRef) => {
    const getVideo = () => {
        navigator.mediaDevices
          .getUserMedia({
            video: true,
          })
          .then((stream) => {
            let video = videoRef.current;
            if (video.paused) {
              video.srcObject = stream;
              video.play();
            }
          })
          .catch((err) => {
            console.error(err);
          });
      };
    
      useEffect(() => {
        getVideo();
      }, [videoRef, getVideo]);
}

export default useGetVideo