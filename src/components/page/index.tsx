'use client'
import { Element } from "react-scroll"
import HeroSection from "../hero/HeroSection"
import Header from "../shared/Header"
import About from "../about"
import MobileNav from "../shared/MobileNav"
import Banner from "../banner/Banner"

const Index = () => {
    return (
        <>
            <Header />
            <MobileNav />
            <Element name="home">
                <HeroSection />
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Banner />
        </>
    )
}

export default Index