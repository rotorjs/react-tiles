import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Container from '@/components/Container';
import { GridTileContainer } from '@/layouts/GridLayout/GridTileContainer';
import { sxx } from '@/sxx';
import GridSkeletonTile from '@/tiles/GridSkeletonTile';
import type {
  DashboardLayoutConfig,
  DashboardTileNode,
} from '@rotorjs/dashboard';
import {
  DashboardLayoutContext,
  DashboardTileContainer,
  DashboardTiles,
} from '@rotorjs/react';
import { clsx } from 'clsx';
import { useMemo } from 'react';

export type GridTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & {
  content?: DashboardTileNode[];
};

export default function GridTile(props: GridTileNode) {
  const { type, layout, className, style, loading, content } =
    props as GridTileNode<CommonDashboardLayoutConfig>;

  const context = useMemo(
    () => ({ type, tileContainer: GridTileContainer }),
    [type],
  );

  if (loading) {
    return <GridSkeletonTile {...props} />;
  }

  return (
    <DashboardTileContainer layout={layout}>
      {(layoutProps) => (
        <DashboardLayoutContext.Provider value={context}>
          <Container
            className={clsx(layoutProps.className, className)}
            style={layoutProps.style}
            sx={sxx({ display: 'grid', gap: 'inherit' }, style)}
            appearance={layout?.appearance}
          >
            {!content?.length ? null : <DashboardTiles content={content} />}
          </Container>
        </DashboardLayoutContext.Provider>
      )}
    </DashboardTileContainer>
  );
}
