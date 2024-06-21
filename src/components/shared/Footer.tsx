import Image from "next/image"
import footerImg from "../../../public/footerLogo.png"
import Link from "next/link"
import { Link as Spy } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="w-full mt-[64px] mb-[72px] md:mb-0 flex md:flex-row flex-col md:justify-between justify-center items-center gap-2 md:gap-0">
            <aside className="flex md:flex-row flex-col gap-4 items-center">
                <Image src={footerImg} alt="footerlogo" width={75} height={51} quality={100} />
                <div className="flex items-center gap-4 md:gap-6">
                    <Spy to="home" className="font-light text-liteBlack cursor-pointer text-sm" smooth={true} spy={true} duration={500} >Home</Spy>
                    <Spy to="about" className="font-light text-liteBlack text-sm cursor-pointer" smooth={true} spy={true} duration={500} >About</Spy>
                    <Link href={'/'} className="font-light text-liteBlack cursor-pointer text-sm">Rewards</Link>
                    <Link href={'/'} className="font-light text-liteBlack cursor-pointer text-sm">T&Cs</Link>
                </div>
            </aside>
            <div className="flex items-center gap-4 md:gap-6">
                <Link href={'/'} className="font-light text-liteBlack cursor-pointer text-sm">Twitter</Link>
                <Link href={'/'} className="font-light text-liteBlack cursor-pointer text-sm">Warpcast</Link>
            </div>
        </footer>
    )
}

export default Footer