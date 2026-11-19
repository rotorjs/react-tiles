import type { CommonDashboardLayoutNode } from '@/CommonDashboardLayoutNode';
import Container from '@/components/Container';
import JsonView from '@/components/JsonView';
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
  const dump = Object.fromEntries(
    Object.entries({ className, style, ...rest }).filter(
      ([, value]) => value !== undefined,
    ),
  );

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
      <JsonView value={dump} />
    </Container>
  );
}
DumpLayout.displayName = 'DumpLayout';
