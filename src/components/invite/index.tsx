import Link from "next/link"
import bgPattern from "../../../public/prizeBg.png"
import Image from "next/image"

const Invitation = () => {
    return (
        <section className="w-full h-[300px] relative rounded-3xl overflow-hidden">
            <div className="w-full h-full">
                <Image src={bgPattern} className="w-full h-full object-cover" alt="pattern" width={1376} height={931} quality={100} />
            </div>
            <main className="w-full h-full absolute top-0 left-0 flex flex-col gap-3 items-center justify-center bg-[#60A3F3]/90 rounded-3xl">
                <h1 className="text-[#13263E] font-semibold md:text-3xl text-2xl text-center md:w-[60%] w-[90%]">OnHack is For Every Based Developer,
                    Designer, Content Creator or Artist</h1>
                <Link href={`/`} className="text-milkyBg mt-3 overflow-hidden relative bg-liteBlack px-16 rounded-lg py-2.5 z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-greenBg hover:before:w-full">Apply Now</Link>
            </main>
        </section>
    )
}

export default Invitation