import type { SxProps, Theme } from '@mui/material/styles';

export type CommonDashboardLayoutNode = {
  type: string;
  id?: string;
  className?: string;
  style?: SxProps<Theme>;
};
