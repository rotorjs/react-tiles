import MUISkeleton from '@mui/material/Skeleton';
import type { SxProps, Theme } from '@mui/material/styles';
import type { CSSProperties, ElementType, Ref } from 'react';

export type SkeletonProps = {
  ref?: Ref<HTMLSpanElement>;
  component?: ElementType;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  variant?: 'circular' | 'rectangular' | 'rounded' | 'text';
};

export default function Skeleton({
  ref,
  component,
  className,
  style,
  sx,
  variant,
}: SkeletonProps) {
  return (
    <MUISkeleton
      ref={ref}
      component={component!}
      className={className}
      style={style}
      sx={sx}
      variant={variant}
    />
  );
}
Skeleton.displayName = 'Skeleton';
