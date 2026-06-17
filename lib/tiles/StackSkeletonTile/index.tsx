import BasicLayoutSkeletonTile from '@/tiles/BasicLayoutSkeletonTile';
import type { StackTileNode } from '@/tiles/StackTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type StackSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = StackTileNode<Layout>;

const StackSkeletonTile = BasicLayoutSkeletonTile.bind({});
export default StackSkeletonTile;
StackSkeletonTile.displayName = 'StackSkeletonTile';
