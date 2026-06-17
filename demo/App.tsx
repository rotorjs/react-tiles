import type { GridLayoutConfig } from '@/layouts/GridLayout';
import type { StackLayoutConfig } from '@/layouts/StackLayout';
import { layouts, tiles } from '@/presets';
import type { GridTileNode } from '@/tiles/GridTile';
import type { MarkdownTileNode } from '@/tiles/MarkdownTile';
import type { SkeletonTileNode } from '@/tiles/SkeletonTile';
import type { SpaceTileNode } from '@/tiles/SpaceTile';
import type { StackTileNode } from '@/tiles/StackTile';
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
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
};

const content: DashboardTileNode[] = [
  {
    type: 'grid',
    layout: {
      style: {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: 'minmax(30px, auto)',
      },
    },
    content: [
      { type: 'space', layout: { appearance: 'outline' } },
      { type: 'space', layout: { appearance: 'outline' } },
    ],
  } satisfies GridTileNode<GridLayoutConfig>,
  {
    type: 'markdown',
    content: '# Title\nSection',
  } satisfies MarkdownTileNode<GridLayoutConfig>,
  {
    type: 'skeleton',
    style: { minHeight: '20px' },
  } satisfies SkeletonTileNode<GridLayoutConfig>,
  {
    type: 'space',
    style: { minHeight: '20px' },
  } satisfies SpaceTileNode<GridLayoutConfig>,
  {
    type: 'stack',
    layout: { style: { flexDirection: 'column', justifyContent: 'stretch' } },
    content: [
      {
        type: 'space',
        layout: { appearance: 'outline' },
        style: { flex: 1 },
      } satisfies SpaceTileNode<StackLayoutConfig>,
      {
        type: 'space',
        layout: { appearance: 'outline' },
      } satisfies SpaceTileNode<StackLayoutConfig>,
    ],
  } satisfies StackTileNode<GridLayoutConfig>,
].flatMap((element) => [
  { ...element, loading: true },
  element,
  {
    ...element,
    layout: { ...element.layout, appearance: 'card' },
    loading: true,
  },
  { ...element, layout: { ...element.layout, appearance: 'card' } },
]);

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
