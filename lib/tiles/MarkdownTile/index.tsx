import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import { Markdown } from '@/components/Markdown';
import { MarkdownSkeletonTile } from '../MarkdownSkeletonTile';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';

export type MarkdownTileNode = CommonDashboardTileNode;

export function MarkdownTile(props: MarkdownTileNode) {
  const { loading } = props;

  if (loading) {
    return <MarkdownSkeletonTile {...props} />;
  }

  // TODO:
  return (
    <CommonDashboardTileContainer {...props}>
      {(layoutProps) => <Markdown {...layoutProps} />}
    </CommonDashboardTileContainer>
  );
}
