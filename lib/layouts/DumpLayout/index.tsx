import type { CommonDashboardLayoutNode } from '@/CommonDashboardLayoutNode';
import Container from '@/components/Container';
import { sxx } from '@/sxx';
import type { PropsWithChildren } from 'react';

export type DumpLayoutNode = CommonDashboardLayoutNode &
  Record<string, unknown>;

export default function DumpLayout({
  type: _type,
  className,
  style,
  children: _children,
  ...rest
}: PropsWithChildren<DumpLayoutNode>) {
  return (
    <Container
      className={className}
      sx={sxx(
        {
          display: 'block',
          minWidth: 100,
          minHeight: 100,
          color: 'info.main',
          borderColor: 'info.main',
          borderStyle: 'dashed',
          boxSizing: 'border-box',
          borderWidth: 1,
          overflow: 'auto',
        },
        style,
      )}
      appearance="outline"
    >
      <pre style={{ marginBlock: 'unset' }}>
        {JSON.stringify({ className, style, ...rest }, null, 2)}
      </pre>
    </Container>
  );
}
DumpLayout.displayName = 'DumpLayout';
