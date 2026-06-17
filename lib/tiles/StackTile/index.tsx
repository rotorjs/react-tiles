import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Container from '@/components/Container';
import { StackTileContainer } from '@/layouts/StackLayout/StackTileContainer';
import { sxx } from '@/sxx';
import StackSkeletonTile from '@/tiles/StackSkeletonTile';
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

export type StackTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & {
  content?: DashboardTileNode[];
};

export default function StackTile(props: StackTileNode) {
  const { type, layout, className, style, loading, content } =
    props as StackTileNode<CommonDashboardLayoutConfig>;

  const context = useMemo(
    () => ({ type, tileContainer: StackTileContainer }),
    [type],
  );

  if (loading) {
    return <StackSkeletonTile {...props} />;
  }

  return (
    <DashboardTileContainer layout={layout}>
      {(layoutProps) => (
        <DashboardLayoutContext.Provider value={context}>
          <Container
            className={clsx(layoutProps.className, className)}
            style={layoutProps.style}
            sx={sxx(
              { display: 'flex', flexDirection: 'column', gap: 'inherit' },
              style,
            )}
            appearance={layout?.appearance}
          >
            {!content?.length ? null : <DashboardTiles content={content} />}
          </Container>
        </DashboardLayoutContext.Provider>
      )}
    </DashboardTileContainer>
  );
}
