import { Link as Spy } from 'react-scroll';
import { NavBarLinks } from "./Header";

const MobileNav = () => {
    return (
        <div className="flex fixed bottom-3 left-1/2 z-[999] -translate-x-1/2 md:hidden bg-liteBlack/80 backdrop-blur-2xl p-2 rounded-md items-center justify-center gap-2">
            {
                NavBarLinks.map((navlink, index) => (
                    <Spy key={index} to={navlink.url} smooth={true} spy={true} activeClass="bg-[#ffebd84d]" offset={-20} duration={500} className={`font-light text-milkyBg py-2 px-3 rounded-md text-sm cursor-pointer ${navlink.url}`}>{navlink.name}</Spy>
                ))
            }
        </div>
    )
}

export default MobileNav