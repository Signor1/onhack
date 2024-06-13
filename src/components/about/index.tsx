'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import image1 from "../../../public/wk1.png"
import image2 from "../../../public/wk2.png"
import { shape1, shape2, shape3, shape4, shape5, shape6 } from "../../../public/shapes"
import ImageWrapper from "./ImageWrapper"


const About = () => {
    const [activeFilter, setActiveFilter] = useState<string>('Week 1')

    const buttonCaptions = ['Week 1', 'Week 2', 'Week 3'];

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter)
    }
    return (
        <section className="w-full md:my-6 my-4 lg:h-[95vh] md:h-[70vh] h-auto flex flex-col md:rounded-3xl rounded-lg items-center justify-center bg-greenBg/10 relative overflow-hidden lg:px-12 md:px-10 px-4 py-10 md:py-0">
            {
                weeks.map((item, index) => (
                    <main key={index} className={`w-full  md:grid-cols-2 gap-4 ${activeFilter === item.category ? "grid" : "hidden"}`}>
                        <div className="flex flex-col justify-center md:gap-6 gap-4 md:items-start items-center">
                            <div className="flex bg-liteBlack/70 p-2 rounded-md items-center justify-center gap-2">
                                {
                                    buttonCaptions.map((filter, index) => (
                                        <button key={index} onClick={() => handleFilterClick(filter)} className={`font-light  py-2 px-3 rounded-md text-sm cursor-pointer ${activeFilter === filter ? "bg-milkyBg text-greenBg" : "text-milkyBg bg-milkyBg/5"}`}>{filter}</button>
                                    ))
                                }
                            </div>
                            <h2 className="text-black lg:text-6xl  text-4xl text-center md:text-start font-extrabold">{item.title}</h2>
                            <p className="text-center md:text-start text-greenBg">{item.description}</p>
                            <Link href={`/`} className="text-milkyBg mt-3 overflow-hidden relative bg-black px-12 rounded-lg py-2.5 z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-greenBg hover:before:w-full">View Full Breakdown</Link>
                        </div>

                        <div className="w-full flex flex-col justify-center items-end">
                            <ImageWrapper image={item.image} shapeone={item.firstshape} shapetwo={item.lastshape} />
                        </div>
                    </main>
                ))
            }

        </section>
    )
}

export default About


const weeks = [
    {
        id: 1,
        category: 'Week 1',
        title: "Kick-off, Team Formation, and Ideation",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: image1,
        firstshape: shape5,
        lastshape: shape2
    },
    {
        id: 2,
        category: 'Week 2',
        title: "Build MVP & Get feedback from Community",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: image2,
        firstshape: shape3,
        lastshape: shape1
    },
    {
        id: 3,
        category: 'Week 3',
        title: "Polish, Launch & Demo Day",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: image1,
        firstshape: shape6,
        lastshape: shape4
    }
]