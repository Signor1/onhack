import Link from "next/link"
import { blueshape, greenshape, yellowshape, purpleshape, orangeshape } from "../../../public/shapes"
import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io"
import { HiOutlineArrowNarrowDown } from "react-icons/hi"
import Header from "../shared/Header"
import { motion } from "framer-motion";
import { containerVariants, zoomOutEffect } from "../shared/Animations"


const HeroSection = () => {
    return (
        <motion.section className="w-full lg:h-[800px] md:h-[600px] h-[526px] flex flex-col md:rounded-[36px] rounded-[24px] items-center lg:justify-center bg-greenBg relative overflow-hidden heroGradient"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Header />
            <motion.div className="flex flex-col items-center md:gap-2 gap-1 relative mt-10 lg:mt-0" initial='hidden' animate="visible" variants={zoomOutEffect}>
                <h3 className="text-[0.6rem] font-medium lg:text-base bg-liteGreen lg:px-[20px] px-[9px] lg:rounded-[31px] rounded-[14px] lg:h-[45px] h-[21px] flex justify-center items-center text-greenBg"
                >3- Weeks Hack Builders Fellowship Program</h3>
                <div className="flex flex-col items-center">
                    <h2 className="lg:text-6xl md:text-4xl text-2xl text-milkyBg md:font-extrabold font-bold">ONCHAIN SUMMER</h2>
                    <h1 className="lg:text-8xl md:text-6xl text-4xl text-milkyBg md:font-extrabold font-bold" >BUILDATH<motion.span className="inline-block lg:w-20 lg:h-20 md:w-12 md:h-12 w-7 h-7 relative before:absolute before:w-1/2 before:bg-greenBg md:before:h-1 before:h-[2px] before:right-0 before:-translate-y-1/2 before:top-1/2 bg-liteBrown rounded-full before:rounded-s-full" animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear", stiffness: 50 }}></motion.span>N</h1>
                </div>
                <p className="text-milkyBg lg:w-[60%] md:w-[60%] w-[85%] text-center text-xs md:text-base font-light md:font-normal">Join us for an exciting opportunity to network, learn, and create innovative onchain apps.</p>

                <Link href={`/`} className="text-greenBg mt-3 overflow-hidden relative bg-milkyBg md:w-[261px] md:h-[48px] w-[188px] h-[36px] flex justify-center items-center rounded-[8px] font-medium z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-liteBrown hover:before:w-full text-sm md:text-base">Apply Now</Link>

                <Link href={`/`} className="lg:hidden overflow-hidden relative bg-[#ffebd80d] text-milkyBg md:w-[261px] md:h-[48px] w-[188px] h-[36px] rounded-[8px] flex justify-center items-center z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-milkyBg hover:before:w-full hover:text-greenBg text-sm md:text-base mt-[8px]">Sponsor</Link>

                {/* shapes */}
                <motion.div className="absolute md:top-4 lg:-left-16 md:left-24 -top-4 left-6 lg:w-[93px] lg:h-[79px] w-[35px]" animate={{ x: [20, -20] }} transition={{ delay: 3, repeat: Infinity, repeatType: "mirror", duration: 5 }}>
                    <Image src={blueshape} alt="shape" className="h-full w-full" width={93} height={79} quality={100} priority />
                </motion.div>
                <motion.div className="absolute lg:bottom-6 md:bottom-24 lg:-left-32 md:left-24 left-6 bottom-10 lg:w-[131px] lg:h-[131px] w-[40px]" animate={{ y: [20, -20] }} transition={{ delay: 3, repeat: Infinity, repeatType: "mirror", duration: 3 }}>
                    <Image src={greenshape} alt="shape" className="h-full w-full" width={131} height={131} quality={100} priority />
                </motion.div>
                <motion.div className="absolute lg:-top-16 md:-top-8 lg:-right-16 md:right-24 -top-3 right-6 lg:w-[131px] lg:h-[131px] w-[35px]" animate={{ y: [10, -10] }} transition={{ delay: 3, repeat: Infinity, repeatType: "mirror", duration: 4 }}>
                    <Image src={yellowshape} alt="shape" className="h-full w-full" width={131} height={131} quality={100} priority />
                </motion.div>
                <motion.div className="absolute lg:-top-14 md:-top-7 -top-6 left-[43%] lg:w-[71px] lg:h-[72px] w-[30px]" animate={{ y: [4, -8] }} transition={{ delay: 3, repeat: Infinity, repeatType: "mirror", duration: 2 }}>
                    <Image src={purpleshape} alt="shape" className="h-full w-full" width={71} height={72} quality={100} priority />
                </motion.div>
                <motion.div className="absolute lg:bottom-2 md:bottom-20 lg:-right-32 md:right-20 bottom-10 right-6 lg:w-[167px] lg:h-[167px] w-[40px]" animate={{ scale: [0.5, 1] }} transition={{ delay: 3, repeat: Infinity, repeatType: "mirror", duration: 4 }}>
                    <Image src={orangeshape} alt="shape" className="h-full w-full" width={167} height={167} quality={100} priority />
                </motion.div>
            </motion.div>

            <aside className="w-full md:px-[36px] flex md:flex-row flex-col justify-between md:items-end items-center gap-3 absolute bottom-[32px] left-0">
                <button className="flex gap-1 items-center bg-[#67CA2F]/[6%] text-greenBg rounded-[57px] md:pl-[16px] md:pr-[16px] md:py-[14px] pl-[12px] pr-[6px] py-[6px]">
                    <span className="text-[#D1EFC1] md:text-xs text-[0.65rem]">About OnHack</span>
                    <span className="w-5 h-5 bg-liteGreen flex justify-center items-center rounded-full">
                        <IoIosArrowRoundForward className="text-greenBg text-lg font-semibold -rotate-90 md:rotate-0" />
                    </span>
                </button>

                <button className="flex flex-col items-center gap-1">
                    <span className="md:w-12 md:h-12 w-9 h-9 animate-bounce rounded-full border border-[#204E3E] flex justify-center items-center">
                        <HiOutlineArrowNarrowDown className="text-[#204E3E] md:scale-y-125" />
                    </span>
                    <span className="text-[0.65rem] text-gray-100">Scroll for More</span>
                </button>
            </aside>
        </motion.section>
    )
}

export default HeroSection