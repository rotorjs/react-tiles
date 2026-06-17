import type { DashboardLayoutConfig } from '@rotorjs/dashboard';
import type { CommonDashboardTileNode } from './CommonDashboardTileNode';

export type CommonDashboardTileProps<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout>;
