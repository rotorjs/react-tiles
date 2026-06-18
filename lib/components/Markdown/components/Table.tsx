import type { MdProps } from '@/components/Markdown/MdProps';
import Box from '@mui/material/Box';
import MUITable from '@mui/material/Table';
import MUITableBody from '@mui/material/TableBody';
import MUITableCell, { type TableCellProps } from '@mui/material/TableCell';
import MUITableFooter from '@mui/material/TableFooter';
import MUITableHead from '@mui/material/TableHead';
import MUITableRow from '@mui/material/TableRow';
import type { ComponentProps } from 'react';

export function Table({ node: _, ...props }: MdProps<ComponentProps<'table'>>) {
  return (
    <Box sx={{ overflow: 'auto' }}>
      <Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
        <MUITable {...props} />
      </Box>
    </Box>
  );
}

export function TableBody({
  node: _,
  ...props
}: MdProps<ComponentProps<'tbody'>>) {
  return <MUITableBody {...props} />;
}

export function TableCell({
  node: _,
  ...props
}: MdProps<ComponentProps<'td' | 'th'>>) {
  return (
    <MUITableCell
      {...(props as TableCellProps)}
      sx={{ whiteSpace: 'nowrap' }}
    />
  );
}

export function TableFooter({
  node: _,
  ...props
}: MdProps<ComponentProps<'tfoot'>>) {
  return <MUITableFooter {...props} />;
}

export function TableHead({
  node: _,
  ...props
}: MdProps<ComponentProps<'thead'>>) {
  return <MUITableHead {...props} />;
}

export function TableRow({ node: _, ...props }: MdProps<ComponentProps<'tr'>>) {
  return <MUITableRow {...props} />;
}
