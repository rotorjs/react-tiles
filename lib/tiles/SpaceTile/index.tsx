import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import { sxx } from '@/sxx';
import BasicSkeletonTile from '@/tiles/BasicSkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type SpaceTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout>;

export default function SpaceTile(props: SpaceTileNode) {
  const { layout, className, style, loading } =
    props as SpaceTileNode<CommonDashboardLayoutConfig>;

  if (loading) {
    return <BasicSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer
      className={className}
      sx={sxx({ display: 'block' }, style)}
      layout={layout}
      defaultAppearance="space"
    />
  );
}
SpaceTile.displayName = 'SpaceTile';
