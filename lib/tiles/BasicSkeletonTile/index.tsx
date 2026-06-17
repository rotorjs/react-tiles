import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import SkeletonTile from '@/tiles/SkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type BasicSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout>;

export default function BasicSkeletonTile(props: BasicSkeletonTileNode) {
  const { type, id, layout, className, style } =
    props as BasicSkeletonTileNode<CommonDashboardLayoutConfig>;

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
BasicSkeletonTile.displayName = 'BasicSkeletonTile';
