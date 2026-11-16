import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import { CommonDashboardTileContainer } from '@/CommonDashboardTileContainer';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import type { DashboardLayoutConfig } from '@rotorjs/dashboard';

export type ErrorTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & {
  error?: unknown;
};

export default function ErrorTile(props: ErrorTileNode) {
  const { layout, error } = props as ErrorTileNode<CommonDashboardLayoutConfig>;

  return (
    <CommonDashboardTileContainer
      sx={{
        minWidth: 100,
        minHeight: 100,
        color: 'error.main',
        borderColor: 'error.main',
        borderStyle: 'dashed',
        boxSizing: 'border-box',
        borderWidth: 1,
        overflow: 'auto',
      }}
      layout={layout}
      defaultAppearance="outline"
    >
      Error:
      <pre style={{ marginBlock: 'unset', whiteSpace: 'pre-wrap' }}>
        {(error as Error)?.message ?? error?.toString()}
      </pre>
    </CommonDashboardTileContainer>
  );
}
ErrorTile.displayName = 'ErrorTile';
