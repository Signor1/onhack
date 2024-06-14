'use client'
import Link from "next/link";
import Logo from "./Logo"
import MaxWrapper from "./MaxWrapper"
import { Link as Spy } from 'react-scroll';
import MobileNav from "./MobileNav";
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
        <header className={`fixed top-0 inset-x-0 z-40 w-full md:px-4 px-1 py-1`}>
            <MaxWrapper className={`h-full md:pt-6 pb-3 pt-3 md:px-10 px-4 flex justify-between items-center  ${navBarColor && "bg-greenBg backdrop-blur-3xl md:rounded-3xl rounded-lg"}`}>
                <Logo />

                {/* Links  */}
                <div className="md:flex lg:ml-24 hidden bg-liteBlack/70 p-2 rounded-md items-center justify-center gap-2">
                    {
                        NavBarLinks.map((navlink, index) => (
                            <Spy key={index} to={navlink.url} smooth={true} spy={true} activeClass="bg-[#ffebd80d]" duration={500} className={`font-light text-milkyBg py-2 px-3 rounded-md text-sm cursor-pointer ${navlink.url}`}>{navlink.name}</Spy>
                        ))
                    }
                </div>

                <div className="flex gap-2 items-center">
                    <div className="flex bg-liteBlack/70 p-2 rounded-md items-center justify-center gap-2">
                        <Link href={'/'} className="font-light hidden lg:inline-block text-milkyBg py-2 px-3 rounded-md text-sm cursor-pointer bg-[#ffebd80d]">Sponsor</Link>
                        <Link href={'/'} className="bg-milkyBg py-2 px-3 text-sm rounded-md text-greenBg">Apply Now</Link>
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