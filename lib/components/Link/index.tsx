import { sxx } from '@/sxx';
import MUILink from '@mui/material/Link';
import type { SxProps, Theme } from '@mui/material/styles';
import {
  type CSSProperties,
  type ElementType,
  type PropsWithChildren,
  type Ref,
} from 'react';

export type LinkProps = PropsWithChildren<{
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
    | 'textDisabled'
    | (string & {});
  underline?: 'always' | 'hover' | 'none';
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
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}>;

export default function Link({
  ref,
  component,
  className,
  style,
  sx,
  color,
  underline,
  variant,
  href,
  onClick,
  children,
}: LinkProps) {
  return (
    <MUILink
      ref={ref}
      component={component!}
      className={className}
      style={style}
      sx={sxx(sx, !href && !onClick ? undefined : { cursor: 'pointer' })}
      color={color}
      underline={underline}
      variant={variant}
      href={href}
      onClick={onClick}
    >
      {children}
    </MUILink>
  );
}
Link.displayName = 'Link';
