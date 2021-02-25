import React, {useState, useEffect, useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {Button} from '../../globalStyles'
import { Nav, NavbarContainer,NavLogo,NavIcon, MobileIcon, NavMenu, NavItem, NavLinks,NavItemBtn,NavBtnLink } from './Navbar.elements';



const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
    
    window.addEventListener('resize', showButton);

    let servicesReference = useRef(null);
    let CurrentWidth = window.innerWidth;

    

    const scrollToProducts = () => {
        if(CurrentWidth <=1024){
            window.scrollTo({ top: 3700, behavior: "smooth" });
        }else{
            window.scrollTo({ top: 2350, behavior: "smooth" });
        };
    }

    const scrollToHome = () => 
        window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollToServices = () => {
    if(CurrentWidth <=1024){
        window.scrollTo({ top: 1150, behavior: "smooth" });
    }else{
        window.scrollTo({ top: 850, behavior: "smooth" });
    };
}
        const scrollToSignUp = () => 
        window.scrollTo({ top: 10000, behavior: "smooth" });
    

    

    return (
        <>
            <IconContext.Provider value = {{color:'#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                                FLKQ
                            </NavLogo>
                            <MobileIcon onClick = {handleClick} 
                            
                            > {click ? <FaTimes/> : <FaBars/> }
                            </MobileIcon>
                            <NavMenu onCLick = {handleClick} click={click}> 
                                <NavItem>
                                    <NavLinks to = '/' onClick = {() => {scrollToHome(); handleClick() }}>Home</NavLinks>
                                </NavItem>                                                      
                                <NavItem>
                                    <NavLinks to = '/' onClick= {() => {scrollToServices(); handleClick()}} >Services</NavLinks>
                                </NavItem>                                                       
                                <NavItem>
                                    <NavLinks to = '/' onClick= {() => {scrollToProducts(); handleClick()}}>Products</NavLinks>
                                </NavItem>
                                <NavItemBtn>
                                    {button ? (
                                        <NavBtnLink to="/">
                                            <Button primary onClick= {() => {scrollToSignUp(); handleClick()}}>Sign Up</Button>
                                        </NavBtnLink>
                                    ): (
                                        <NavBtnLink to="/">
                                            <Button fontBig primary onClick= {() => {scrollToSignUp(); handleClick()}}>
                                                Sign Up
                                            </Button>
                                        </NavBtnLink>
                                    )}
                                </NavItemBtn>
                             </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
