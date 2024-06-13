import Image, { StaticImageData } from 'next/image'
import React from 'react'

const ImageWrapper = ({ image, shapeone, shapetwo }: {
    image: StaticImageData,
    shapeone: StaticImageData,
    shapetwo: StaticImageData
}) => {
    return (
        <div className='relative lg:h-[530px] md:h-[450px] h-[250px] w-full md:w-auto'>
            <Image src={image} alt='Image' className='w-full rounded-3xl h-full object-cover' width={561} height={665} quality={100} priority />

            <div className="absolute md:-right-8 md:-top-6 -right-4 -top-3 lg:w-[131px] lg:h-[131px]">
                <Image src={shapeone} alt="shape" className="h-full w-full" width={131} height={131} quality={100} priority />
            </div>
            <div className="absolute md:-left-8 md:-bottom-6 -left-3 -bottom-2 lg:w-[131px] lg:h-[131px]">
                <Image src={shapetwo} alt="shape" className="h-full w-full" width={131} height={131} quality={100} priority />
            </div>
        </div>
    )
}

export default ImageWrapper