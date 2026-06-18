import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Markdown from '@/components/Markdown';
import { sxx } from '@/sxx';
import MarkdownSkeletonTile from '@/tiles/MarkdownSkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type MarkdownTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & {
  content?: string;
};

export default function MarkdownTile(props: MarkdownTileNode) {
  const { layout, className, style, loading, content } =
    props as MarkdownTileNode<CommonDashboardLayoutConfig>;

  if (loading) {
    return <MarkdownSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer
      className={className}
      sx={sxx({ display: 'block', overflow: 'auto' }, style)}
      layout={layout}
      defaultAppearance="space"
    >
      <Markdown content={content} />
    </CommonDashboardTileContainer>
  );
}
MarkdownTile.displayName = 'MarkdownTile';
