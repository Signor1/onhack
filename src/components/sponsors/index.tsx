"use client";
import Slider from "react-slick";
import Image from "next/image"
import base from "../../../public/sponsors/base.png"
import bridge from "../../../public/sponsors/bridge.svg"
import builders from "../../../public/sponsors/builders.png"
import ladies from "../../../public/sponsors/ladies.png"
import onboard from "../../../public/sponsors/onboard.png"

const Sponsors = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 500,
        cssEase: "ease",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <section className="w-full overflow-hidden md:my-[80px] my-[36px] flex flex-col items-center md:gap-[42px] gap-[24px]">
            <span className='bg-black/10 text-black text-sm md:text-base font-light flex justify-center items-center md:w-[261px] md:h-[57px] w-[166px] h-[39px] rounded-[57px]'>Sponsors & Partners</span>

            <div className="w-full relative h-[65px] before:absolute before:left-0 before:top-0 md:before:w-[166px] before:w-[83px] before:h-full before:bg-gradient-to-r before:from-milkyBg before:via-milkyBg/50 before:to-milkyBg/10 before:z-10 after:absolute after:right-0 after:top-0 md:after:w-[166px] after:w-[83px] after:h-full after:bg-gradient-to-l after:from-milkyBg after:via-milkyBg/50 after:to-milkyBg/10 after:z-10">
                <Slider {...settings} className="h-full">
                    <div className="px-4 h-full pt-3 " >
                        <Image src={base} className="w-full" alt="sponsor1" width={165} height={32} quality={100} />
                    </div>
                    <div className="px-4 h-full pt-2 ">
                        <Image src={bridge} className="w-full grayscale" alt="sponsor2" width={165} height={32} quality={100} />
                    </div>
                    <div className="px-4 h-full pt-1.5 ">
                        <Image src={builders} className="w-full" alt="sponsor3" width={463} height={168} quality={100} />
                    </div>
                    <div className="px-4 h-full ">
                        <Image src={ladies} className="w-full" alt="sponsor4" width={397} height={168} quality={100} />
                    </div>
                    <div className="px-4 h-full pt-5 ">
                        <Image src={onboard} className="w-full" alt="sponsor5" width={660} height={120} quality={100} />
                    </div>
                    <div className="px-4 h-full pt-3 " >
                        <Image src={base} className="w-full" alt="sponsor1" width={165} height={32} quality={100} />
                    </div>
                    <div className="px-4 h-full pt-2 ">
                        <Image src={bridge} className="w-full grayscale" alt="sponsor2" width={165} height={32} quality={100} />
                    </div>
                    <div className="px-4 h-full pt-1.5 ">
                        <Image src={builders} className="w-full" alt="sponsor3" width={463} height={168} quality={100} />
                    </div>
                    <div className="px-4 h-full ">
                        <Image src={ladies} className="w-full" alt="sponsor4" width={397} height={168} quality={100} />
                    </div>
                    <div className="px-4 h-full pt-5 ">
                        <Image src={onboard} className="w-full" alt="sponsor5" width={660} height={120} quality={100} />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Sponsors