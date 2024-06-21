'use client'
import Link from "next/link";
import Logo from "./Logo"
import MaxWrapper from "./MaxWrapper"
import { Link as Spy } from 'react-scroll';
import { useEffect, useState } from "react";


const Header = () => {

    const [navBarColor, setNavBarColor] = useState(false)

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <header className={`lg:fixed inset-x-0 z-40 w-full lg:px-[45px] md:px-[16px] ${navBarColor ? "lg:w-[1096px] lg:left-1/2 lg:-translate-x-1/2 lg:top-0" : "md:top-[32px] top-0"}`}>
            <MaxWrapper className={`h-[80px] lg:mt-[36px] md:mt-[16px] mt-0 md:px-[36px] px-[16px] flex justify-between items-center  ${navBarColor && "lg:bg-[#E7E9E8]/[5%] lg:backdrop-blur-2xl lg:border-[1px] lg:border-[#87918B]/[4%] lg:rounded-[17px]"}`}>
                <Logo />

                {/* Links  */}
                <div className="lg:flex lg:ml-[200px] hidden bg-liteBlack/70 p-[8px] rounded-[14px] items-center justify-center gap-2">
                    {
                        NavBarLinks.map((navlink, index) => (
                            <Spy key={index} to={navlink.url} smooth={true} spy={true} activeClass="bg-[#FFEBD8]/[4%] border-[1px] border-[#FFEBD8]/[4%]" offset={-200} duration={500} className={`font-light text-milkyBg p-[10px] rounded-[8px] text-sm cursor-pointer ${navlink.url}`}>{navlink.name}</Spy>
                        ))
                    }
                </div>

                <div className="flex items-center">
                    <div className="flex lg:bg-liteBlack/70 lg:p-[8px] rounded-[14px] items-center justify-center gap-[8px]">
                        <Link href={'/'} className=" hidden text-milkyBg px-[42px] h-[40px] rounded-[8px] text-sm cursor-pointer bg-[#FFEBD8]/[4%] lg:flex justify-center items-center border-[1px] border-[#FFEBD8]/[4%]">Sponsor</Link>
                        <Link href={'/'} className="bg-milkyBg md:h-[40px] h-[36px] md:px-[42px] px-[24px] text-sm rounded-[8px] text-greenBg flex justify-center items-center border-[1px] border-[#FFEBD8]/[4%]">Apply Now</Link>
                    </div>

                </div>
            </MaxWrapper>
        </header>
    )
}

export default Header

export const NavBarLinks = [
    {
        id: 1,
        name: "Home",
        url: "home",
    },
    {
        id: 2,
        name: "About",
        url: "about",
    },
    {
        id: 3,
        name: "Prize",
        url: "prize",
    },
];