import { sxx } from '@/sxx';
import Paper from '@mui/material/Paper';
import type { SxProps, Theme } from '@mui/material/styles';
import type { CSSProperties, ElementType, PropsWithChildren, Ref } from 'react';

export type CardProps = PropsWithChildren<{
  ref?: Ref<HTMLDivElement>;
  component?: ElementType;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
}>;

export default function Card({
  ref,
  component,
  className,
  style,
  sx,
  children,
}: CardProps) {
  return (
    <Paper
      ref={ref}
      component={component!}
      className={className}
      style={style}
      sx={sxx({ padding: 2, display: 'grid' }, sx)}
    >
      {children}
    </Paper>
  );
}
Card.displayName = 'Card';
