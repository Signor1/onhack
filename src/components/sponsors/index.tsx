"use client";
import Slider from "react-slick";
import Image from "next/image"
import sponsorImg from "../../../public/base.png"

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
        <section className="w-full overflow-hidden mt-16 flex flex-col items-center">
            <span className='bg-black/10 text-black px-6 py-3 rounded-xl'>Sponsors & Partners</span>

            <div className="w-full mt-8">
                <Slider {...settings}>
                    {
                        [...Array(20)].map((_, index) => (
                            <div className="px-4" key={index}>
                                <Image src={sponsorImg} className="w-full" alt="sponsor1" width={165} height={32} quality={100} />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default Sponsors