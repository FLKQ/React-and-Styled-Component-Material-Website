import Styled from 'styled-components';
import { FaMagento } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'  


export const Nav = Styled.nav`
background: #101522;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavbarContainer = Styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;


${Container}
`;

export const NavLogo = Styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const NavIcon = Styled(FaMagento)`
margin-right: 0.5rem;


`;

export const MobileIcon = Styled.div`
display:none;

@media screen and (max-width: 960px){
    display: block;
    position:absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}

`;

export const NavMenu = Styled.ul`
        display:flex;
        align-items: center;
        list-style: none;
        text-align: center;

@media screen and (max-width: 960px){
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
}
`;

export const NavItem = Styled.li`
height: 80px
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 2px solid #4b59f7;
}

@media screen and (max-width: 960px){
    width: 100%;

    &:hover {
        border: none
    }
}

`;

export const NavLinks = Styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;


@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
        color: #4b59f7
        transition: all 0.3 ease;
    }
}

`;

export const NavItemBtn = Styled.li`
@media screen and (max-width: 960px){
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height; 120px;
}

`;

export const NavBtnLink = Styled(Link)`
display:flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;


`;