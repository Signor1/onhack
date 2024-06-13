import Image from "next/image"
import bannerlg from "../../../public/banner.png"
import bannersm from "../../../public/bannerMob.png"

const Banner = () => {
    return (
        <main className="w-full">
            <div className="w-full md:block hidden">
                <Image src={bannerlg} alt="banner" className="w-full" width={1376} height={333} priority quality={100} />
            </div>
            <div className="w-full block md:hidden">
                <Image src={bannersm} alt="banner" className="w-full" width={343} height={334} priority quality={100} />
            </div>
        </main>
    )
}

export default Banner