import type { SxProps, Theme } from '@mui/material/styles';

export function sxx(...args: (SxProps<Theme> | undefined)[]): SxProps<Theme> {
  return args.flat(1).filter((style) => style != null);
}
