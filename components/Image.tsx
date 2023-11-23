import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
    <NextImage src={`/blogv1${src}`} {...rest} />
)

export default Image
