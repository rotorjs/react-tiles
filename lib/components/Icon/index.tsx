import MUIIcon from '@mui/material/Icon';
import type { SxProps, Theme } from '@mui/material/styles';
import type { CSSProperties, ElementType, Ref } from 'react';

export type IconProps = {
  ref?: Ref<HTMLSpanElement>;
  component?: ElementType;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  color?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  fontSize?: 'inherit' | 'large' | 'medium' | 'small';
  iconSet?: string;
  name?: string;
};

export default function Icon({
  ref,
  component,
  className,
  style,
  sx,
  color,
  fontSize,
  iconSet,
  name,
}: IconProps) {
  return (
    <MUIIcon
      ref={ref}
      component={component!}
      className={className}
      style={style}
      sx={sx}
      color={color}
      fontSize={fontSize}
      baseClassName={iconSet}
    >
      {name}
    </MUIIcon>
  );
}
