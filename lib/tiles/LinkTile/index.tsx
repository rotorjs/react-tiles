import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Link, { type LinkProps } from '@/components/Link';
import { InlineDashboardTiles } from '@/InlineDashboardTiles';
import TextSkeletonTile from '@/tiles/TextSkeletonTile';
import type {
  DashboardAction,
  DashboardLayoutConfig,
  DashboardTileNode,
  NavigateDashboardAction,
} from '@rotorjs/dashboard';
import { useDashboardContext } from '@rotorjs/react';
import type { SyntheticEvent } from 'react';

export type LinkTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> &
  Pick<LinkProps, 'color' | 'href' | 'underline' | 'variant'> & {
    onClick?: DashboardAction;
    content?: string | DashboardTileNode[];
  };

export default function LinkTile(props: LinkTileNode) {
  const {
    layout,
    className,
    style,
    loading,
    color,
    href,
    onClick,
    underline,
    variant,
    content,
  } = props as LinkTileNode<CommonDashboardLayoutConfig>;

  const { target, approveUserAction } = useDashboardContext();

  if (loading) {
    return <TextSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer layout={layout}>
      <Link
        className={className}
        sx={style}
        color={color}
        href={href}
        onClick={
          !onClick && !href
            ? undefined
            : (event: SyntheticEvent) => {
                event.preventDefault();

                if (!onClick || approveUserAction(onClick))
                  target?.dispatchAction(
                    onClick ??
                      ({
                        type: 'navigate',
                        href: href ?? '',
                      } satisfies NavigateDashboardAction),
                  );
              }
        }
        underline={underline}
        variant={variant}
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
