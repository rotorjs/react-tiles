import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import type { CommonDashboardLayoutNode } from '@/CommonDashboardLayoutNode';
import { sxx } from '@/sxx';
import Box from '@mui/material/Box';
import { DashboardLayoutContext } from '@rotorjs/react';
import { useMemo, type PropsWithChildren } from 'react';
import { GridTileContainer } from './GridTileContainer';

export type GridLayoutNode = CommonDashboardLayoutNode;

export type GridLayoutConfig = CommonDashboardLayoutConfig;

export default function GridLayout({
  type,
  className,
  style,
  children,
}: PropsWithChildren<GridLayoutNode>) {
  const context = useMemo(
    () => ({ type, tileContainer: GridTileContainer }),
    [type],
  );

  return (
    <DashboardLayoutContext.Provider value={context}>
      <Box
        className={className}
        sx={sxx(
          {
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            placeItems: 'stretch',
            placeContent: 'start center',
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
