import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Divider, { type DividerProps } from '@/components/Divider';
import { InlineDashboardTiles } from '@/InlineDashboardTiles';
import { sxx } from '@/sxx';
import BasicSkeletonTile from '@/tiles/BasicSkeletonTile';
import type {
  DashboardLayoutConfig,
  DashboardTileNode,
} from '@rotorjs/dashboard';

export type DividerTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> &
  Pick<DividerProps, 'orientation' | 'variant' | 'textAlign'> & {
    content?: string | DashboardTileNode[];
  };

export default function DividerTile(props: DividerTileNode) {
  const {
    layout,
    className,
    style,
    loading,
    orientation,
    variant,
    textAlign,
    content,
  } = props as DividerTileNode<CommonDashboardLayoutConfig>;

  if (loading) {
    return <BasicSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer layout={layout}>
      <Divider
        className={className}
        sx={sxx(
          {
            placeSelf:
              orientation === 'vertical' ? 'stretch center' : 'center stretch',
          },
          style,
        )}
        orientation={orientation}
        variant={variant}
        textAlign={textAlign}
      >
        {Array.isArray(content) ? (
          <InlineDashboardTiles content={content} />
        ) : (
          content
        )}
      </Divider>
    </CommonDashboardTileContainer>
  );
}
DividerTile.displayName = 'DividerTile';
