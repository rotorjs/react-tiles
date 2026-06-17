import SkeletonTile from '@/tiles/SkeletonTile';
import type { StackTileNode } from '@/tiles/StackTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type StackSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = StackTileNode<Layout>;

export default function StackSkeletonTile({
  type,
  id,
  layout,
  className,
  style,
}: StackSkeletonTileNode) {
  // TODO:
  return <SkeletonTile {...{ type, id, layout, className, style }} />;
}
