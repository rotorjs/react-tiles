import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import JsonView from '@/components/JsonView';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type DumpTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & Record<string, unknown>;

export default function DumpTile(props: DumpTileNode) {
  const {
    type: _type,
    layout,
    ...rest
  } = props as DumpTileNode<CommonDashboardLayoutConfig>;

  const dump = Object.fromEntries(
    Object.entries({ layout, ...rest }).filter(
      ([, value]) => value !== undefined,
    ),
  );

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
      <JsonView value={dump} />
    </CommonDashboardTileContainer>
  );
}
DumpTile.displayName = 'DumpTile';
