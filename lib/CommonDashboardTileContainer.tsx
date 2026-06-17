import type { DashboardLayoutConfig } from '@rotorjs/dashboard';
import { DashboardTileContainer } from '@rotorjs/react';
import type { CSSProperties, ReactNode } from 'react';
import type { CommonDashboardLayoutConfig } from './CommonDashboardLayoutConfig';
import Container from './components/Container';

export function CommonDashboardTileContainer({
  layout,
  children,
}: {
  layout?: DashboardLayoutConfig;
  children: (layoutProps: {
    className?: string;
    style?: CSSProperties;
  }) => ReactNode;
}) {
  const { appearance } = (layout ?? {}) as CommonDashboardLayoutConfig;

  switch (appearance) {
    case 'card':
    case 'outline':
      return (
        <DashboardTileContainer layout={layout}>
          {(layoutProps) => (
            <Container {...layoutProps} appearance={appearance}>
              {children({})}
            </Container>
          )}
        </DashboardTileContainer>
      );

    default:
      return (
        <DashboardTileContainer layout={layout}>
          {children}
        </DashboardTileContainer>
      );
  }
}
