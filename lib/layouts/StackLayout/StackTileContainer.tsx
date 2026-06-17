import { styled } from '@mui/material/styles';
import type { DashboardTileContainerProps } from '@rotorjs/react';
import type { CSSProperties, ReactNode } from 'react';
import type { StackLayoutConfig } from '.';

const MUIWrapper = styled(
  ({
    className,
    style,
    children,
  }: {
    className?: string;
    style?: CSSProperties;
    children: (layoutProps: {
      className?: string;
      style?: CSSProperties;
    }) => ReactNode;
  }) => children({ className, style }),
)({});

export function StackTileContainer({
  layout,
  children,
}: DashboardTileContainerProps) {
  const { className, style } = (layout ?? {}) as StackLayoutConfig;

  return (
    <MUIWrapper className={className} sx={style}>
      {children}
    </MUIWrapper>
  );
}
