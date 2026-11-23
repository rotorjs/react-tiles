import MUIWrapper from '@/MUIWrapper';
import { type SxProps, type Theme } from '@mui/material/styles';
import type { CSSProperties, Ref } from 'react';

export type ImageProps = {
  ref?: Ref<HTMLImageElement>;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  alt?: string;
  height?: string | number;
  loading?: 'eager' | 'lazy';
  sizes?: string;
  srcSet?: string;
  src?: string;
  width?: string | number;
};

export default function Image({
  ref,
  className,
  style,
  sx,
  alt,
  height,
  loading,
  sizes,
  srcSet,
  src,
  width,
}: ImageProps) {
  return (
    <MUIWrapper className={className} style={style} sx={sx}>
      {({ className, style }) => (
        <img
          ref={ref}
          className={className}
          style={style}
          alt={alt}
          height={height}
          loading={loading}
          sizes={sizes}
          srcSet={srcSet}
          src={src}
          width={width}
        />
      )}
    </MUIWrapper>
  );
}
Image.displayName = 'Image';
