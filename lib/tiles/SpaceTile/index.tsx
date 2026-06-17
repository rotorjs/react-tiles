import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Container from '@/components/Container';
import SpaceSkeletonTile from '@/tiles/SpaceSkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';
import { DashboardTileContainer } from '@rotorjs/react';
import { clsx } from 'clsx';

export type SpaceTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout>;

export default function SpaceTile(props: SpaceTileNode) {
  const { layout, className, style, loading } =
    props as SpaceTileNode<CommonDashboardLayoutConfig>;

  if (loading) {
    return <SpaceSkeletonTile {...props} />;
  }

  return (
    <DashboardTileContainer layout={layout}>
      {(layoutProps) => (
        <Container
          className={clsx(layoutProps.className, className)}
          style={layoutProps.style}
          sx={style}
          appearance={layout?.appearance}
        />
      )}
    </DashboardTileContainer>
  );
}
