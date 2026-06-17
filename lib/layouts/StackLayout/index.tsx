import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import type { CommonDashboardLayoutNode } from '@/CommonDashboardLayoutNode';
import { sxx } from '@/sxx';
import Box from '@mui/material/Box';
import { DashboardLayoutContext } from '@rotorjs/react';
import { useMemo, type PropsWithChildren } from 'react';
import { StackTileContainer } from './StackTileContainer';

export type StackLayoutNode = CommonDashboardLayoutNode;

export type StackLayoutConfig = CommonDashboardLayoutConfig;

export default function StackLayout({
  type,
  className,
  style,
  children,
}: PropsWithChildren<StackLayoutNode>) {
  const context = useMemo(
    () => ({ type, tileContainer: StackTileContainer }),
    [type],
  );

  return (
    <DashboardLayoutContext.Provider value={context}>
      <Box
        className={className}
        sx={sxx(
          {
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          },
          style,
        )}
      >
        {children}
      </Box>
    </DashboardLayoutContext.Provider>
  );
}
StackLayout.displayName = 'StackLayout';
