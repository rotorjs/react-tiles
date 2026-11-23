import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import type { ImageProps } from '@/components/Image';
import Image from '@/components/Image';
import BasicSkeletonTile from '@/tiles/BasicSkeletonTile';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type ImageTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> &
  Pick<ImageProps, 'alt' | 'height' | 'sizes' | 'srcSet' | 'src' | 'width'> & {
    loadingType?: ImageProps['loading'];
  };

export default function ImageTile(props: ImageTileNode) {
  const {
    layout,
    className,
    style,
    loading,
    alt,
    height,
    sizes,
    srcSet,
    src,
    width,
    loadingType,
  } = props as ImageTileNode<CommonDashboardLayoutConfig>;

  if (loading) {
    return <BasicSkeletonTile {...props} />;
  }

  return (
    <CommonDashboardTileContainer layout={layout}>
      <Image
        className={className}
        sx={style}
        alt={alt}
        height={height}
        sizes={sizes}
        srcSet={srcSet}
        src={src}
        width={width}
        loading={loadingType}
      />
    </CommonDashboardTileContainer>
  );
}
ImageTile.displayName = 'ImageTile';
