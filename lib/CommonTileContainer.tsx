import { styled, type SxProps, type Theme } from '@mui/material/styles';
import type { DashboardTileContainerProps } from '@rotorjs/react';
import { clsx } from 'clsx';
import type { CSSProperties, ReactNode } from 'react';
import type { CommonDashboardLayoutConfig } from './CommonDashboardLayoutConfig';
import { sxx } from './sxx';

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

export function CommonTileContainer({
  className,
  style,
  sx,
  layout,
  children,
}: DashboardTileContainerProps & {
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
}) {
  const layoutConfig = (layout ?? {}) as CommonDashboardLayoutConfig;

  return (
    <MUIWrapper
      className={clsx(className, layoutConfig.className)}
      style={style}
      sx={sxx(sx, layoutConfig.style)}
    >
      {children}
    </MUIWrapper>
  );
}
CommonTileContainer.displayName = 'CommonTileContainer';
