/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
///////////////////////////////// 모달 //////////////////////////////////////
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
///////////////////////////////// 모달 //////////////////////////////////////
import { useSelector } from "react-redux";
import {
  KioskCameraCheckDiv,
  SpinnerDiv,
  buttonCenter,
  buttonDiv,
  canvasDiv,
  canvasSize,
  countDownDivStyle,
  countDownStyle,
  videoSize,
} from "../style/returnStyle";
import useGetVideo from "../hooks/useGetVideo";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const KioskReturnCameraSection = ({audiofile}) => {
  const [iscapture, setIscapture] = useState(false);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const qrdata = useSelector((state) => state.qrCode.data);
  let videoRef = useRef(null);
  let photoRef = useRef(null);
  const navigate = useNavigate();

  useGetVideo(videoRef);

  // to take picture of user
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

  // save canvas Image in server
  const [loading, setLoading] = useState(false);

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

      if (!response.data.success) {
        clearImage();
        setOpen(true);
        setLoading(false);
      } else {
        // 정상 반납
        navigate(`/kiosk/${id}/return/complete/${1}/${1}`);
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

  // useInterval로 카운트다운을 하면서 애니메이션 구현하려고
  // useInterval
  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(
    () => {
      if (timeLeft <= 1) {
        takePicture();
        setTimeLeft("");
        setIsActive(false);
        return;
      }
      setTimeLeft((timeLeft) => timeLeft - 1);
    },
    isActive ? 1000 : null
  );

  return (
    <div css={KioskCameraCheckDiv}>
      <video ref={videoRef} css={videoSize}></video>
      <div css={canvasDiv}>
        <div css={countDownDivStyle({ isActive })}>
          <p css={countDownStyle({ isActive })}>{timeLeft}</p>
        </div>
        <canvas id="$canvas" css={canvasSize} ref={photoRef}></canvas>
      </div>
      <div css={buttonCenter}>
        <div css={buttonDiv}>
          {iscapture ? null : isActive ? null : (
            <button onClick={takePicture} class="takeAPictureBtn">
              촬영하기
            </button>
          )}
          {iscapture ? <button onClick={clearImage}>재촬영</button> : null}
          {iscapture ? <button onClick={saveImage}>확인</button> : null}
        </div>
      </div>
      <div css={SpinnerDiv}>
        {loading ? (
          <Stack
            sx={{
              zIndex: "990",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              width: "102vw",
              height: "102vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            spacing={5}
            direction="row"
          >
            <CircularProgress sx={{ color: "white" }} />
          </Stack>
        ) : null}
      </div>
      <div>
        <Dialog
          sx={{ width: "100vw" }}
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            sx={{
              backgroundColor: "#EEF1FF",
              fontFamily: "GangwonEduPowerExtraBoldA",
            }}
            fontSize={32}
            fontWeight={900}
          >
            {"우산이 인식되지 않았습니다."}
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: "#EEF1FF" }}>
            <DialogContentText
              sx={{ fontFamily: "GangwonEduPowerExtraBoldA" }}
              fontSize={20}
              fontWeight={700}
              id="alert-dialog-slide-description"
            >
              우산을 꼭 펼쳐서 촬영해주세요. 우산이 인식되지 않으면 반납 처리가
              되지않습니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ backgroundColor: "#EEF1FF" }}>
            <Button
              sx={{ fontFamily: "GangwonEduPowerExtraBoldA" }}
              onClick={handleClose}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default KioskReturnCameraSection;
