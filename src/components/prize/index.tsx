import Image from 'next/image'
import React from 'react'
import usdc from "../../../public/usdc.png"
import vector from "../../../public/vector.png"

const Prize = () => {
    return (
        <section className="w-full md:my-6 my-4 lg:h-screen  h-auto flex flex-col md:rounded-3xl rounded-lg items-center justify-center bg-[#C568DD] relative overflow-hidden lg:px-20 md:px-10 px-4 py-10 md:py-12 prizeBg">
            <div className='w-full md:flex hidden flex-col mb-7'>
                <h1 className='text-[#1B0F1E] text-4xl font-extrabold'>Prizes</h1>
                <p className='text-[#1B0F1E] lg:w-1/2 md:w-[70%] w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>

            <main className='w-full lg:h-[450px] md:h-[500px] grid md:grid-cols-2 md:grid-rows-4 gap-3'>
                <div className=' md:row-span-3 w-full bg-[#1B0F1E] rounded-3xl flex flex-col items-center justify-center gap-3 lg:px-12 md:px-6 px-4 py-8 md:py-0'>
                    <div className='text-[#FFE64B] tracking-wider text-center font-bold text-xl relative'>
                        <span>ONCHAIN <br /> CHAMPION</span>
                        <Image src={vector} alt="vector" className='absolute right-0 -top-7' width={40} height={40} quality={100} />
                    </div>
                    <span className="text-[#67CA2F] text-sm">Prize</span>
                    <div className='flex justify-center gap-3 items-center'>
                        <Image src={usdc} alt="prize" width={50} height={50} quality={100} />
                        <span className='text-[#67CA2F] text-5xl font-bold'>50K</span>
                    </div>
                    <p className="text-milkyBg text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                    <p className="text-milkyBg text-sm"><span className='text-[#FFE64B]'>Other Perks:</span> Lorem ipsum dolor sit amet </p>
                </div>

                <SmallCard reverse={false} />
                <SmallCard reverse={true} />
                <SmallCard reverse={false} />

                <div className="w-full py-4 md:py-0 px-4 md:px-0 md:col-span-2 bg-[#1B0F1E] flex justify-center items-center rounded-3xl">
                    <p className="text-milkyBg text-sm">
                        <span className='text-[#FFE64B]'>PERKS FOR EVERY PARTICPANTS AND PROJECTS:</span> Lorem ipsum dolor sit amet </p>
                </div>
            </main>
        </section>
    )
}

export default Prize

const SmallCard = ({ reverse }: { reverse: boolean }) => {
    return (
        <div className={`flex flex-row gap-2 bg-[#1B0F1E] py-4 px-3 rounded-3xl ${reverse && "flex-row-reverse px-6 hidden md:flex"}`}>
            <div className='w-[30%] flex flex-col justify-center'>
                <span className="text-[#67CA2F] text-center text-xs">Prize</span>
                <div className='flex justify-center gap-1 items-center'>
                    <Image src={usdc} alt="prize" width={30} height={30} quality={100} />
                    <span className='text-[#67CA2F] text-3xl font-bold'>50K</span>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-center gap-1'>
                <h2 className='text-[#FFE64B] font-bold text-sm'>ONCHAIN CHAMPION</h2>
                <p className="text-milkyBg text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
        </div>
    )
}