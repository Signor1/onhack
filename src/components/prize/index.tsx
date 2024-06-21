import Image from 'next/image'
import React from 'react'
import usdc from "../../../public/usdc.png"
import vector from "../../../public/vector.png"
import bgPattern from "../../../public/prizeBg.png"

const Prize = () => {
    return (
        <section className="w-full md:my-[32px] my-[16px] lg:h-[931px]  h-[493px] rounded-[36px] bg-[#C568DD] relative overflow-hidden">
            <div className="w-full h-full">
                <Image src={bgPattern} className="w-full h-full object-cover" alt="pattern" width={1376} height={931} quality={100} />
            </div>
            <main className='absolute top-0 left-0 items-center justify-center bg-[#C568DD]/70 flex flex-col h-full w-full px-[96px]'>
                <div className='w-full md:h-[710px] overflow-y-auto h-[445px]'>

                    <div className='w-full md:flex hidden flex-col mb-7'>
                        <h1 className='text-[#1B0F1E] text-4xl font-extrabold'>Prizes</h1>
                        <p className='text-[#1B0F1E] lg:w-1/2 md:w-[70%] w-full'>Stand out projects will be recognized with awards in various categories, offering exciting opportunities. </p>
                    </div>

                    <main className='w-full flex flex-col gap-[16px]'>
                        <div className='flex flex-col md:flex-row gap-[16px]'>
                            <div className='md:h-[444px] md:w-[534px] w-[295px] h-[254px] bg-[#1B0F1E] rounded-[20px] md:rounded-[40px] flex flex-col items-center justify-center gap-3 '>
                                <div className='text-[#FFE64B] tracking-wider text-center font-bold text-xl relative'>
                                    <span>ONCHAIN <br /> CHAMPION</span>
                                    <Image src={vector} alt="vector" className='absolute right-0 -top-7' width={40} height={40} quality={100} />
                                </div>
                                <span className="text-[#67CA2F] bg-[#67CA2F]/10 px-4 py-1.5 rounded-lg text-sm">Prize</span>
                                <div className='flex justify-center gap-3 items-center'>
                                    <Image src={usdc} alt="prize" width={50} height={50} quality={100} />
                                    <span className='text-[#67CA2F] text-5xl font-bold'>50K</span>
                                </div>
                                <p className="text-milkyBg text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                                <p className="text-milkyBg text-sm"><span className='text-[#FFE64B]'>Other Perks:</span> Lorem ipsum dolor sit amet </p>
                            </div>
                            <div className='flex flex-col gap-[16px]'>
                                <SmallCard />
                                <SmallCard />
                                <SmallCard />
                            </div>
                        </div>

                        <div className="w-full md:h-[101px] h-[109px] bg-[#1B0F1E] flex justify-center items-center rounded-[20px] md:rounded-[40px]">
                            <p className="text-milkyBg text-sm">
                                <span className='text-[#FFE64B]'>PERKS FOR EVERY PARTICPANTS AND PROJECTS:</span> Lorem ipsum dolor sit amet </p>
                        </div>

                    </main>
                </div>
            </main>
        </section>
    )
}

export default Prize

const SmallCard = () => {
    return (
        <div className={`flex flex-row gap-2 bg-[#1B0F1E] rounded-[20px] md:rounded-[40px] md:w-[565px] md:h-[136px] w-[295px] h-[109px]`}>
            <div className='w-[30%] flex flex-col justify-center items-center'>
                <span className="text-[#67CA2F] bg-[#67CA2F]/10 px-3 py-1.5 rounded-lg text-center text-xs">Prize</span>
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