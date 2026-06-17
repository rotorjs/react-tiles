import type { SxProps, Theme } from '@mui/material/styles';

export type CommonDashboardAppearance = 'card' | 'outline';

export type CommonDashboardLayoutConfig = {
  className?: string;
  style?: SxProps<Theme>;
  appearance?: CommonDashboardAppearance;
  [key: string]: unknown;
};
