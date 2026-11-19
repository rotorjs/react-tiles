import MUIWrapper from '@/MUIWrapper';
import {
  useTheme,
  useThemeProps,
  type SxProps,
  type Theme,
} from '@mui/material/styles';
import { JsonView as UIWJsonView } from '@uiw/react-json-view';
import { darkTheme } from '@uiw/react-json-view/dark';
import { lightTheme } from '@uiw/react-json-view/light';
import type { CSSProperties, Ref } from 'react';

export type JsonViewProps = {
  ref?: Ref<HTMLDivElement>;
  className?: string;
  style?: CSSProperties;
  sx?: SxProps<Theme>;
  value?: object;
};

export default function JsonView(inProps: JsonViewProps) {
  const { ref, className, style, sx, value } = useThemeProps({
    props: inProps,
    name: 'JsonView',
  });

  const theme = useTheme();

  return (
    <MUIWrapper className={className} style={style} sx={sx}>
      {({ className, style }) => (
        <UIWJsonView
          ref={ref}
          className={className}
          style={
            {
              ...(theme.palette.mode === 'dark' ? darkTheme : lightTheme),
              '--w-rjv-background-color': 'transparent',
              ...style,
            } as CSSProperties
          }
          value={value}
          displayDataTypes={false}
        />
      )}
    </MUIWrapper>
  );
}
JsonView.displayName = 'JsonView';
