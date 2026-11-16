import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import type { IconProps } from '@/components/Icon';
import Icon from '@/components/Icon';
import BasicSkeletonTile from '@/tiles/BasicSkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type IconTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> &
  Pick<IconProps, 'color' | 'fontSize' | 'iconSet' | 'name'>;

export default function IconTile(props: IconTileNode) {
  const { layout, className, style, loading, color, fontSize, iconSet, name } =
    props as IconTileNode<CommonDashboardLayoutConfig>;

  if (loading) {
    return <BasicSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer layout={layout}>
      <Icon
        className={className}
        sx={style}
        color={color}
        fontSize={fontSize}
        iconSet={iconSet}
        name={name}
      />
    </CommonDashboardTileContainer>
  );
}
IconTile.displayName = 'IconTile';
