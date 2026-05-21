import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import { Skeleton } from '@/components/Skeleton';

export type SkeletonTileNode = CommonDashboardTileNode;

export function SkeletonTile(props: SkeletonTileNode) {
  // TODO:
  return (
    <CommonDashboardTileContainer {...props}>
      {(layoutProps) => <Skeleton {...layoutProps} />}
    </CommonDashboardTileContainer>
  );
}
