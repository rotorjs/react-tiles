import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import { StackTileContainer } from '@/layouts/StackLayout/StackTileContainer';
import { sxx } from '@/sxx';
import StackSkeletonTile from '@/tiles/StackSkeletonTile';
import type {
  DashboardLayoutConfig,
  DashboardTileNode,
} from '@rotorjs/dashboard';
import { DashboardLayoutContext, DashboardTiles } from '@rotorjs/react';
import { useMemo } from 'react';

export type StackTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & {
  content?: DashboardTileNode[];
};

export default function StackTile(props: StackTileNode) {
  const { type, layout, className, style, loading, content } =
    props as StackTileNode<CommonDashboardLayoutConfig>;

  const context = useMemo(
    () => ({ type, tileContainer: StackTileContainer }),
    [type],
  );

  if (loading) {
    return <StackSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer
      className={className}
      sx={sxx(
        { display: 'flex', flexDirection: 'column', gap: 'inherit' },
        style,
      )}
      layout={layout}
      defaultAppearance="space"
    >
      <DashboardLayoutContext.Provider value={context}>
        {!content?.length ? null : <DashboardTiles content={content} />}
      </DashboardLayoutContext.Provider>
    </CommonDashboardTileContainer>
  );
}
StackTile.displayName = 'StackTile';
