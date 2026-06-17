import SkeletonTile from '@/tiles/SkeletonTile';
import type { SpaceTileNode } from '@/tiles/SpaceTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type SpaceSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = SpaceTileNode<Layout>;

export default function SpaceSkeletonTile({
  type,
  id,
  layout,
  className,
  style,
}: SpaceSkeletonTileNode) {
  return (
    <SkeletonTile
      type={type}
      id={id}
      layout={layout}
      className={className}
      style={style}
    />
  );
}
