import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TakeAPictureBtn, buttonDiv } from "../../style/returnStyle";
import useTimer from "../../hooks/useTimer";

const Camera = ({
  iscapture,
  setIscapture,
  videoRef,
  setLoading,
  photoRef,
  setOpen,
}) => {
  const { id } = useParams();
  const qrdata = useSelector((state) => state.qrCode.data);
  const { timeLeft, setTimeLeft, isActive, setIsActive } = useTimer(10);

  // 사진 찍기
  const takePicture = () => {
    setIsActive(!isActive);
    if (isActive) {
      const width = 839.68;
      const height = 629.75;

      let video = videoRef.current;
      let photo = photoRef.current;

      photo.width = width;
      photo.height = height;

      let ctx = photo.getContext("2d");
      ctx.drawImage(video, 0, 0, width, height);

      setIscapture(true);
    }
  };

  const saveImage = async () => {
    // 데이터 URL로 그대로 보내기
    const canvas = document.getElementById("$canvas");
    const imgURL = canvas.toDataURL("image/png");
    try {
      setLoading(true);
      const response = await axios({
        method: "POST",
        url: "https://bp.ssaverytime.kr:8080/api/brolly/return",
        data: {
          brollyName: qrdata,
          caseId: id,
          imgData: imgURL,
        },
      });
      console.log(response.data.success);

      if (!response.data.success) {
        clearImage();
        setOpen(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // clear out the image from the screen
  const clearImage = () => {
    setIscapture(false);
    // 10초로 세팅
    setTimeLeft(10);

    let photo = photoRef.current;
    let ctx = photo.getContext("2d");
    ctx.clearRect(0, 0, photo.width, photo.height);
  };
  return (
    <div css={buttonDiv}>
      {iscapture ? null : isActive ? null : (
        <button onClick={takePicture} class="takeAPictureBtn">
          촬영하기
        </button>
      )}
      {iscapture ? <button onClick={clearImage}>재촬영</button> : null}
      {iscapture ? <button onClick={saveImage}>확인</button> : null}
    </div>
  );
};

export default Camera;
