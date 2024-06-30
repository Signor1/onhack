import Image, { StaticImageData } from 'next/image'
import React from 'react'

const ImageWrapper = ({ image, shapeone, shapetwo }: {
    image: StaticImageData,
    shapeone: StaticImageData,
    shapetwo: StaticImageData
}) => {
    return (
        <div className='relative w-full h-full'>
            <Image src={image} alt='Image' className='w-full md:rounded-[36px] rounded-[20px] h-full object-top md:object-center object-cover' width={561} height={665} quality={100} priority />

            <div className="absolute md:-right-3 md:-top-4 -right-4 -top-3 md:w-[96px] md:h-[96px] w-[50px] h-[50px]">
                <Image src={shapeone} alt="shape" className="h-full w-full" width={131} height={131} quality={100} priority />
            </div>
            <div className="absolute md:-left-8 md:-bottom-6 -left-3 -bottom-2 md:w-[96px] md:h-[96px] w-[50px] h-[50px]">
                <Image src={shapetwo} alt="shape" className="h-full w-full" width={131} height={131} quality={100} priority />
            </div>
        </div>
    )
}

export default ImageWrapper