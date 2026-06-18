import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Typography, { type TypographyProps } from '@/components/Typography';
import { InlineDashboardTiles } from '@/InlineDashboardTiles';
import TextSkeletonTile from '@/tiles/TextSkeletonTile';
import type {
  DashboardLayoutConfig,
  DashboardTileNode,
} from '@rotorjs/dashboard';

export type TextTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> &
  Pick<TypographyProps, 'variant'> & {
    content?: string | DashboardTileNode[];
  };

export default function TextTile(props: TextTileNode) {
  const { layout, className, style, loading, variant, content } =
    props as TextTileNode<CommonDashboardLayoutConfig>;

  if (loading) {
    return <TextSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer layout={layout}>
      <Typography className={className} sx={style} variant={variant}>
        {Array.isArray(content) ? (
          <InlineDashboardTiles content={content} />
        ) : (
          content
        )}
      </Typography>
    </CommonDashboardTileContainer>
  );
}
TextTile.displayName = 'TextTile';
