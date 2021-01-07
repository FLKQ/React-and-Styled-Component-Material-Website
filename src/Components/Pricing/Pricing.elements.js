import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCookieBite, FaCookie, FaDollarSign} from 'react-icons/fa';


export const PricingSection = styled.section`
background: #4b59f7;
padding: 100px 0 160px;
display: flex;
flex-direction: column;
justify-content: center;


`;

export const PricingWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;

`;

export const PricingHeader = styled.h1`
color: #fff;
font-size: 48px;
margin-bottom: 24px;
text-align: center;

`;

export const PricingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const PricingCardInfo = styled.div`
display: flex;
flex-direction: column;
height: 500px;
padding: 24px;
align-items: center;
color: #fff;
`;

export const PricingCard = styled(Link)`
background: #242424;
width: 280px;
height: 500px;
text-decoration: none;
box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
border-radius: 4px;

&:nth-child(2){
    margin: 24px;
}
`;

export const PricingCardIcon = styled(FaCookieBite)`
margin: 24px 0;

`;

export const PricingCardPack = styled.h2`
margin-bottom: 5px;
font-size: 24px;

`;

export const PricingCardPrice = styled.h2`
font-size: 40px;

`;

export const PricingCardPeriod = styled.h2`
font-size: 14px;
margin-bottom: 24px;

`;

export const PricingCardFeatures = styled.ul`
margin: 16px 0 32px;
list-style: none;
display: flex;
align-items: center;
flex-direction: column;
color: #a9b3c1;


`;

export const PricingCardFeature = styled.li`
margin-bottom: 10px;
`;

