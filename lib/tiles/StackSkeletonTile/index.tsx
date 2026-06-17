import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { sxx } from '@/sxx';
import SkeletonTile from '@/tiles/SkeletonTile';
import type { StackTileNode } from '@/tiles/StackTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type StackSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = StackTileNode<Layout>;

export default function StackSkeletonTile(props: StackSkeletonTileNode) {
  const { type, id, layout, className, style } =
    props as StackSkeletonTileNode<CommonDashboardLayoutConfig>;

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
