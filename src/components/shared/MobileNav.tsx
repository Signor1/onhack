import { Link as Spy } from 'react-scroll';
import { NavBarLinks } from "./Header";

const MobileNav = () => {
    return (
        <div className="flex fixed bottom-3 left-1/2 z-[999] -translate-x-1/2 md:hidden bg-liteBlack/[70%] backdrop-blur-2xl p-[6px] rounded-[14px] items-center justify-center gap-[6px]">
            {
                NavBarLinks.map((navlink, index) => (
                    <Spy key={index} to={navlink.url} smooth={true} spy={true} activeClass="bg-[#FFEBD8]/[4%] border-[1px] border-[#FFEBD8]/[4%]" offset={-20} duration={500} className={`font-light text-[#FFEBD8] h-[38px] flex justify-center items-center px-[10px] rounded-[8px] text-sm cursor-pointer ${navlink.url}`}>{navlink.name}</Spy>
                ))
            }
        </div>
    )
}

export default MobileNav