import type { Tiles } from '@/presets';
import ActionTile from '@/tiles/ActionTile';
import DividerTile from '@/tiles/DividerTile';
import LinkTile from '@/tiles/LinkTile';
import MarkdownTile from '@/tiles/MarkdownTile';
import SkeletonTile from '@/tiles/SkeletonTile';
import SpaceTile from '@/tiles/SpaceTile';
import TextTile from '@/tiles/TextTile';
import layoutTiles from './layoutTiles';

const tiles = {
  ...layoutTiles,
  action: ActionTile,
  divider: DividerTile,
  link: LinkTile,
  markdown: MarkdownTile,
  skeleton: SkeletonTile,
  space: SpaceTile,
  text: TextTile,
} satisfies Tiles;
export default tiles;
