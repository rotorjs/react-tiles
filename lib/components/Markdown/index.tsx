import Divider from '@/components/Divider';
import Typography from '@/components/Typography';
import { useMemo, type ComponentProps, type ElementType } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Blockquote } from './components/Blockquote';
import { Code } from './components/Code';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from './components/Table';
import type { MdProps } from './MdProps';

export type MarkdownProps = {
  components?: ComponentProps<typeof ReactMarkdown>['components'];
  content?: string;
};

export default function Markdown({
  components: customComponents,
  content,
}: MarkdownProps) {
  const components = useMemo(
    () =>
      customComponents
        ? { ...defaultComponents, ...customComponents }
        : defaultComponents,
    [customComponents],
  );

  return (
    <ReactMarkdown
      remarkPlugins={remarkPlugins}
      components={components}
      skipHtml
    >
      {content ?? ''}
    </ReactMarkdown>
  );
}
Markdown.displayName = 'Markdown';

const remarkPlugins = [remarkGfm];

// https://github.com/HPouyanmehr/mui-markdown/blob/main/package/src/core/utilities/helpers/overrides/index.ts

const defaultComponents: Record<string, ElementType> = {
  // a: TODO:,
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
