import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { sxx } from '@/sxx';
import type { GridTileNode } from '@/tiles/GridTile';
import SkeletonTile from '@/tiles/SkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type GridSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = GridTileNode<Layout>;

export default function GridSkeletonTile(props: GridSkeletonTileNode) {
  const { type, id, layout, className, style } =
    props as GridSkeletonTileNode<CommonDashboardLayoutConfig>;

  return (
    <SkeletonTile
      type={type}
      id={id}
      layout={{
        ...layout,
        style: sxx(layout?.style, {
          display: 'grid',
          gridTemplate: 'unset',
          placeContent: 'stretch',
          placeItems: 'stretch',
        }),
      }}
      className={className}
      style={style}
    />
  );
}
