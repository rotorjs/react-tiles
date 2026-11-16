import { useMemo, type ComponentProps } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { defaultComponents } from './components';

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
