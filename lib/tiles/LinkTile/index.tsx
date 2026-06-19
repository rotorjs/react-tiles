import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Link, { type LinkProps } from '@/components/Link';
import { InlineDashboardTiles } from '@/InlineDashboardTiles';
import LinkSkeletonTile from '@/tiles/LinkSkeletonTile';
import type {
  DashboardLayoutConfig,
  DashboardTileNode,
} from '@rotorjs/dashboard';

export type LinkTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> &
  Pick<LinkProps, 'color' | 'underline' | 'variant' | 'href' | 'action'> & {
    content?: string | DashboardTileNode[];
  };

export default function LinkTile(props: LinkTileNode) {
  const {
    layout,
    className,
    style,
    loading,
    color,
    underline,
    variant,
    href,
    action,
    content,
  } = props as LinkTileNode<CommonDashboardLayoutConfig>;

  if (loading) {
    return <LinkSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer layout={layout}>
      <Link
        className={className}
        sx={style}
        color={color}
        underline={underline}
        variant={variant}
        href={href}
        action={action}
      >
        {Array.isArray(content) ? (
          <InlineDashboardTiles content={content} />
        ) : (
          content
        )}
      </Link>
    </CommonDashboardTileContainer>
  );
}
LinkTile.displayName = 'LinkTile';
