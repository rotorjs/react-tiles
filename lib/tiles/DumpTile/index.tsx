import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type DumpTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & Record<string, unknown>;

export default function DumpTile(props: DumpTileNode) {
  const {
    type: _,
    layout,
    ...rest
  } = props as DumpTileNode<CommonDashboardLayoutConfig>;

  return (
    <CommonDashboardTileContainer
      sx={{
        minWidth: 100,
        minHeight: 100,
        color: 'info.main',
        borderColor: 'info.main',
        borderStyle: 'dashed',
        boxSizing: 'border-box',
        borderWidth: 1,
        overflow: 'auto',
      }}
      layout={layout}
      defaultAppearance="outline"
    >
      <pre style={{ marginBlock: 'unset' }}>
        {JSON.stringify({ layout, ...rest }, null, 2)}
      </pre>
    </CommonDashboardTileContainer>
  );
}
DumpTile.displayName = 'DumpTile';
