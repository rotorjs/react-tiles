import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import type { AvatarProps } from '@/components/Avatar';
import Avatar from '@/components/Avatar';
import { InlineDashboardTiles } from '@/InlineDashboardTiles';
import BasicSkeletonTile from '@/tiles/BasicSkeletonTile';
import type {
  DashboardLayoutConfig,
  DashboardTileNode,
} from '@rotorjs/dashboard';

export type AvatarTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> &
  Pick<AvatarProps, 'alt' | 'sizes' | 'srcSet' | 'src' | 'variant'> & {
    content?: string | DashboardTileNode[];
  };

export default function AvatarTile(props: AvatarTileNode) {
  const {
    layout,
    className,
    style,
    loading,
    alt,
    sizes,
    srcSet,
    src,
    variant,
    content,
  } = props as AvatarTileNode<CommonDashboardLayoutConfig>;

  if (loading) {
    return <BasicSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer layout={layout}>
      <Avatar
        className={className}
        sx={style}
        alt={alt}
        sizes={sizes}
        srcSet={srcSet}
        src={src}
        variant={variant}
      >
        {Array.isArray(content) ? (
          <InlineDashboardTiles content={content} />
        ) : (
          content
        )}
      </Avatar>
    </CommonDashboardTileContainer>
  );
}
AvatarTile.displayName = 'AvatarTile';
