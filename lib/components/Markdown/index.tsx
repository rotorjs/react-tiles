import Divider, { type DividerProps } from '@/components/Divider';
import Typography, { type TypographyProps } from '@/components/Typography';
import { sxx } from '@/sxx';
import Box from '@mui/material/Box';
import Table, { type TableProps } from '@mui/material/Table';
import TableBody, { type TableBodyProps } from '@mui/material/TableBody';
import TableCell, { type TableCellProps } from '@mui/material/TableCell';
import TableFooter, { type TableFooterProps } from '@mui/material/TableFooter';
import TableHead, { type TableHeadProps } from '@mui/material/TableHead';
import TableRow, { type TableRowProps } from '@mui/material/TableRow';
import type { ElementType } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export type MarkdownProps = {
  content?: string;
};

export default function Markdown({ content }: MarkdownProps) {
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

type MdProps<P> = { node: unknown } & P;

const components: Record<string, ElementType> = {
  // a: TODO:,
  blockquote: ({ node: _, sx, ...props }) => (
    <Typography
      {...props}
      component="blockquote"
      dir="auto"
      sx={sxx(
        {
          borderInlineStart: '3px solid',
          paddingInlineStart: '1.5rem',
          borderColor: 'text.secondary',
          m: '0.25rem 0',
        },
        sx,
      )}
    />
  ),
  // code: TODO:,
  h1: ({ node: _, ...props }: MdProps<TypographyProps>) => (
    <Typography {...props} variant="h1" />
  ),
  h2: ({ node: _, ...props }: MdProps<TypographyProps>) => (
    <Typography {...props} variant="h2" />
  ),
  h3: ({ node: _, ...props }: MdProps<TypographyProps>) => (
    <Typography {...props} variant="h3" />
  ),
  h4: ({ node: _, ...props }: MdProps<TypographyProps>) => (
    <Typography {...props} variant="h4" />
  ),
  h5: ({ node: _, ...props }: MdProps<TypographyProps>) => (
    <Typography {...props} variant="h5" />
  ),
  h6: ({ node: _, ...props }: MdProps<TypographyProps>) => (
    <Typography {...props} variant="h6" />
  ),
  hr: ({ node: _, ...props }: MdProps<DividerProps>) => <Divider {...props} />,
  ol: ({ node: _, ...props }: MdProps<TypographyProps>) => (
    <Typography {...props} component="ol" />
  ),
  p: ({ node: _, ...props }: MdProps<TypographyProps>) => (
    <Typography {...props} />
  ),
  // pre: TODO:,
  span: ({ node: _, ...props }: MdProps<TypographyProps>) => (
    <Typography {...props} component="span" />
  ),
  table: ({ node: _, sx, ...props }: MdProps<TableProps>) => (
    <Box sx={sxx({ overflow: 'auto' }, sx)}>
      <Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
        <Table {...props} />
      </Box>
    </Box>
  ),
  tbody: ({ node: _, ...props }: MdProps<TableBodyProps>) => (
    <TableBody {...props} />
  ),
  td: ({ node: _, sx, ...props }: MdProps<TableCellProps>) => (
    <TableCell {...props} sx={sxx({ whiteSpace: 'nowrap' }, sx)} />
  ),
  tfoot: ({ node: _, ...props }: MdProps<TableFooterProps>) => (
    <TableFooter {...props} />
  ),
  th: ({ node: _, sx, ...props }: MdProps<TableCellProps>) => (
    <TableCell {...props} sx={sxx({ whiteSpace: 'nowrap' }, sx)} />
  ),
  thead: ({ node: _, ...props }: MdProps<TableHeadProps>) => (
    <TableHead {...props} />
  ),
  tr: ({ node: _, ...props }: MdProps<TableRowProps>) => (
    <TableRow {...props} />
  ),
  ul: ({ node: _, ...props }: MdProps<TypographyProps>) => (
    <Typography {...props} component="ul" />
  ),
};
