import type { MarkdownTileNode } from '../MarkdownTile';
import { SkeletonTile } from '../SkeletonTile';

export type MarkdownSkeletonTileNode = MarkdownTileNode;

export function MarkdownSkeletonTile(props: MarkdownSkeletonTileNode) {
  // TODO:
  return <SkeletonTile {...props} />;
}
