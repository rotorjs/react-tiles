import type { SxProps, Theme } from '@mui/material/styles';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';
import { DashboardTileContainer } from '@rotorjs/react';
import { clsx } from 'clsx';
import type { CSSProperties, PropsWithChildren } from 'react';
import type {
  CommonDashboardAppearance,
  CommonDashboardLayoutConfig,
} from './CommonDashboardLayoutConfig';
import Container from './components/Container';

export function CommonDashboardTileContainer({
  className,
  style,
  sx,
  layout,
  defaultAppearance,
  children,
}: PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  layout?: DashboardLayoutConfig;
  defaultAppearance?: CommonDashboardAppearance;
}>) {
  const { appearance } = (layout ?? {}) as CommonDashboardLayoutConfig;

  if (appearance || defaultAppearance) {
    return (
      <DashboardTileContainer layout={layout}>
        {(layoutProps) => (
          <Container
            className={clsx(layoutProps.className, className)}
            style={
              style
                ? layoutProps.style
                  ? { ...layoutProps.style, ...style }
                  : style
                : layoutProps.style
            }
            sx={sx}
            appearance={appearance || defaultAppearance}
          >
            {children}
          </Container>
        )}
      </DashboardTileContainer>
    );
  }

  return (
    <DashboardTileContainer layout={layout}>
      {() => children}
    </DashboardTileContainer>
  );
}
CommonDashboardTileContainer.displayName = 'CommonDashboardTileContainer';
