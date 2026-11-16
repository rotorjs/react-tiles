import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import Icon from '@/components/Icon';
import type { IconButtonProps } from '@/components/IconButton';
import IconButton from '@/components/IconButton';
import type {
  DashboardAction,
  DashboardLayoutConfig,
  NavigateDashboardAction,
} from '@rotorjs/dashboard';
import { useDashboardContext } from '@rotorjs/react';
import type { SyntheticEvent } from 'react';
import type { IconTileNode } from '../IconTile';

export type IconButtonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> &
  Pick<IconButtonProps, 'color' | 'disabled' | 'size'> & {
    href?: string;
    onClick?: DashboardAction;
    icon?:
      | string
      | Pick<
          IconTileNode,
          'className' | 'style' | 'color' | 'fontSize' | 'iconSet' | 'name'
        >;
  };

export default function IconButtonTile(props: IconButtonTileNode) {
  const {
    layout,
    className,
    style,
    loading,
    color,
    disabled,
    href,
    onClick,
    size,
    icon,
  } = props as IconButtonTileNode<CommonDashboardLayoutConfig>;

  const { target, approveUserAction } = useDashboardContext();

  return (
    <CommonDashboardTileContainer layout={layout}>
      <IconButton
        className={className}
        sx={style}
        color={color}
        disabled={disabled}
        loading={loading}
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
        size={size}
      >
        {typeof icon === 'string' ? (
          <Icon name={icon} />
        ) : icon ? (
          <Icon
            className={icon.className}
            sx={icon.style}
            color={icon.color}
            fontSize={icon.fontSize}
            iconSet={icon.iconSet}
            name={icon.name}
          />
        ) : undefined}
      </IconButton>
    </CommonDashboardTileContainer>
  );
}
IconButtonTile.displayName = 'IconButtonTile';
