'use client'
import Link from "next/link"
import { useRef, useEffect } from "react";
import image1 from "../../../public/wk1.png"
import image2 from "../../../public/wk2.png"
import image3 from "../../../public/wk3.png"
import { blueshape, greenshape, yellowshape, purpleshape, orangeshape, brownshape } from "../../../public/shapes"
import ImageWrapper from "./ImageWrapper"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const About = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-190vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);

    return (
        <section className="w-full overflow-hidden md:my-[32px] my-[16px] bg-greenBg/[10%] md:rounded-[36px] rounded-[24px]">
            <div ref={triggerRef} className="overflow-hidden">
                <div ref={sectionRef} className=" w-[300%] flex flex-row relative ">
                    {/* one */}
                    <main className={`w-[100%] pt-24 md:pt-0 lg:h-[760px] md:h-[660px] h-[579px] overflow-hidden  md:pl-[72px] pl-[16px] md:pr-[36px] pr-[16px] md:flex-row flex-col items-center md:justify-between justify-center flex gap-12 md:gap-0`}>
                        <div className="flex flex-col justify-center md:gap-6 gap-4 md:items-start items-center md:w-[522px] md:h-[438px] w-[302px] h-[186px]">
                            <div className="flex bg-liteBlack/70 p-[6px] rounded-[100px] items-center justify-center gap-8  ">
                                <button className={`font-light z-20 flex justify-center items-center w-[70px] h-[34px] rounded-[32px] text-sm  bg-[#FFEBD8]/[4%] border border-[#FFEBD8] text-milkyBg relative before:absolute before:w-[30px] before:h-[2px] before:bg-milkyBg/[4%] before:top-1/2 before:-translate-y-1/2 before:-right-[30px] before:rounded-e-md after:absolute after:w-[15px] after:h-[2px] after:bg-milkyBg after:top-1/2 after:-translate-y-1/2 after:-right-[15px]`}>Week 1</button>
                                <button className={`font-light flex justify-center items-center w-[30px] h-[30px] rounded-full text-sm  text-milkyBg bg-[#FFEBD8]/[4%] border border-[#FFEBD8]/[4%]`}>2</button>
                                <button className={`font-light flex justify-center items-center w-[30px] h-[30px] rounded-full text-sm  text-milkyBg bg-[#FFEBD8]/[4%] border border-[#FFEBD8]/[4%]`}>3</button>
                            </div>
                            <h2 className="text-black lg:text-5xl text-[1.55rem] text-center md:text-start md:font-extrabold font-bold leading-[2rem] md:leading-4">Kick-off, Team Formation, and Ideation</h2>
                            <p className="text-center text-sm md:text-base md:text-start text-greenBg">The program begins with a kick-off event where participants form teams and brainstorm ideas. Mentors will be available to guide and inspire the ideation process.</p>
                            <Link href={`/`} className="text-milkyBg mt-3 overflow-hidden relative bg-black px-12 rounded-[8px] text-nowrap md:rounded-[8px] md:w-[261px] w-[168px] md:h-[48px] h-[34px] flex justify-center items-center z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-greenBg hover:before:w-full">View Full Breakdown</Link>
                        </div>

                        <div className="lg:h-[664px] md:h-[564px] h-[232px] md:w-[561px] w-[309px] flex flex-col justify-center md:items-end">
                            <ImageWrapper image={image1} shapeone={orangeshape} shapetwo={greenshape} />
                        </div>
                    </main>

                    {/* two */}
                    <main className={`w-[100%] pt-24 md:pt-0 lg:h-[760px] md:h-[660px] h-[579px] overflow-hidden  md:pl-[72px] pl-[16px] md:pr-[36px] pr-[16px] md:flex-row flex-col items-center md:justify-between justify-center flex gap-12 md:gap-0`}>
                        <div className="flex flex-col justify-center md:gap-6 gap-4 md:items-start items-center md:w-[522px] md:h-[438px] w-[302px] h-[186px]">
                            <div className="flex bg-liteBlack/70 p-[6px] rounded-[100px] items-center justify-center gap-8  ">
                                <button className={`font-light flex justify-center items-center w-[30px] h-[30px] rounded-full text-sm  text-greenBg bg-[#FFEBD8] relative before:absolute before:w-[32px] before:h-[2px] before:bg-milkyBg before:top-1/2 before:-translate-y-1/2 before:-right-[32px] before:rounded-e-md`}>1</button>
                                <button className={`font-light z-20 flex justify-center items-center w-[70px] h-[34px] rounded-[32px] text-sm  bg-[#FFEBD8]/[4%] border border-[#FFEBD8] text-milkyBg relative before:absolute before:w-[30px] before:h-[2px] before:bg-milkyBg/[4%] before:top-1/2 before:-translate-y-1/2 before:-right-[30px] before:rounded-e-md after:absolute after:w-[15px] after:h-[2px] after:bg-milkyBg after:top-1/2 after:-translate-y-1/2 after:-right-[15px]`}>Week 2</button>
                                <button className={`font-light flex justify-center items-center w-[30px] h-[30px] rounded-full text-sm  text-milkyBg bg-[#FFEBD8]/[4%] border border-[#FFEBD8]/[4%]`}>3</button>
                            </div>
                            <h2 className="text-black lg:text-5xl text-[1.55rem] text-center leading-[2rem] md:leading-4 md:text-start md:font-extrabold font-bold">Build MVP & Get feedback from Community</h2>
                            <p className="text-center text-sm md:text-base md:text-start text-greenBg">Teams will work on developing their Minimum Viable Product (MVP) and receive valuable feedback from the community. This iterative process will help refine and improve the projects.</p>
                            <Link href={`/`} className="text-milkyBg mt-3 overflow-hidden relative bg-black px-12 rounded-[8px] text-nowrap md:rounded-[8px] md:w-[261px] w-[168px] md:h-[48px] h-[34px] flex justify-center items-center z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-greenBg hover:before:w-full">View Full Breakdown</Link>
                        </div>

                        <div className="lg:h-[664px] md:h-[564px] h-[232px] md:w-[561px] w-[309px] flex flex-col justify-center items-end">
                            <ImageWrapper image={image2} shapeone={yellowshape} shapetwo={blueshape} />
                        </div>
                    </main>

                    {/* three */}
                    <main className={`w-[100%] pt-24 md:pt-0 lg:h-[760px] md:h-[660px] h-[579px] overflow-hidden  md:pl-[72px] pl-[16px] md:pr-[36px] pr-[16px] md:flex-row flex-col items-center md:justify-between justify-center flex gap-12 md:gap-0`}>
                        <div className="flex flex-col justify-center md:gap-6 gap-4 md:items-start items-center md:w-[522px] md:h-[438px] w-[302px] h-[186px]">
                            <div className="flex bg-liteBlack/70 p-[6px] rounded-[100px] items-center justify-center gap-8  ">
                                <button className={`font-light flex justify-center items-center w-[30px] h-[30px] rounded-full text-sm  text-greenBg bg-[#FFEBD8] relative before:absolute before:w-[32px] before:h-[2px] before:bg-milkyBg before:top-1/2 before:-translate-y-1/2 before:-right-[32px] before:rounded-e-md`}>1</button>
                                <button className={`font-light flex justify-center items-center w-[30px] h-[30px] rounded-full text-sm  text-greenBg bg-[#FFEBD8] relative before:absolute before:w-[32px] before:h-[2px] before:bg-milkyBg before:top-1/2 before:-translate-y-1/2 before:-right-[32px] before:rounded-e-md`}>2</button>
                                <button className={`font-light z-20 flex justify-center items-center w-[70px] h-[34px] rounded-[32px] text-sm  bg-[#FFEBD8]/[4%] border border-[#FFEBD8] text-milkyBg`}>Week 3</button>

                            </div>
                            <h2 className="text-black lg:text-5xl text-[1.55rem] text-center md:text-start md:font-extrabold font-bold leading-[2rem] md:leading-4">Polish, Launch & Demo Day</h2>
                            <p className="text-center text-sm md:text-base md:text-start text-greenBg">In the final week, teams will focus on polishing their projects, preparing for launch, and showcasing their work on Demo Day. This is a chance to present your solutions to a wider audience.</p>
                            <Link href={`/`} className="text-milkyBg mt-3 overflow-hidden relative bg-black px-12 rounded-[8px] text-nowrap md:rounded-[8px] md:w-[261px] w-[168px] md:h-[48px] h-[34px] flex justify-center items-center z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-greenBg hover:before:w-full">View Full Breakdown</Link>
                        </div>

                        <div className="lg:h-[664px] md:h-[564px] h-[232px] md:w-[561px] w-[309px] flex flex-col justify-center items-end">
                            <ImageWrapper image={image3} shapeone={brownshape} shapetwo={purpleshape} />
                        </div>
                    </main>
                </div>
            </div>
        </section>
    )
}

export default About


const weeks = [
    {
        id: 1,
        category: 'Week 1',
        title: "Kick-off, Team Formation, and Ideation",
        description: 'The program begins with a kick-off event where participants form teams and brainstorm ideas. Mentors will be available to guide and inspire the ideation process.',
        image: image1,
        firstshape: orangeshape,
        lastshape: greenshape
    },
    {
        id: 2,
        category: 'Week 2',
        title: "Build MVP & Get feedback from Community",
        description: 'Teams will work on developing their Minimum Viable Product (MVP) and receive valuable feedback from the community. This iterative process will help refine and improve the projects.',
        image: image2,
        firstshape: yellowshape,
        lastshape: blueshape
    },
    {
        id: 3,
        category: 'Week 3',
        title: "Polish, Launch & Demo Day",
        description: 'In the final week, teams will focus on polishing their projects, preparing for launch, and showcasing their work on Demo Day. This is a chance to present your solutions to a wider audience.',
        image: image1,
        firstshape: brownshape,
        lastshape: purpleshape
    }
]