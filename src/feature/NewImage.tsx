import Image, { StaticImageData } from 'next/image';

type NewImageProps = {
    src : StaticImageData
    alt : string
    width : number
    height : number
}

export const NewImage = (
    {src, alt, width, height} : NewImageProps
) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
}