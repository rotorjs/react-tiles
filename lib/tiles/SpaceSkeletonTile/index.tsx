import BasicSkeletonTile from '@/tiles/BasicSkeletonTile';
import type { SpaceTileNode } from '@/tiles/SpaceTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type SpaceSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = SpaceTileNode<Layout>;

const SpaceSkeletonTile = BasicSkeletonTile.bind({});
export default SpaceSkeletonTile;
SpaceSkeletonTile.displayName = 'SpaceSkeletonTile';
