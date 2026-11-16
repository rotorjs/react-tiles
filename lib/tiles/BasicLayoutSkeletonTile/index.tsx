import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import { sxx } from '@/sxx';
import SkeletonTile from '@/tiles/SkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';
import { useMemo } from 'react';

export type BasicLayoutSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout>;

export default function BasicLayoutSkeletonTile(
  props: BasicLayoutSkeletonTileNode,
) {
  const { type, id, layout, className, style } =
    props as BasicLayoutSkeletonTileNode<CommonDashboardLayoutConfig>;

  const styledLayout = useMemo(
    () => ({
      ...layout,
      style: sxx(layout?.style, {
        display: 'grid',
        grid: 'unset',
        placeContent: 'stretch',
        placeItems: 'stretch',
      }),
    }),
    [layout],
  );

  return (
    <SkeletonTile
      type={type}
      id={id}
      layout={styledLayout}
      className={className}
      style={style}
    />
  );
}
BasicLayoutSkeletonTile.displayName = 'BasicLayoutSkeletonTile';
