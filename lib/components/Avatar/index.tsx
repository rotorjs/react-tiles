import MUIAvatar from '@mui/material/Avatar';
import { type SxProps, type Theme } from '@mui/material/styles';
import type { CSSProperties, ElementType, PropsWithChildren, Ref } from 'react';

export type AvatarProps = PropsWithChildren<{
  ref?: Ref<HTMLImageElement>;
  component?: ElementType;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  alt?: string;
  sizes?: string;
  srcSet?: string;
  src?: string;
  variant?: 'circular' | 'rounded' | 'square';
}>;

export default function Avatar({
  ref,
  component,
  className,
  style,
  sx,
  alt,
  sizes,
  srcSet,
  src,
  variant,
  children,
}: AvatarProps) {
  return (
    <MUIAvatar
      ref={ref}
      component={component!}
      className={className}
      style={style}
      sx={sx}
      alt={alt}
      sizes={sizes}
      srcSet={srcSet}
      src={src}
      variant={variant}
    >
      {children}
    </MUIAvatar>
  );
}
Avatar.displayName = 'Avatar';
