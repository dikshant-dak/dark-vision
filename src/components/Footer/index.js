import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                    <FooterLink to="/signin">How it works</FooterLink>
                    <FooterLink to="/signin">Testimonials</FooterLink>
                    <FooterLink to="/signin">Careers</FooterLink>
                    <FooterLink to="/signin">Investors</FooterLink>
                    <FooterLink to="/signin">Terms of Service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/signin">Contact</FooterLink>
                    <FooterLink to="/signin">Support</FooterLink>
                    <FooterLink to="/signin">Destinations</FooterLink>
                    <FooterLink to="/signin">Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to="/signin">Submit Video</FooterLink>
                    <FooterLink to="/signin">Ambassadors</FooterLink>
                    <FooterLink to="/signin">Agency</FooterLink>
                    <FooterLink to="/signin">Influencer</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to="/signin">Instagram</FooterLink>
                    <FooterLink to="/signin">Facebook</FooterLink>
                    <FooterLink to="/signin">Youtube</FooterLink>
                    <FooterLink to="/signin">Twitter</FooterLink>
                    <FooterLink to="/signin">Linkedin</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/" onClick={toggleHome}>DARK_VISION</SocialLogo>
                <WebsiteRights>DARK_VISION © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.youtube.com/" target="_blank" aria-label="Youtube">
                        <FaYoutube/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/dikshant-dak-55247919a/" target="_blank" aria-label="Linkedin">
                        <FaLinkedin/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
