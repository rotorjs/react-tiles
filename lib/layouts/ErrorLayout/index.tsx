import type { CommonDashboardLayoutNode } from '@/CommonDashboardLayoutNode';
import Container from '@/components/Container';
import { sxx } from '@/sxx';
import type { PropsWithChildren } from 'react';

export type ErrorLayoutNode = CommonDashboardLayoutNode & {
  error?: unknown;
};

export default function ErrorLayout({
  className,
  style,
  error,
}: PropsWithChildren<ErrorLayoutNode>) {
  return (
    <Container
      className={className}
      sx={sxx(
        {
          display: 'block',
          minWidth: 100,
          minHeight: 100,
          color: 'error.main',
          borderColor: 'error.main',
          borderStyle: 'dashed',
          boxSizing: 'border-box',
          borderWidth: 1,
          overflow: 'auto',
        },
        style,
      )}
      appearance="outline"
    >
      Error:
      <pre style={{ marginBlock: 'unset', whiteSpace: 'pre-wrap' }}>
        {(error as Error)?.message ?? error?.toString()}
      </pre>
    </Container>
  );
}
ErrorLayout.displayName = 'ErrorLayout';
