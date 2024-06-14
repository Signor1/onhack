'use client'
import { Element } from "react-scroll"
import HeroSection from "../hero/HeroSection"
import Header from "../shared/Header"
import About from "../about"
import MobileNav from "../shared/MobileNav"
import Banner from "../banner/Banner"
import Prize from "../prize"
import Invitation from "../invite"
import Sponsors from "../sponsors"
import Footer from "../shared/Footer"

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
            <Element name="prize">
                <Prize />
            </Element>
            <Invitation />
            <Sponsors />
            <Footer />
        </>
    )
}

export default Index