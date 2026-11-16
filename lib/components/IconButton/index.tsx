import MUIIconButton from '@mui/material/IconButton';
import type { SxProps, Theme } from '@mui/material/styles';
import type { CSSProperties, ElementType, PropsWithChildren, Ref } from 'react';

export type IconButtonProps = PropsWithChildren<{
  ref?: Ref<HTMLButtonElement>;
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
  loading?: boolean;
  size?: 'large' | 'medium' | 'small';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}>;

export default function IconButton({
  ref,
  component,
  className,
  style,
  sx,
  color,
  disabled,
  loading,
  size,
  onClick,
  children,
}: IconButtonProps) {
  return (
    <MUIIconButton
      ref={ref}
      component={component!}
      className={className}
      style={style}
      sx={sx}
      color={color}
      disabled={disabled}
      loading={loading}
      size={size}
      onClick={onClick}
    >
      {children}
    </MUIIconButton>
  );
}
IconButton.displayName = 'IconButton';
