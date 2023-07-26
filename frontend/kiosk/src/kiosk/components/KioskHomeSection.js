/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import KioskRentBtn from "./button/KioskRentBtn";
import KioskReturnBtn from "./button/KioskReturnBtn";
import KioskWeather from "./weather/KioskWeather";
import KioskRemoveEventListener from "./removeEvent/KioskRemoveEventListener";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const KioskSectionStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid black; */

  height: 75vh;
`;

const KioskButtons = css`
  position: relative;

  margin-left: 3vw;
  margin-right: 3vw;

  width: 60vw;
  height: 50vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const KioskHomeSection = () => {
  const { id } = useParams();
  const [rentCnt, setRentCnt] = useState(0);
  const [returnCnt, setReturnCnt] = useState(0);

  const HTTP_API = process.env.REACT_APP_API_MAIN_KEY;
  const ShowCnt = async (id) => {
    if (id) {
      const response = await axios({
        method: "GET",
        url: `${HTTP_API}/kiosk/home/brolly/${id}`,
      });
      setRentCnt(response.data.brollyCnt);
      setReturnCnt(response.data.emptyCnt);
    }
  };

  useEffect(() => {
    if (id) {
      ShowCnt(id);
    }
  }, [id]);

  return (
    <div css={KioskSectionStyle}>
      <div css={KioskButtons}>
        <KioskRentBtn rentCnt={rentCnt} />
        <KioskRemoveEventListener />
        <KioskReturnBtn returnCnt={returnCnt} />
      </div>
      <KioskWeather />
    </div>
  );
};

export default KioskHomeSection;
