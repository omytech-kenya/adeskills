import NextImage, { ImageProps } from "next/image";

const Image = ({ ...props }: ImageProps) => {
  return (
    <NextImage
      {...props}
      width={props.width || 500} // Default width if not provided
      height={props.height || 300} // Default height if not provided
      quality={props.quality || 75} // Default quality
      loading={props.loading || 'lazy'} // Default lazy loading
    />
  );
};

export default Image;
