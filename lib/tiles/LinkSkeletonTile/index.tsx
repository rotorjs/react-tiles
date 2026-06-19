import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { sxx } from '@/sxx';
import type { LinkTileNode } from '@/tiles/LinkTile';
import { useTheme } from '@mui/material/styles';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';
import SkeletonTile from '../SkeletonTile';

export type LinkSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = LinkTileNode<Layout>;

export default function LinkSkeletonTile(props: LinkSkeletonTileNode) {
  const { type, id, layout, className, style, variant } =
    props as LinkSkeletonTileNode<CommonDashboardLayoutConfig>;

  const theme = useTheme();

  return (
    <SkeletonTile
      type={type}
      id={id}
      layout={layout}
      className={className}
      style={sxx(
        theme.typography[variant || 'body1'] || theme.typography.body1,
        { placeSelf: 'start stretch' },
        style,
      )}
      variant="text"
    />
  );
}
LinkSkeletonTile.displayName = 'LinkSkeletonTile';
