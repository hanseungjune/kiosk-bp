/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import KioskBranchLocation from "../components/button/KioskBranchLocation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const HomeSemiDiv = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  column-gap: 10px;
  row-gap: 10px;
  width: 90vw;
  height: 90%;
`;

function Home() {
  const [items, setItems] = useState([]);

  const HTTP_API = process.env.REACT_APP_API_MAIN_KEY;
  console.log(HTTP_API);
  const handleBranchSet = async () => {
    const response = await axios({
      method: "GET",
      url: `${HTTP_API}/kiosk/home/kiosk-list`,
    });
    setItems(response.data);
  };

  useEffect(() => {
    handleBranchSet();
  }, []);

  return (
    <div css={HomeDiv}>
      <div css={HomeSemiDiv}>
        {items.map((item) => {
          return (
            <KioskBranchLocation key={item.id} id={item.id} name={item.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
