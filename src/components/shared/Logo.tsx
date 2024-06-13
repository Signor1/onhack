import Image from 'next/image'
import onhacklogo from "../../../public/logo.png"

const Logo = () => {
    return (
        <>
            <Image src={onhacklogo} alt='logo' width={74} height={43} quality={100} priority />
        </>
    )
}

export default Logo