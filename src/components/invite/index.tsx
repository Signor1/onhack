import Link from "next/link"
import bgPattern from "../../../public/prizeBg.png"
import Image from "next/image"

const Invitation = () => {
    return (
        <section className="w-full h-[300px] relative rounded-3xl overflow-hidden">
            <div className="w-full h-full">
                <Image src={bgPattern} className="w-full h-full object-cover" alt="pattern" width={1376} height={931} quality={100} />
            </div>
            <main className="w-full h-full absolute top-0 left-0 flex flex-col gap-3 items-center justify-center bg-[#0052FE]/90 rounded-3xl">
                <h1 className="text-gray-100 font-semibold md:text-4xl text-2xl text-center md:w-[60%] w-[90%]">OnHack is For Every Based Developer,
                    Designer, Content Creator or Artist</h1>
                <Link href={`/`} className="text-milkyBg mt-3 overflow-hidden relative bg-[#13263E] flex justify-center items-center w-[167px] h-[44px] rounded-[8px] z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-greenBg hover:before:w-full">Apply Now</Link>
            </main>
        </section>
    )
}

export default Invitation