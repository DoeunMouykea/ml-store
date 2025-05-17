import React from 'react'
import Slider from '../components/Slider'
import Features from '../components/Features'
import LatestProduct from '../components/LatestProduct'
import Lookbok from '../components/Lookbok'

export default function Home() {
    return (
        <>
            <Slider />
            <Features />
            <LatestProduct />
            <Lookbok />
        </>
    )
}
