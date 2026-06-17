import type { SxProps, Theme } from '@mui/material/styles';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type CommonDashboardTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = {
  type: string;
  id?: string;
  layout?: Layout;
  className?: string;
  style?: SxProps<Theme>;
  loading?: boolean;
};
