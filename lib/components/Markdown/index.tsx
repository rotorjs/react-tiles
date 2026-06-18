import Divider, { type DividerProps } from '@/components/Divider';
import Typography, { type TypographyProps } from '@/components/Typography';
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

const components = {
  // a: TODO:,
  // blockquote: TODO:,
  // code: TODO:,
  h1: (props: TypographyProps) => <Typography {...props} variant="h1" />,
  h2: (props: TypographyProps) => <Typography {...props} variant="h2" />,
  h3: (props: TypographyProps) => <Typography {...props} variant="h3" />,
  h4: (props: TypographyProps) => <Typography {...props} variant="h4" />,
  h5: (props: TypographyProps) => <Typography {...props} variant="h5" />,
  h6: (props: TypographyProps) => <Typography {...props} variant="h6" />,
  hr: (props: DividerProps) => <Divider {...props} />,
  // ol: TODO:,
  p: (props: TypographyProps) => <Typography {...props} />,
  // pre: TODO:,
  span: (props: TypographyProps) => <Typography {...props} component="span" />,
  // table: TODO:,
  // tbody: TODO:,
  // td: TODO:,
  // tfoot: TODO:,
  // th: TODO:,
  // thead: TODO:,
  // tr: TODO:,
  // ul: TODO:,
};
