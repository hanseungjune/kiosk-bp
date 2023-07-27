/** @jsxImportSource @emotion/react */
import KioskBranchLocation from "../components/button/KioskBranchLocation";
import { useEffect, useState } from "react";
import { HomeDiv, HomeSemiDiv } from "../style/rentStyle";
import axios from "axios";

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
