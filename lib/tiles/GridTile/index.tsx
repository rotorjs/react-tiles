import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import { GridSkeletonTile } from '../GridSkeletonTile';

export type GridTileNode = CommonDashboardTileNode;

export function GridTile(props: GridTileNode) {
  const { loading } = props;

  if (loading) {
    return <GridSkeletonTile {...props} />;
  }

  // TODO:
  return (
    <CommonDashboardTileContainer {...props}>
      {(layoutProps) => <div {...layoutProps} />}
    </CommonDashboardTileContainer>
  );
}
