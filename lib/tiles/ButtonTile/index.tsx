import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import type { ButtonProps } from '@/components/Button';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import { InlineDashboardTiles } from '@/InlineDashboardTiles';
import type {
  DashboardAction,
  DashboardLayoutConfig,
  DashboardTileNode,
  NavigateDashboardAction,
} from '@rotorjs/dashboard';
import { useDashboardContext } from '@rotorjs/react';
import type { SyntheticEvent } from 'react';
import type { IconTileNode } from '../IconTile';

export type ButtonTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> &
  Pick<
    ButtonProps,
    | 'color'
    | 'disabled'
    | 'fluid'
    | 'href'
    | 'loadingPosition'
    | 'size'
    | 'variant'
  > & {
    endIcon?:
      | string
      | Pick<
          IconTileNode,
          'className' | 'style' | 'color' | 'fontSize' | 'iconSet' | 'name'
        >;
    onClick?: DashboardAction;
    startIcon?: string | IconTileNode;
    content?: string | DashboardTileNode[];
  };

export default function ButtonTile(props: ButtonTileNode) {
  const {
    layout,
    className,
    style,
    loading,
    color,
    disabled,
    endIcon,
    fluid,
    href,
    loadingPosition,
    onClick,
    size,
    startIcon,
    variant,
    content,
  } = props as ButtonTileNode<CommonDashboardLayoutConfig>;

  const { target, approveUserAction } = useDashboardContext();

  return (
    <CommonDashboardTileContainer layout={layout}>
      <Button
        className={className}
        sx={style}
        color={color}
        disabled={disabled}
        endIcon={
          typeof endIcon === 'string' ? (
            <Icon name={endIcon} />
          ) : endIcon ? (
            <Icon
              className={endIcon.className}
              sx={endIcon.style}
              color={endIcon.color}
              fontSize={endIcon.fontSize}
              iconSet={endIcon.iconSet}
              name={endIcon.name}
            />
          ) : undefined
        }
        fluid={fluid}
        href={href}
        loading={loading}
        loadingPosition={loadingPosition}
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
        startIcon={
          typeof startIcon === 'string' ? (
            <Icon name={startIcon} />
          ) : startIcon ? (
            <Icon
              className={startIcon.className}
              sx={startIcon.style}
              color={startIcon.color}
              fontSize={startIcon.fontSize}
              iconSet={startIcon.iconSet}
              name={startIcon.name}
            />
          ) : undefined
        }
        variant={variant}
      >
        {Array.isArray(content) ? (
          <InlineDashboardTiles content={content} />
        ) : (
          content
        )}
      </Button>
    </CommonDashboardTileContainer>
  );
}
ButtonTile.displayName = 'ButtonTile';
