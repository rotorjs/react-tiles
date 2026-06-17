import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Skeleton, { type SkeletonProps } from '@/components/Skeleton';
import { sxx } from '@/sxx';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';
import { clsx } from 'clsx';

export type SkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & Pick<SkeletonProps, 'variant'>;

export default function SkeletonTile({
  layout,
  className,
  style,
  variant,
}: SkeletonTileNode) {
  return (
    <CommonDashboardTileContainer layout={layout}>
      {(layoutProps) => (
        <Skeleton
          className={clsx(layoutProps.className, className)}
          style={layoutProps.style}
          sx={sxx(
            (variant || 'rounded') === 'text'
              ? { placeSelf: 'start' }
              : { width: '100%', height: '100%' },
            style,
          )}
          variant={variant || 'rounded'}
        />
      )}
    </CommonDashboardTileContainer>
  );
}
