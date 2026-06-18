import MUIDivider from '@mui/material/Divider';
import type { SxProps, Theme } from '@mui/material/styles';
import type { CSSProperties, ElementType, PropsWithChildren, Ref } from 'react';

export type DividerProps = PropsWithChildren<{
  ref?: Ref<HTMLHRElement>;
  component?: ElementType;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'fullWidth' | 'inset' | 'middle';
  textAlign?: 'center' | 'left' | 'right';
}>;

export default function Divider({
  ref,
  component,
  className,
  style,
  sx,
  orientation,
  variant,
  textAlign,
  children,
}: DividerProps) {
  return (
    <MUIDivider
      ref={ref}
      component={component!}
      className={className}
      style={style}
      sx={sx}
      orientation={orientation}
      variant={variant}
      textAlign={textAlign}
    >
      {children}
    </MUIDivider>
  );
}
