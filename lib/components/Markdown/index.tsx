import type { CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const remarkPlugins = [remarkGfm];

const components = {};

export type MarkdownProps = {
  className?: string;
  style?: CSSProperties;
  content?: string;
};

export function Markdown({ className, style, content }: MarkdownProps) {
  // TODO:
  return (
    <div className={className} style={style}>
      <ReactMarkdown
        remarkPlugins={remarkPlugins}
        components={components}
        skipHtml
      >
        {content ?? ''}
      </ReactMarkdown>
    </div>
  );
}
