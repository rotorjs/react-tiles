import type { Tiles } from '@/presets';
import ActionTile from '@/tiles/ActionTile';
import ButtonTile from '@/tiles/ButtonTile';
import DividerTile from '@/tiles/DividerTile';
import DumpTile from '@/tiles/DumpTile';
import ErrorTile from '@/tiles/ErrorTile';
import IconButtonTile from '@/tiles/IconButtonTile';
import IconTile from '@/tiles/IconTile';
import LinkTile from '@/tiles/LinkTile';
import MarkdownTile from '@/tiles/MarkdownTile';
import SkeletonTile from '@/tiles/SkeletonTile';
import SpaceTile from '@/tiles/SpaceTile';
import TextTile from '@/tiles/TextTile';
import layoutTiles from './layoutTiles';

const tiles = {
  ...layoutTiles,
  action: ActionTile,
  button: ButtonTile,
  divider: DividerTile,
  dump: DumpTile,
  error: ErrorTile,
  'icon-button': IconButtonTile,
  icon: IconTile,
  link: LinkTile,
  markdown: MarkdownTile,
  skeleton: SkeletonTile,
  space: SpaceTile,
  text: TextTile,
} satisfies Tiles;
export default tiles;
