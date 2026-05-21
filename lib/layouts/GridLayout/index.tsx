import type { CommonDashboardLayoutNode } from '@/CommonDashboardLayoutNode';
import { DashboardLayoutContext } from '@rotorjs/react';
import { useMemo, type PropsWithChildren } from 'react';
import { GridTileContainer } from './GridTileContainer';

export type GridLayoutNode = CommonDashboardLayoutNode;

export function GridLayout({
  type,
  className,
  style,
  children,
}: PropsWithChildren<GridLayoutNode>) {
  const context = useMemo(
    () => ({ type, tileContainer: GridTileContainer }),
    [type],
  );

  // TODO:
  return (
    <DashboardLayoutContext.Provider value={context}>
      <div className={className} style={style}>
        {children}
      </div>
    </DashboardLayoutContext.Provider>
  );
}
