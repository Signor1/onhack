"use client";
import Image from "next/image"
import base from "../../../public/sponsors/base.png"
import bridge from "../../../public/sponsors/bridge.svg"
import builders from "../../../public/sponsors/builders.png"
import ladies from "../../../public/sponsors/ladies.png"
import onboard from "../../../public/sponsors/onboard.png"
import FBI from "../../../public/sponsors/FBI.png"
import dacoitdesign from "../../../public/sponsors/DacoitDesign.png"
import designersdao from "../../../public/sponsors/DesgnersDAOArtboard.png"
import Marquee from "react-fast-marquee";

const Sponsors = () => {

    return (
        <section className="w-full overflow-hidden md:my-[80px] my-[36px] flex flex-col items-center md:gap-[42px] gap-[24px]">
            <span className='bg-black/10 text-black text-sm md:text-base font-light flex justify-center items-center md:w-[261px] md:h-[57px] w-[166px] h-[39px] rounded-[57px]'>Sponsors & Partners</span>

            <div className="w-full relative h-[65px] before:absolute before:left-0 before:top-0 md:before:w-[166px] before:w-[83px] before:h-full before:bg-gradient-to-r before:from-milkyBg before:via-milkyBg/50 before:to-milkyBg/10 before:z-10 after:absolute after:right-0 after:top-0 md:after:w-[166px] after:w-[83px] after:h-full after:bg-gradient-to-l after:from-milkyBg after:via-milkyBg/50 after:to-milkyBg/10 after:z-10">
                <Marquee className="h-full" pauseOnHover={true}>
                    <section className="flex items-center gap-6">
                        <div className=" h-full w-[150px]" >
                            <Image src={base} className="w-full" alt="sponsor1" width={660} height={170} quality={100} />
                        </div>
                        <div className=" h-full w-[150px]">
                            <Image src={bridge} className="w-full grayscale" alt="sponsor2" width={156} height={56} quality={100} />
                        </div>
                        <div className="h-full w-[120px]">
                            <Image src={builders} className="w-full" alt="sponsor3" width={463} height={168} quality={100} />
                        </div>
                        <div className=" h-full w-[150px]">
                            <Image src={ladies} className="w-full" alt="sponsor4" width={397} height={168} quality={100} />
                        </div>
                        <div className="h-full w-[150px]">
                            <Image src={onboard} className="w-full" alt="sponsor5" width={660} height={120} quality={100} />
                        </div>
                        <div className="h-full w-[50px]">
                            <Image src={FBI} className="object-contain" alt="sponsor6" width={133} height={169} quality={100} />
                        </div>
                        <div className="h-full w-[200px]">
                            <Image src={dacoitdesign} className="object-contain grayscale" alt="sponsor6" width={991} height={169} quality={100} />
                        </div>
                        <div className=" h-full w-[250px] mr-6">
                            <Image src={designersdao} className="object-contain grayscale" alt="sponsor6" width={1195} height={169} quality={100} />
                        </div>
                    </section>
                </Marquee>
            </div>
        </section>
    )
}

export default Sponsors