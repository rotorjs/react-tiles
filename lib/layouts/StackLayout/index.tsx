import type { CommonDashboardLayoutNode } from '@/CommonDashboardLayoutNode';
import { DashboardLayoutContext } from '@rotorjs/react';
import { useMemo, type PropsWithChildren } from 'react';
import { StackTileContainer } from './StackTileContainer';

export type StackLayoutNode = CommonDashboardLayoutNode;

export function StackLayout({
  type,
  className,
  style,
  children,
}: PropsWithChildren<StackLayoutNode>) {
  const context = useMemo(
    () => ({ type, tileContainer: StackTileContainer }),
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
