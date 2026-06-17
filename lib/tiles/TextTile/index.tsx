import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import type { TypographyProps } from '@/components/Typography';
import Typography from '@/components/Typography';
import TextSkeletonTile from '@/tiles/TextSkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type TextTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> &
  Pick<TypographyProps, 'variant'> & {
    content?: string;
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
        {content}
      </Typography>
    </CommonDashboardTileContainer>
  );
}
TextTile.displayName = 'TextTile';
