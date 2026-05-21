import {
  DashboardTileContainer,
  type DashboardTileContainerProps,
} from '@rotorjs/react';
import { clsx } from 'clsx';
import type { CSSProperties } from 'react';

export function CommonDashboardTileContainer({
  layout,
  className: tileClassName,
  style: tileStyle,
  children,
}: DashboardTileContainerProps & {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <DashboardTileContainer layout={layout}>
      {({ className: layoutClassName, style: layoutStyle, ...rest }) =>
        children({
          className: clsx(layoutClassName, tileClassName),
          style: { ...layoutStyle, ...tileStyle },
          ...rest,
        })
      }
    </DashboardTileContainer>
  );
}
