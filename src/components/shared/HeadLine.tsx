'use client'
import Marquee from "react-fast-marquee";

const HeadLine = () => {
    return (
        <Marquee>
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
        </Marquee>
    )
}

export default HeadLine

const Text = () => {
    return (
        <div className="flex items-center bg-[#67CA2F]/[6%]">
            <span className="h-1.5 w-1.5 bg-[#67CA2F] rounded-full"></span>
            <p className="text-[#D1EFC1] text-xs p-1.5 w-full">Application for this Hackathon is Closed! Join our Waitlist for OnHack 2.0!</p>
        </div>
    )
}