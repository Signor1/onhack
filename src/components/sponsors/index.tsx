import Image from "next/image"
import sponsorImg from "../../../public/base.png"

const Sponsors = () => {
    return (
        <section className="w-full overflow-hidden mt-16 flex flex-col items-center">
            <span className='bg-black/10 text-black px-6 py-3 rounded-xl'>Sponsors & Partners</span>

            <div className="flex flex-nowrap gap-3 mt-8">
                {
                    [...Array(20)].map((_, index) => (
                        <div className="w-[130px]" key={index}>
                            <Image src={sponsorImg} className="w-full" alt="sponsor1" width={165} height={32} quality={100} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Sponsors