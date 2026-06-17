import BasicSkeletonTile from '@/tiles/BasicSkeletonTile';
import type { MarkdownTileNode } from '@/tiles/MarkdownTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type MarkdownSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = MarkdownTileNode<Layout>;

const MarkdownSkeletonTile = BasicSkeletonTile.bind({});
export default MarkdownSkeletonTile;
MarkdownSkeletonTile.displayName = 'MarkdownSkeletonTile';
