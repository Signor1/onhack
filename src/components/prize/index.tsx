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
            <main className='absolute top-0 left-0 items-center justify-center bg-[#C568DD]/70 flex flex-col h-full w-full md:px-[96px] px-5'>
                <div className='w-full md:h-[710px] overflow-y-auto h-[445px]'>

                    <div className='w-full md:flex hidden flex-col mb-7'>
                        <h1 className='text-[#1B0F1E] text-4xl font-extrabold'>Prizes</h1>
                        <p className='text-[#1B0F1E] lg:w-1/2 md:w-[70%] w-full'>Stand out projects will be recognized with awards in various categories, offering exciting opportunities. </p>
                    </div>

                    <main className='w-full flex flex-col gap-[16px]'>
                        <div className='flex flex-col md:flex-row gap-[16px]'>
                            <div className='md:h-[444px] md:w-[534px] w-full h-[254px] bg-[#1B0F1E] rounded-[20px] md:rounded-[40px] flex flex-col items-center justify-center md:gap-4 gap-2'>
                                <div className='text-[#FFE64B] tracking-wide text-center font-bold md:text-3xl text-lg relative'>
                                    <span>Farcaster <br /> CHAMPION</span>
                                    <Image src={vector} alt="vector" className='absolute right-4 md:-top-7 -top-5 md:w-[40px] md:h-[40px] h-[30px] w-[30px]' width={40} height={40} quality={100} />
                                </div>
                                <span className="text-[#67CA2F] bg-[#FFFFFF]/[6%] flex justify-center items-center md:w-[56px] md:h-[31px] h-[21px] w-[38px] rounded-[40px] md:text-sm text-[0.6rem]">Prize</span>
                                <div className='flex justify-center gap-3 items-center'>
                                    <Image src={usdc} alt="prize" className='md:w-[50px] md:h-[50px] h-[30px] w-[30px]' width={50} height={50} quality={100} />
                                    <span className='text-[#67CA2F] md:text-6xl text-3xl font-bold'>500</span>
                                </div>
                                <p className="text-milkyBg md:text-sm text-xs text-center md:px-8 px-2">The best project built on the Farcaster protocol will receive a special prize and recognition. </p>

                                <p className="text-milkyBg text-center md:text-sm text-xs md:px-8 px-2"><span className='text-[#FFE64B]'>Other Perks:</span> Access to top global farcaster OGs and FBI Mentors </p>
                            </div>
                            <div className='flex flex-col gap-[16px]'>
                                <SmallCard prize='250' title='Social' desc='The most innovative social networking, messaging, or crypto social idea will be honored with the Social Champion award.' />
                                <SmallCard prize='250' title='Gaming' desc='The most creative and engaging gaming solution will be crowned the Gaming Champion, receiving a unique prize.' />
                                <SmallCard prize='250' title='Media' desc='The project with the best integration of content, video, photo, or blog media will be awarded the Media Champion title.' />
                            </div>
                        </div>

                        <div className="w-full md:h-[101px] h-[109px] bg-[#1B0F1E] flex justify-center items-center rounded-[20px] md:rounded-[40px]">
                            <p className="text-milkyBg md:text-sm text-xs text-center tracking-wide">
                                <span className='text-[#FFE64B] tracking-wider font-bold'>PERKS FOR EVERY PARTICPANTS AND PROJECTS::</span> Mentorship, networking, and exposure to industry leaders </p>
                        </div>

                    </main>
                </div>
            </main>
        </section>
    )
}

export default Prize

const SmallCard = ({ prize, title, desc }: { prize: string, title: string, desc: string }) => {
    return (
        <div className={`flex flex-row  bg-[#1B0F1E] rounded-[20px] md:rounded-[40px] md:w-[565px] md:h-[136px] w-full h-[109px] justify-center items-center pl-4 pr-[24px] md:gap-[16px] gap-[10px]`}>
            <div className='md:w-[141px] md:h-[104px] w-[70px] h-[52px] flex flex-col justify-center gap-[8px] items-center rounded-[24px] md:bg-[#FFFFFF]/[6%]'>
                <span className="text-[#67CA2F] bg-[#FFFFFF]/[6%] flex justify-center items-center md:w-[56px] md:h-[31px] h-[21px] w-[48px] rounded-[40px] text-center text-[0.6rem] self-start md:ml-4">
                    <Image src={usdc} alt="prize" className='md:hidden inline-block mr-0.5' width={10} height={10} quality={100} />
                    Prize</span>
                <div className='flex justify-center gap-1 items-center'>
                    <Image src={usdc} alt="prize" className='hidden md:inline-block' width={30} height={30} quality={100} />
                    <span className='text-[#67CA2F] text-4xl font-bold'>{prize}</span>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-center md:gap-1 gap-0.5'>
                <h2 className='text-[#67CA2F] font-bold md:text-base text-sm'>{title} CHAMPION</h2>
                <p className="text-milkyBg text-[0.65rem]">{desc}</p>
            </div>
        </div>
    )
}