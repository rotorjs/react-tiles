import {
  DashboardLayoutContext,
  DashboardTiles,
  type DashboardTilesProps,
} from '@rotorjs/react';
import { CommonTileContainer } from './CommonTileContainer';

const context = { type: 'inline', tileContainer: CommonTileContainer };

export function InlineDashboardTiles(props: DashboardTilesProps) {
  return (
    <DashboardLayoutContext.Provider value={context}>
      <DashboardTiles {...props} />
    </DashboardLayoutContext.Provider>
  );
}
