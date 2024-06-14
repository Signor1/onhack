import Link from "next/link"


const Invitation = () => {
    return (
        <section className="w-full flex flex-col gap-3 items-center justify-center bg-[#60A3F3] prizeBg md:py-24 py-16 rounded-3xl">
            <h1 className="text-[#13263E] font-semibold md:text-3xl text-2xl text-center md:w-[60%] w-[90%]">OnHack is For Every Based Developer,
                Designer, Content Creator or Artist</h1>
            <Link href={`/`} className="text-milkyBg mt-3 overflow-hidden relative bg-liteBlack px-16 rounded-lg py-2.5 z-10 before:absolute before:top-0 before:left-0 before:-z-10 before:w-0 before:h-full before:transition-all before:duration-300 before:bg-greenBg hover:before:w-full">Apply Now</Link>

        </section>
    )
}

export default Invitation