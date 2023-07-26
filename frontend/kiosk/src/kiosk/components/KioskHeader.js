/** @jsxImportSource @emotion/react */
import KioskAddress from './address/KioskAddress'
import KioskHomeBtn from './button/KioskHomeBtn'
import KioskLogoimg from '../assets/KioskLogo.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { KioskHeaderStyle, KioskLocation, KioskLogo } from '../style/style'

const KioskHeader = () => {
  const { id } = useParams();
  const [isHome, setIsHome] = useState(false);
  
  const setIsHomeBtn = () => {
    if (window.location.pathname === `/kiosk/${id}`) {
      setIsHome(true)
    }
    else {
      setIsHome(false)
    }
  }
  useEffect(() => {
    setIsHomeBtn();
  }, [isHome])

  return (
    <div css={KioskHeaderStyle}>
      <div css={KioskLogo}>
        {isHome ? <img src={KioskLogoimg} alt='키오스크로고' /> : <KioskHomeBtn />}
      </div>
      <div css={KioskLocation}>
        <KioskAddress />
      </div>
    </div>
  )
}

export default KioskHeader;