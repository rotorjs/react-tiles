import type { MarkdownTileNode } from '@/tiles/MarkdownTile';
import SkeletonTile from '@/tiles/SkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type MarkdownSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = MarkdownTileNode<Layout>;

export default function MarkdownSkeletonTile({
  type,
  id,
  layout,
  className,
  style,
}: MarkdownSkeletonTileNode) {
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
