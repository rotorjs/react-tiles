import type { Tiles } from '@/presets';
import GridTile from '@/tiles/GridTile';
import StackTile from '@/tiles/StackTile';

const layoutTiles = {
  grid: GridTile,
  stack: StackTile,
} satisfies Tiles;
export default layoutTiles;
