import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaMagento } from 'react-icons/fa'
import {Button} from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput,FooterLinksContainer,FooterLinksWrapper,FooterLinksItems,
FooterLinkTitle,FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialIcon} from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join Our Exclusive Membership To Receive The Latest News And Trends
                </FooterSubHeading>
                <FooterSubText>
                    You Can Unsubscribe At Any Time
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                        <Button fontBig >Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to = '/sign-up'>How It Works</FooterLink>
                            <FooterLink to = '/'>Testimonials</FooterLink>
                            <FooterLink to = '/'>Careers</FooterLink>
                            <FooterLink to = '/'>Investors</FooterLink>
                            <FooterLink to = '/'>Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                Сontact Us
                            </FooterLinkTitle>
                            <FooterLink to = '/sign-up'>How It Works</FooterLink>
                            <FooterLink to = '/'>Testimonials</FooterLink>
                            <FooterLink to = '/'>Careers</FooterLink>
                            <FooterLink to = '/'>Investors</FooterLink>
                            <FooterLink to = '/'>Terms of Service</FooterLink>
                        </FooterLinksItems>
                        </FooterLinksWrapper>
                            <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>
                            <FooterLink to = '/sign-up'>How It Works</FooterLink>
                            <FooterLink to = '/'>Testimonials</FooterLink>
                            <FooterLink to = '/'>Careers</FooterLink>
                            <FooterLink to = '/'>Investors</FooterLink>
                            <FooterLink to = '/'>Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>
                                Social Media
                            </FooterLinkTitle>
                            <FooterLink to = '/sign-up'>How It Works</FooterLink>
                            <FooterLink to = '/'>Testimonials</FooterLink>
                            <FooterLink to = '/'>Careers</FooterLink>
                            <FooterLink to = '/'>Investors</FooterLink>
                            <FooterLink to = '/'>Terms of Service</FooterLink>
                        </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to = "/">
                        <SocialIcon/>
                        FLKQ
                    </SocialLogo>
                    <WebsiteRights>FLKQ 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target = "_blank" aria-label = "Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target = "_blank" aria-label = "Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target = "_blank" aria-label = "Youtube" rel="noopener noreferrer">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target = "_blank" aria-label = "Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target = "_blank" aria-label = "Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>            
        
    )
}

export default Footer;

