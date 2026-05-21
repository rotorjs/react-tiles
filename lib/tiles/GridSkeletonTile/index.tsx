import type { GridTileNode } from '../GridTile';
import { SkeletonTile } from '../SkeletonTile';

export type GridSkeletonTileNode = GridTileNode;

export function GridSkeletonTile(props: GridSkeletonTileNode) {
  // TODO:
  return <SkeletonTile {...props} />;
}
