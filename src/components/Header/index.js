import React, {useState} from 'react';
import { Button } from '../ButtonElements';
import Video from '../../videos/HeaderVideo.mp4';
import { HeaderContainer, HeaderBg, VideoBg, HeaderContent, HeaderH1, HeaderP, HeaderBtnWrapper, ArrowForward, ArrowRight } from './HeaderElements';

const HeaderSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeaderContainer>
      <HeaderBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeaderBg>
      <HeaderContent>
        <HeaderH1>MARVEL CINEMATIC UNIVERSE</HeaderH1>
        <HeaderP>Everything you need to know about Marvel Cinematic Universe</HeaderP>
        <HeaderBtnWrapper>
            <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact={true} offset={-80}>
                I CAN DO THIS ALL DAY {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
        </HeaderBtnWrapper>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default HeaderSection;
