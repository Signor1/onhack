import Link from "next/link"
import { shape1, shape2, shape3, shape4, shape5 } from "../../../public/shapes"
import Image from "next/image"
import { IoIosArrowRoundUp } from "react-icons/io"
import { HiOutlineArrowNarrowDown } from "react-icons/hi"

const HeroSection = () => {
    return (
        <section className="w-full lg:h-[95vh] md:h-[70vh] h-[99vh] flex flex-col md:rounded-3xl rounded-lg items-center justify-center bg-greenBg relative overflow-hidden">
            <div className="flex flex-col items-center md:gap-2 gap-4 relative">
                <h3 className="text-xs md:text-base bg-liteGreen px-6 rounded-2xl py-2.5 text-greenBg">3- Weeks Hack Builders Fellowship Program</h3>
                <div className="flex flex-col items-center">
                    <h2 className="lg:text-6xl text-3xl text-milkyBg font-extrabold">ONCHAIN SUMMER</h2>
                    <h1 className="lg:text-8xl text-5xl text-milkyBg font-extrabold">BUILDATH<span className="inline-block lg:w-20 lg:h-20 md:w-10 md:h-10 w-9 h-9 relative before:absolute before:w-1/2 before:bg-greenBg before:h-1 before:right-0 before:-translate-y-1/2 before:top-1/2 bg-liteBrown rounded-full"></span>N</h1>
                </div>
                <p className="text-milkyBg lg:w-[60%] md:w-[60%] w-[95%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <Link href={`/`} className="text-greenBg mt-3 overflow-hidden relative bg-milkyBg px-16 rounded-lg py-2.5 z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-liteBrown hover:before:w-full">Apply Now</Link>

                <Link href={`/`} className=" lg:hidden overflow-hidden relative bg-[#ffebd80d] text-milkyBg px-16 rounded-lg py-2.5 z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-milkyBg hover:before:w-full hover:text-greenBg">Sponsor</Link>

                {/* shapes */}
                <div className="absolute top-4 md:left-20 -left-5 lg:w-[93px] lg:h-[79px]">
                    <Image src={shape1} alt="shape" className="h-full w-full" width={93} height={79} quality={100} priority />
                </div>
                <div className="absolute md:bottom-6 md:left-10 -left-8 bottom-2 lg:w-[131px] lg:h-[131px]">
                    <Image src={shape2} alt="shape" className="h-full w-full" width={131} height={131} quality={100} priority />
                </div>
                <div className="absolute md:-top-12 md:right-24 top-0 -right-8 lg:w-[131px] lg:h-[131px]">
                    <Image src={shape3} alt="shape" className="h-full w-full" width={131} height={131} quality={100} priority />
                </div>
                <div className="absolute md:-top-14 -top-7 left-[45%] lg:w-[71px] lg:h-[72px]">
                    <Image src={shape4} alt="shape" className="h-full w-full" width={71} height={72} quality={100} priority />
                </div>
                <div className="absolute md:bottom-6 md:right-8 -bottom-2 -right-8 lg:w-[167px] lg:h-[167px]">
                    <Image src={shape5} alt="shape" className="h-full w-full" width={167} height={167} quality={100} priority />
                </div>
            </div>

            <aside className="w-full md:px-6 px-3 flex justify-between items-end absolute bottom-6 left-0">
                <button className="flex gap-1 animate-pulse items-center bg-[#67CA2F]/20 text-greenBg rounded-full px-4 py-2">
                    <span className="w-6 h-6 bg-liteGreen flex justify-center items-center rounded-full">
                        <IoIosArrowRoundUp className="text-greenBg text-lg font-semibold" />
                    </span>
                    <span className="text-liteGreen text-xs">Next Up - About OnHack</span>
                </button>

                <button className="flex flex-col items-center gap-1">
                    <span className="md:w-12 md:h-12 w-9 h-9 animate-bounce rounded-full border border-white flex justify-center items-center">
                        <HiOutlineArrowNarrowDown className="text-white md:scale-y-125" />
                    </span>
                    <span className="text-[0.65rem] text-white">Scroll for More</span>
                </button>
            </aside>
        </section>
    )
}

export default HeroSection