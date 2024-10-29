import type { ComponentProps } from "react";
import Image from "next/image";


type ImageProps = ComponentProps<typeof Image>;
type Props = Omit<ImageProps, "src"> & {
  darkSrc: ImageProps["src"];
  lightSrc: ImageProps["src"];
  alt: string;
}

const DualModeImage = ({ darkSrc, lightSrc, className, alt, ...props }: Props) => {
  return (
    <>
      <Image src={lightSrc} className={`dark:hidden ${className}`} alt={alt} {...props} />
      <Image src={darkSrc} className={`hidden dark:block ${className}`} alt={alt} {...props} />
    </>
  );
};

export default DualModeImage;
