import React from 'react'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'
import { InfoSection } from '../../Components/index'
import Pricing from '../../Components/Pricing/Pricing'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing/>
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home
