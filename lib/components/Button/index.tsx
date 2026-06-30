import MUIButton from '@mui/material/Button';
import type { SxProps, Theme } from '@mui/material/styles';
import type {
  CSSProperties,
  ElementType,
  PropsWithChildren,
  ReactNode,
  Ref,
} from 'react';

export type ButtonProps = PropsWithChildren<{
  ref?: Ref<HTMLSpanElement>;
  component?: ElementType;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  disabled?: boolean;
  endIcon?: ReactNode;
  fluid?: boolean;
  href?: string;
  loading?: boolean;
  loadingPosition?: 'center' | 'end' | 'start';
  size?: 'large' | 'medium' | 'small';
  startIcon?: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}>;

export default function Button({
  ref,
  component,
  className,
  style,
  sx,
  color,
  disabled,
  endIcon,
  fluid,
  href,
  startIcon,
  loading,
  loadingPosition,
  variant,
  onClick,
  size,
  children,
}: ButtonProps) {
  return (
    <MUIButton
      ref={ref}
      component={component!}
      className={className}
      style={style}
      sx={sx}
      color={color}
      disabled={disabled}
      endIcon={endIcon}
      fullWidth={fluid}
      href={href}
      startIcon={startIcon}
      loading={loading}
      loadingPosition={loadingPosition}
      variant={variant}
      onClick={onClick}
      size={size}
    >
      {children}
    </MUIButton>
  );
}
Button.displayName = 'Button';
