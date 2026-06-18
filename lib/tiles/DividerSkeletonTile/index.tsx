import BasicSkeletonTile from '@/tiles/BasicSkeletonTile';
import type { DividerTileNode } from '@/tiles/DividerTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type DividerSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = DividerTileNode<Layout>;

const DividerSkeletonTile = BasicSkeletonTile.bind({});
export default DividerSkeletonTile;
DividerSkeletonTile.displayName = 'DividerSkeletonTile';
