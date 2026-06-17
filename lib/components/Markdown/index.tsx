import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const remarkPlugins = [remarkGfm];

const components = {};

export type MarkdownProps = {
  content?: string;
};

export default function Markdown({ content }: MarkdownProps) {
  // TODO:
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
