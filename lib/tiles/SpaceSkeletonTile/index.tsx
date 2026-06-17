import { sxx } from '@/sxx';
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
  // TODO:
  return (
    <SkeletonTile
      type={type}
      id={id}
      layout={layout}
      className={className}
      style={sxx({ width: '100%', height: '100%' }, style)}
      variant="rounded"
    />
  );
}
