import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import { StackSkeletonTile } from '../StackSkeletonTile';

export type StackTileNode = CommonDashboardTileNode;

export function StackTile(props: StackTileNode) {
  const { loading } = props;

  if (loading) {
    return <StackSkeletonTile {...props} />;
  }

  // TODO:
  return (
    <CommonDashboardTileContainer {...props}>
      {(layoutProps) => <div {...layoutProps} />}
    </CommonDashboardTileContainer>
  );
}
