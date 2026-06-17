import type { GridLayoutConfig } from '@/layouts/GridLayout';
import { layouts, tiles } from '@/presets';
import type { SkeletonTileNode } from '@/tiles/SkeletonTile';
import type { SpaceTileNode } from '@/tiles/SpaceTile';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  DashboardEventTarget,
  type DashboardLayoutNode,
  type DashboardTileNode,
} from '@rotorjs/dashboard';
import { Dashboard } from '@rotorjs/react';
import './App.css';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const target = new DashboardEventTarget();

const defaultLayout: DashboardLayoutNode = { type: 'grid' };

const layout: DashboardLayoutNode = {
  ...defaultLayout,
  style: {
    width: '100%',
    height: '100%',
    gridTemplate: 'unset',
    gridAutoColumns: '1fr',
    gridAutoRows: 'minmax(150px, auto)',
    gridTemplateAreas: `
      "headline headline ."
      "headline headline ."
    `,
  },
};

const content: DashboardTileNode[] = [
  {
    type: 'skeleton',
    layout: {
      appearance: 'outline',
      style: { gridArea: 'headline' },
    },
  } satisfies SkeletonTileNode<GridLayoutConfig>,
  {
    type: 'space',
    loading: true,
  } satisfies SpaceTileNode<GridLayoutConfig>,
  {
    type: 'skeleton',
    layout: { appearance: 'card' },
    variant: 'circular',
    style: { height: 160, background: 'red' },
  } satisfies SkeletonTileNode<GridLayoutConfig>,
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <Dashboard
        target={target}
        layouts={layouts}
        defaultLayout={defaultLayout}
        tiles={tiles}
        layout={layout}
        content={content}
      />
    </ThemeProvider>
  );
}
