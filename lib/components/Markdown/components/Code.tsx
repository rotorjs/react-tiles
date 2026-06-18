import type { MdProps } from '@/components/Markdown/MdProps';
import { useTheme } from '@mui/material/styles';
import type { ComponentProps } from 'react';
import {
  Prism as SyntaxHighlighter,
  type SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Code({
  node: _,
  className,
  style,
  children,
  ...props
}: MdProps<ComponentProps<'code'>>) {
  const theme = useTheme();

  const lang = /language-(\w+)/.exec(className ?? '');
  const code = String(children);

  if (lang || code.includes('\n')) {
    return (
      <SyntaxHighlighter
        {...(props as SyntaxHighlighterProps)}
        PreTag="div"
        language={lang?.[1]}
        style={theme.palette.mode === 'dark' ? oneDark : oneLight}
        customStyle={{ borderRadius: theme.shape.borderRadius }}
      >
        {code.replace(/\n$/, '')}
      </SyntaxHighlighter>
    );
  }

  return (
    <code
      {...props}
      className={className}
      style={{
        backgroundColor: 'rgba(126, 125, 124, 0.1)',
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(0.5, 1),
        ...style,
      }}
    >
      {children}
    </code>
  );
}
