import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Skeleton, { type SkeletonProps } from '@/components/Skeleton';
import { sxx } from '@/sxx';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type SkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & Pick<SkeletonProps, 'variant'>;

export default function SkeletonTile(props: SkeletonTileNode) {
  const { layout, className, style, variant } =
    props as SkeletonTileNode<CommonDashboardLayoutConfig>;

  return (
    <CommonDashboardTileContainer layout={layout}>
      <Skeleton
        className={className}
        sx={sxx(
          (variant || 'rounded') === 'text'
            ? { placeSelf: 'start' }
            : { width: '100%', height: '100%' },
          style,
        )}
        variant={variant || 'rounded'}
      />
    </CommonDashboardTileContainer>
  );
}
SkeletonTile.displayName = 'SkeletonTile';
