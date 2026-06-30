import type { SxProps, Theme } from '@mui/material/styles';
import MUITypography from '@mui/material/Typography';
import type { CSSProperties, ElementType, PropsWithChildren, Ref } from 'react';

export type TypographyProps = PropsWithChildren<{
  ref?: Ref<HTMLSpanElement>;
  component?: ElementType;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'textPrimary'
    | 'textSecondary'
    | 'textDisabled';
  variant?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
}>;

export default function Typography({
  ref,
  component,
  className,
  style,
  sx,
  color,
  variant,
  children,
}: TypographyProps) {
  return (
    <MUITypography
      ref={ref}
      component={component!}
      className={className}
      style={style}
      sx={sx}
      color={color}
      variant={variant}
    >
      {children}
    </MUITypography>
  );
}
Typography.displayName = 'Typography';
