import Image from 'next/image'
import onhacklogo from "../../../public/logo.png"

const Logo = () => {
    return (
        <div className='w-[68px] md:w-[83px]'>
            <Image src={onhacklogo} alt='logo' width={74} height={43} quality={100} priority />
        </div>
    )
}

export default Logo