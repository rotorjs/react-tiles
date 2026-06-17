import type { CommonDashboardAppearance } from '@/CommonDashboardLayoutConfig';
import Card from '@/components/Card';
import Outline from '@/components/Outline';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import type { CSSProperties, ElementType, PropsWithChildren, Ref } from 'react';

export type ContainerProps = PropsWithChildren<{
  ref?: Ref<HTMLDivElement>;
  component?: ElementType;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  appearance?: CommonDashboardAppearance;
}>;

export default function Container({
  ref,
  component,
  className,
  style,
  sx,
  appearance,
  children,
}: ContainerProps) {
  switch (appearance) {
    case 'card':
      return (
        <Card
          ref={ref}
          component={component}
          className={className}
          style={style}
          sx={sx}
        >
          {children}
        </Card>
      );

    case 'outline':
      return (
        <Outline
          ref={ref}
          component={component}
          className={className}
          style={style}
          sx={sx}
        >
          {children}
        </Outline>
      );

    default:
      return (
        <Box
          ref={ref}
          component={component!}
          className={className}
          style={style}
          sx={sx}
        >
          {children}
        </Box>
      );
  }
}
