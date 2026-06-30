import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { sxx } from '@/sxx';
import SkeletonTile from '@/tiles/SkeletonTile';
import type { TextTileNode } from '@/tiles/TextTile';
import { useTheme } from '@mui/material/styles';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type TextSkeletonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = TextTileNode<Layout>;

export default function TextSkeletonTile(props: TextSkeletonTileNode) {
  const { type, id, layout, className, style, variant } =
    props as TextSkeletonTileNode<CommonDashboardLayoutConfig>;

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
TextSkeletonTile.displayName = 'TextSkeletonTile';
