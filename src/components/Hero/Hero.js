import React from 'react'
import Input from '../Input/Input'
import Header from '../Header/Header'
import './Hero.scss'
import Footer from '../Footer/Footer'

const Hero = () => {
    return (
        <>
            <Header />
            <div className="hero">
                <div className="boxed">
                    <div className="hero_title">url shortener</div>
                    <Input />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Hero