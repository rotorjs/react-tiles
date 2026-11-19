import { styled } from '@mui/material/styles';
import type { CSSProperties, ReactNode } from 'react';

const MUIWrapper = styled(
  ({
    className,
    style,
    children,
  }: {
    className?: string;
    style?: CSSProperties;
    children: (layoutProps: {
      className?: string;
      style?: CSSProperties;
    }) => ReactNode;
  }) => children({ className, style }),
)({});

export default MUIWrapper;
