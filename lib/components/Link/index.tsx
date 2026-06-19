import MUILink from '@mui/material/Link';
import type { SxProps, Theme } from '@mui/material/styles';
import type {
  DashboardAction,
  NavigateDashboardAction,
} from '@rotorjs/dashboard';
import { useDashboardContext } from '@rotorjs/react';
import {
  type CSSProperties,
  type ElementType,
  type PropsWithChildren,
  type Ref,
  type SyntheticEvent,
} from 'react';

export type LinkProps = PropsWithChildren<{
  ref?: Ref<HTMLSpanElement>;
  component?: ElementType;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'textPrimary'
    | 'textSecondary'
    | 'textDisabled'
    | string;
  underline?: 'always' | 'hover' | 'none';
  variant?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  href?: string;
  action?: DashboardAction;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}>;

export default function Link({
  ref,
  component,
  className,
  style,
  sx,
  color,
  underline,
  variant,
  href,
  action,
  onClick,
  children,
}: LinkProps) {
  const { target, approveUserAction } = useDashboardContext();

  return (
    <MUILink
      ref={ref}
      component={component!}
      className={className}
      style={style}
      sx={sx}
      color={color}
      underline={underline}
      variant={variant}
      href={href}
      onClick={
        onClick ??
        (action || href
          ? (event: SyntheticEvent) => {
              event.preventDefault();

              if (!action || approveUserAction(action))
                target?.dispatchAction(
                  action ??
                    ({
                      type: 'navigate',
                      href: href ?? '',
                    } satisfies NavigateDashboardAction),
                );
            }
          : undefined)
      }
    >
      {children}
    </MUILink>
  );
}
Link.displayName = 'Link';
