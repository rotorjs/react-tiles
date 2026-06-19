import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import type { GridLayoutConfig } from '@/layouts/GridLayout';
import type { StackLayoutConfig } from '@/layouts/StackLayout';
import layouts from '@/presets/layouts';
import tiles from '@/presets/tiles';
import type { ActionTileNode } from '@/tiles/ActionTile';
import type { DividerTileNode } from '@/tiles/DividerTile';
import type { GridTileNode } from '@/tiles/GridTile';
import type { LinkTileNode } from '@/tiles/LinkTile';
import type { MarkdownTileNode } from '@/tiles/MarkdownTile';
import type { SkeletonTileNode } from '@/tiles/SkeletonTile';
import type { SpaceTileNode } from '@/tiles/SpaceTile';
import type { StackTileNode } from '@/tiles/StackTile';
import type { TextTileNode } from '@/tiles/TextTile';
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
  type VarDashboardAction,
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
    grid: 'unset',
    gridTemplateColumns: 'repeat(4, 1fr)',
    // alignItems: 'start',
  },
};

const content: DashboardTileNode[] = [
  {
    type: 'action',
    action: {
      type: 'var',
      name: 'test',
      exposed: true,
      value: 'value',
    } satisfies VarDashboardAction,
  } satisfies ActionTileNode,
  {
    type: 'divider',
    content: [
      {
        type: 'text',
        content: 'Text',
        color: 'info',
      } satisfies TextTileNode<CommonDashboardLayoutConfig>,
    ],
  } satisfies DividerTileNode<GridLayoutConfig>,
  {
    type: 'grid',
    style: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridAutoRows: 'minmax(30px, auto)',
    },
    content: [
      { type: 'space', layout: { appearance: 'outline' } },
      { type: 'space', layout: { appearance: 'outline' } },
    ],
  } satisfies GridTileNode<GridLayoutConfig>,
  {
    type: 'link',
    style: { placeSelf: 'center stretch', textAlign: 'center' },
    href: 'https://google.com',
    content: 'Go to Google',
    underline: 'hover',
    color: 'warning',
  } satisfies LinkTileNode,
  {
    type: 'markdown',
    style: { overflow: 'auto' },
    content: `
# Title

Section

---

[Link](https://github.com/rotorjs)

> Quote
> with multiple lines.

Inline \`code\`

\`\`\`ts
const t: string = "Block level code";
\`\`\`

- unordered
- list

1. ordered
2. list

| A  |  B  |  C |
| :- | :-: | -: |
| 1  |  2  |  3 |
| 4  |  5  |  6 |
`,
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
  {
    type: 'text',
    style: { placeSelf: 'center stretch', textAlign: 'center' },
    content: 'This is text',
    variant: 'body2',
  } satisfies TextTileNode<GridLayoutConfig>,
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
        approveNavigation={() => true}
      />
    </ThemeProvider>
  );
}
