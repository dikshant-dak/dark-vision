import React from 'react';
import Icon1 from '../../images/img10.jpg';
import Icon2 from '../../images/img5.png';
import Icon3 from '../../images/img12.jpg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP  } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Marvel Comics</ServicesH2>
            <ServicesP>Get the ultimate experience of marvel comics by just one click</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Movies & Series</ServicesH2>
            <ServicesP>Every MCU movie and series ever released with description and preview</ServicesP>
        </ServicesCard>
        <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Fox & Sony Universe</ServicesH2>
            <ServicesP>Access the marvel content other than marvel cinematic universe</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
export default Services;
