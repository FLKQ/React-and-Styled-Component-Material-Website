import React from 'react';
import { Button } from '../../globalStyles';
import {PricingSection, PricingWrapper, PricingHeader, PricingContainer, PricingCard, PricingCardIcon, PricingCardPack, PricingCardPrice, PricingCardPeriod,
PricingCardFeatures, PricingCardFeature, PricingCardInfo} from './Pricing.elements'

import { FaCookieBite, FaCookie, FaDollarSign} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Pricing = () => {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
        <PricingSection>
            <PricingWrapper>
                <PricingHeader>Our Services</PricingHeader>
                    <PricingContainer>
                        <PricingCard to='/sign-up'>
                            <PricingCardInfo>
                            <PricingCardIcon>
                                <FaCookieBite/>
                            </PricingCardIcon>
                            <PricingCardPack>
                                Starter Pack
                            </PricingCardPack>
                            <PricingCardPrice>
                                $99.99
                            </PricingCardPrice>
                            <PricingCardPeriod>
                                Per Month
                            </PricingCardPeriod>
                            <PricingCardFeatures>
                                <PricingCardFeature>100 New Users</PricingCardFeature>
                                <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                <PricingCardFeature>Retargeting Analytics</PricingCardFeature>                                
                            </PricingCardFeatures>
                            <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard>
                            <PricingCardInfo>
                            <PricingCardIcon>
                                <FaCookieBite/>
                            </PricingCardIcon>
                            <PricingCardPack>
                                Starter Pack
                            </PricingCardPack>
                            <PricingCardPrice>
                                $99.99
                            </PricingCardPrice>
                            <PricingCardPeriod>
                                Per Month
                            </PricingCardPeriod>
                            <PricingCardFeatures>
                                <PricingCardFeature>100 New Users</PricingCardFeature>
                                <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                <PricingCardFeature>Retargeting Analytics</PricingCardFeature>                                
                            </PricingCardFeatures>
                            <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>                    
                        <PricingCard>
                            <PricingCardInfo>
                            <PricingCardIcon>
                                <FaCookieBite/>
                            </PricingCardIcon>
                            <PricingCardPack>
                                Starter Pack
                            </PricingCardPack>
                            <PricingCardPrice>
                                $99.99
                            </PricingCardPrice>
                            <PricingCardPeriod>
                                Per Month
                            </PricingCardPeriod>
                            <PricingCardFeatures>
                                <PricingCardFeature>100 New Users</PricingCardFeature>
                                <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                                <PricingCardFeature>Retargeting Analytics</PricingCardFeature>                                
                            </PricingCardFeatures>
                            <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>                                                           
                    </PricingContainer>
            </PricingWrapper>         
        </PricingSection>
        </IconContext.Provider>
    )
}

export default Pricing
