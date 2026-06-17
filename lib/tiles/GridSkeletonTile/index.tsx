import BasicLayoutSkeletonTile from '@/tiles/BasicLayoutSkeletonTile';
import type { GridTileNode } from '@/tiles/GridTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type GridSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = GridTileNode<Layout>;

const GridSkeletonTile = BasicLayoutSkeletonTile.bind({});
export default GridSkeletonTile;
GridSkeletonTile.displayName = 'GridSkeletonTile';
