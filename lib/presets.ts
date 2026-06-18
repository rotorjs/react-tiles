import type { CommonDashboardLayoutProps } from '@/CommonDashboardLayoutProps';
import type { CommonDashboardTileProps } from '@/CommonDashboardTileProps';
import type { DashboardLayoutMap, DashboardTileMap } from '@rotorjs/react';
import type { ComponentType } from 'react';

export type Layouts = DashboardLayoutMap &
  Record<string, ComponentType<CommonDashboardLayoutProps>>;

export type Tiles = DashboardTileMap &
  Record<string, ComponentType<CommonDashboardTileProps>>;
