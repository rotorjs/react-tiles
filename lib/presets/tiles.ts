import type { Tiles } from '@/presets';
import DividerTile from '@/tiles/DividerTile';
import MarkdownTile from '@/tiles/MarkdownTile';
import SkeletonTile from '@/tiles/SkeletonTile';
import SpaceTile from '@/tiles/SpaceTile';
import TextTile from '@/tiles/TextTile';
import layoutTiles from './layoutTiles';

const tiles = {
  ...layoutTiles,
  divider: DividerTile,
  markdown: MarkdownTile,
  skeleton: SkeletonTile,
  space: SpaceTile,
  text: TextTile,
} satisfies Tiles;
export default tiles;
