import Divider from '@/components/Divider';
import type { MdProps } from '@/components/Markdown/MdProps';
import Typography from '@/components/Typography';
import { type ComponentProps, type ElementType } from 'react';
import { Blockquote } from './Blockquote';
import { Code } from './Code';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from './Table';
import { Link } from './Link';

// https://github.com/HPouyanmehr/mui-markdown/blob/main/package/src/core/utilities/helpers/overrides/index.ts

export const defaultComponents: Record<string, ElementType> = {
  a: Link,
  blockquote: Blockquote,
  code: Code,
  h1: ({ node: _, ...props }: MdProps<ComponentProps<'h1'>>) => (
    <Typography {...props} variant="h1" />
  ),
  h2: ({ node: _, ...props }: MdProps<ComponentProps<'h2'>>) => (
    <Typography {...props} variant="h2" />
  ),
  h3: ({ node: _, ...props }: MdProps<ComponentProps<'h3'>>) => (
    <Typography {...props} variant="h3" />
  ),
  h4: ({ node: _, ...props }: MdProps<ComponentProps<'h4'>>) => (
    <Typography {...props} variant="h4" />
  ),
  h5: ({ node: _, ...props }: MdProps<ComponentProps<'h5'>>) => (
    <Typography {...props} variant="h5" />
  ),
  h6: ({ node: _, ...props }: MdProps<ComponentProps<'h6'>>) => (
    <Typography {...props} variant="h6" />
  ),
  hr: ({ node: _, ...props }: MdProps<ComponentProps<'hr'>>) => (
    <Divider {...props} />
  ),
  ol: ({ node: _, ...props }: MdProps<ComponentProps<'ol'>>) => (
    <Typography {...props} component="ol" />
  ),
  p: ({ node: _, ...props }: MdProps<ComponentProps<'p'>>) => (
    <Typography {...props} />
  ),
  pre: ({ node: _, children, ...props }: MdProps<ComponentProps<'pre'>>) => (
    <Typography {...props} component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
      {children}
    </Typography>
  ),
  span: ({ node: _, ...props }: MdProps<ComponentProps<'span'>>) => (
    <Typography {...props} component="span" />
  ),
  table: Table,
  tbody: TableBody,
  td: TableCell,
  tfoot: TableFooter,
  th: TableCell,
  thead: TableHead,
  tr: TableRow,
  ul: ({ node: _, ...props }: MdProps<ComponentProps<'ul'>>) => (
    <Typography {...props} component="ul" />
  ),
};
