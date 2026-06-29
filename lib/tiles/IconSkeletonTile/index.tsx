import BasicSkeletonTile from '@/tiles/BasicSkeletonTile';
import type { IconTileNode } from '@/tiles/IconTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type IconSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = IconTileNode<Layout>;

const IconSkeletonTile = BasicSkeletonTile.bind({});
export default IconSkeletonTile;
IconSkeletonTile.displayName = 'IconSkeletonTile';
