import type { DashboardLayoutConfig } from '@rotorjs/dashboard';
import type { CSSProperties } from 'react';

export type CommonDashboardTileNode = {
  type: string;
  id?: string;
  layout?: DashboardLayoutConfig;
  className?: string;
  style?: CSSProperties;
  loading?: boolean;
};
