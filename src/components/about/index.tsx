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

    const buttonCaptions = ['Week 1', 'Week 2', 'Week 3'];

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
        // <section className="w-full md:my-[32px] my-[16px] lg:h-[760px] md:h-[660px] h-[579px] flex flex-row md:rounded-[36px] rounded-[24px] items-center justify-center bg-greenBg/[10%] relative overflow-hidden md:pl-[48px] pl-[16px] md:pr-[36px] pr-[16px]">
        //     {
        //         weeks.map((item, index) => (
        //             <main key={index} className={`w-full flex-row items-center justify-between flex`}>
        //                 <div className="flex flex-col justify-center md:gap-6 gap-4 md:items-start items-center md:w-[522px] md:h-[438px] w-[302px] h-[186px]">
        //                     <div className="flex bg-liteBlack/70 p-[6px] rounded-[100px] items-center justify-center gap-2">
        //                         {
        //                             buttonCaptions.map((filter, index) => (
        //                                 <button key={index} className={`font-light  py-2 px-3 rounded-md text-sm cursor-pointer bg-milkyBg text-greenBg`}>{filter}</button>
        //                             ))
        //                         }
        //                     </div>
        //                     <h2 className="text-black lg:text-5xl  text-4xl text-center md:text-start font-extrabold">{item.title}</h2>
        //                     <p className="text-center md:text-start text-greenBg">{item.description}</p>
        //                     <Link href={`/`} className="text-milkyBg mt-3 overflow-hidden relative bg-black px-12 rounded-[8px] text-nowrap md:rounded-[8px] md:w-[261px] w-[168px] md:h-[48px] h-[34px] flex justify-center items-center z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-greenBg hover:before:w-full">View Full Breakdown</Link>
        //                 </div>

        //                 <div className="lg:h-[664px] md:h-[564px] h-[232px] md:w-[561px] w-[309px] flex flex-col justify-center items-end">
        //                     <ImageWrapper image={item.image} shapeone={item.firstshape} shapetwo={item.lastshape} />
        //                 </div>
        //             </main>
        //         ))
        //     }

        // </section>
        <section className="w-full overflow-hidden md:my-[32px] my-[16px] bg-greenBg/[10%] md:rounded-[36px] rounded-[24px]">
            <div ref={triggerRef} className="overflow-hidden">
                <div ref={sectionRef} className="lg:h-[760px] md:h-[660px] h-[579px] w-[300%] flex flex-row relative">
                    {/* one */}
                    <main className={`w-[100%] h-full overflow-hidden  md:pl-[72px] pl-[16px] md:pr-[36px] pr-[16px] flex-row items-center justify-between flex`}>
                        <div className="flex flex-col justify-center md:gap-6 gap-4 md:items-start items-center md:w-[522px] md:h-[438px] w-[302px] h-[186px]">
                            <div className="flex bg-liteBlack/70 p-[6px] rounded-[100px] items-center justify-center gap-2">
                                <button className={`font-light  py-2 px-3 rounded-md text-sm cursor-pointer bg-milkyBg text-greenBg`}>Week 1</button>

                            </div>
                            <h2 className="text-black lg:text-5xl  text-4xl text-center md:text-start font-extrabold">Kick-off, Team Formation, and Ideation</h2>
                            <p className="text-center md:text-start text-greenBg">The program begins with a kick-off event where participants form teams and brainstorm ideas. Mentors will be available to guide and inspire the ideation process.</p>
                            <Link href={`/`} className="text-milkyBg mt-3 overflow-hidden relative bg-black px-12 rounded-[8px] text-nowrap md:rounded-[8px] md:w-[261px] w-[168px] md:h-[48px] h-[34px] flex justify-center items-center z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-greenBg hover:before:w-full">View Full Breakdown</Link>
                        </div>

                        <div className="lg:h-[664px] md:h-[564px] h-[232px] md:w-[561px] w-[309px] flex flex-col justify-center items-end">
                            <ImageWrapper image={image1} shapeone={orangeshape} shapetwo={greenshape} />
                        </div>
                    </main>

                    {/* two */}
                    <main className={`w-[100%] h-full overflow-hidden  md:pl-[72px] pl-[16px] md:pr-[36px] pr-[16px] flex-row items-center justify-between flex`}>
                        <div className="flex flex-col justify-center md:gap-6 gap-4 md:items-start items-center md:w-[522px] md:h-[438px] w-[302px] h-[186px]">
                            <div className="flex bg-liteBlack/70 p-[6px] rounded-[100px] items-center justify-center gap-2">
                                <button className={`font-light  py-2 px-3 rounded-md text-sm cursor-pointer bg-milkyBg text-greenBg`}>Week 2</button>

                            </div>
                            <h2 className="text-black lg:text-5xl  text-4xl text-center md:text-start font-extrabold">Build MVP & Get feedback from Community</h2>
                            <p className="text-center md:text-start text-greenBg">Teams will work on developing their Minimum Viable Product (MVP) and receive valuable feedback from the community. This iterative process will help refine and improve the projects.</p>
                            <Link href={`/`} className="text-milkyBg mt-3 overflow-hidden relative bg-black px-12 rounded-[8px] text-nowrap md:rounded-[8px] md:w-[261px] w-[168px] md:h-[48px] h-[34px] flex justify-center items-center z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-greenBg hover:before:w-full">View Full Breakdown</Link>
                        </div>

                        <div className="lg:h-[664px] md:h-[564px] h-[232px] md:w-[561px] w-[309px] flex flex-col justify-center items-end">
                            <ImageWrapper image={image2} shapeone={yellowshape} shapetwo={blueshape} />
                        </div>
                    </main>

                    {/* three */}
                    <main className={`w-[100%] h-full overflow-hidden  md:pl-[72px] pl-[16px] md:pr-[36px] pr-[16px] flex-row items-center justify-between flex`}>
                        <div className="flex flex-col justify-center md:gap-6 gap-4 md:items-start items-center md:w-[522px] md:h-[438px] w-[302px] h-[186px]">
                            <div className="flex bg-liteBlack/70 p-[6px] rounded-[100px] items-center justify-center gap-2">
                                <button className={`font-light  py-2 px-3 rounded-md text-sm cursor-pointer bg-milkyBg text-greenBg`}>Week 3</button>

                            </div>
                            <h2 className="text-black lg:text-5xl  text-4xl text-center md:text-start font-extrabold">Polish, Launch & Demo Day</h2>
                            <p className="text-center md:text-start text-greenBg">In the final week, teams will focus on polishing their projects, preparing for launch, and showcasing their work on Demo Day. This is a chance to present your solutions to a wider audience.</p>
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