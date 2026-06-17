import type { GridTileNode } from '@/tiles/GridTile';
import SkeletonTile from '@/tiles/SkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type GridSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = GridTileNode<Layout>;

export default function GridSkeletonTile({
  type,
  id,
  layout,
  className,
  style,
}: GridSkeletonTileNode) {
  // TODO:
  return <SkeletonTile {...{ type, id, layout, className, style }} />;
}
