import type { MdProps } from '@/components/Markdown/MdProps';
import Typography from '@mui/material/Typography';
import type { ComponentProps } from 'react';

export function Blockquote({
  node: _,
  ...props
}: MdProps<ComponentProps<'blockquote'>>) {
  return (
    <Typography
      {...props}
      component="blockquote"
      dir="auto"
      sx={{
        borderInlineStart: '3px solid',
        paddingInlineStart: 3,
        borderColor: 'text.secondary',
        mx: 0,
        my: 0.5,
      }}
    />
  );
}
