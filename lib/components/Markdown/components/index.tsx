import Divider from '@/components/Divider';
import type { MdProps } from '@/components/Markdown/MdProps';
import Typography from '@/components/Typography';
import { type ComponentProps, type ElementType } from 'react';
import { Blockquote } from './Blockquote';
import { Code } from './Code';
import { Link } from './Link';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from './Table';

// https://github.com/HPouyanmehr/mui-markdown/blob/main/package/src/core/utilities/helpers/overrides/index.ts

export const defaultComponents: Record<string, ElementType> = {
  a: Link,
  blockquote: Blockquote,
  code: Code,
  h1: ({ node: _node, ...props }: MdProps<ComponentProps<'h1'>>) => (
    <Typography {...(props as typeof props & { color: never })} variant="h1" />
  ),
  h2: ({ node: _node, ...props }: MdProps<ComponentProps<'h2'>>) => (
    <Typography {...(props as typeof props & { color: never })} variant="h2" />
  ),
  h3: ({ node: _node, ...props }: MdProps<ComponentProps<'h3'>>) => (
    <Typography {...(props as typeof props & { color: never })} variant="h3" />
  ),
  h4: ({ node: _node, ...props }: MdProps<ComponentProps<'h4'>>) => (
    <Typography {...(props as typeof props & { color: never })} variant="h4" />
  ),
  h5: ({ node: _node, ...props }: MdProps<ComponentProps<'h5'>>) => (
    <Typography {...(props as typeof props & { color: never })} variant="h5" />
  ),
  h6: ({ node: _node, ...props }: MdProps<ComponentProps<'h6'>>) => (
    <Typography {...(props as typeof props & { color: never })} variant="h6" />
  ),
  hr: ({ node: _node, ...props }: MdProps<ComponentProps<'hr'>>) => (
    <Divider {...props} />
  ),
  ol: ({ node: _node, ...props }: MdProps<ComponentProps<'ol'>>) => (
    <Typography
      {...(props as typeof props & { color: never })}
      component="ol"
    />
  ),
  p: ({ node: _node, ...props }: MdProps<ComponentProps<'p'>>) => (
    <Typography {...(props as typeof props & { color: never })} />
  ),
  pre: ({
    node: _node,
    children,
    ...props
  }: MdProps<ComponentProps<'pre'>>) => (
    <Typography
      {...(props as typeof props & { color: never })}
      component="pre"
      sx={{ whiteSpace: 'pre-wrap' }}
    >
      {children}
    </Typography>
  ),
  span: ({ node: _node, ...props }: MdProps<ComponentProps<'span'>>) => (
    <Typography
      {...(props as typeof props & { color: never })}
      component="span"
    />
  ),
  table: Table,
  tbody: TableBody,
  td: TableCell,
  tfoot: TableFooter,
  th: TableCell,
  thead: TableHead,
  tr: TableRow,
  ul: ({ node: _node, ...props }: MdProps<ComponentProps<'ul'>>) => (
    <Typography
      {...(props as typeof props & { color: never })}
      component="ul"
    />
  ),
};
