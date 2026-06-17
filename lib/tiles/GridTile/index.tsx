import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import { GridTileContainer } from '@/layouts/GridLayout/GridTileContainer';
import { sxx } from '@/sxx';
import GridSkeletonTile from '@/tiles/GridSkeletonTile';
import type {
  DashboardLayoutConfig,
  DashboardTileNode,
} from '@rotorjs/dashboard';
import { DashboardLayoutContext, DashboardTiles } from '@rotorjs/react';
import { useMemo } from 'react';

export type GridTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & {
  content?: DashboardTileNode[];
};

export default function GridTile(props: GridTileNode) {
  const { type, layout, className, style, loading, content } =
    props as GridTileNode<CommonDashboardLayoutConfig>;

  const context = useMemo(
    () => ({ type, tileContainer: GridTileContainer }),
    [type],
  );

  if (loading) {
    return <GridSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer
      className={className}
      sx={sxx({ display: 'grid', gap: 'inherit' }, style)}
      layout={layout}
      defaultAppearance="space"
    >
      <DashboardLayoutContext.Provider value={context}>
        {!content?.length ? null : <DashboardTiles content={content} />}
      </DashboardLayoutContext.Provider>
    </CommonDashboardTileContainer>
  );
}
GridTile.displayName = 'GridTile';
