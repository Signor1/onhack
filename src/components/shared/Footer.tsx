import Image from "next/image"
import footerImg from "../../../public/footerLogo.png"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full md:mt-32 mt-24 mb-24 md:mb-0 flex md:flex-row flex-col md:justify-between justify-center items-center">
            <aside className="flex md:flex-row flex-col gap-4 items-center">
                <Image src={footerImg} alt="footerlogo" width={75} height={51} quality={100} />
                <div className="flex items-center gap-4">
                    <Link href={'/'}>Rewards</Link>
                    <Link href={'/'}>T&Cs</Link>
                </div>
            </aside>
            <div className="flex items-center gap-4">
                <Link href={'/'}>Twitter</Link>
                <Link href={'/'}>Warpcast</Link>
            </div>
        </footer>
    )
}

export default Footer