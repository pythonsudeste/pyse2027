import Image, { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';

type NewImageProps = {
    src : StaticImageData
    alt : string
    width : string
    height : string
    objectFit? : CSSProperties['objectFit']
}

export const NewImage = (
    {src, alt, width, height, objectFit = 'fill' } : NewImageProps
) => {
    return (
        <Image
            src={src}
            alt={alt}
            sizes="100vw"
            style={{
                width: width,
                height: height,
                objectFit: objectFit 
            }}
        />
    )
}