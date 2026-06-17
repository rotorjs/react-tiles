import type { CommonDashboardLayoutProps } from '@/CommonDashboardLayoutProps';
import type { CommonDashboardTileProps } from '@/CommonDashboardTileProps';
import GridLayout from '@/layouts/GridLayout';
import StackLayout from '@/layouts/StackLayout';
import GridTile from '@/tiles/GridTile';
import SkeletonTile from '@/tiles/SkeletonTile';
import StackTile from '@/tiles/StackTile';
import type { DashboardLayoutMap, DashboardTileMap } from '@rotorjs/react';
import type { ComponentType } from 'react';
import MarkdownTile from './tiles/MarkdownTile';
import SpaceTile from './tiles/SpaceTile';

type Layouts = DashboardLayoutMap &
  Record<string, ComponentType<CommonDashboardLayoutProps>>;

type Tiles = DashboardTileMap &
  Record<string, ComponentType<CommonDashboardTileProps>>;

export const layouts = {
  grid: GridLayout,
  stack: StackLayout,
} satisfies Layouts;

export const layoutTiles = {
  grid: GridTile,
  stack: StackTile,
} satisfies Tiles;

export const tiles = {
  ...layoutTiles,
  markdown: MarkdownTile,
  skeleton: SkeletonTile,
  space: SpaceTile,
} satisfies Tiles;
