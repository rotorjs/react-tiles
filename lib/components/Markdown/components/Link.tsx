import LinkComponent from '@/components/Link';
import type { MdProps } from '@/components/Markdown/MdProps';
import type { NavigateDashboardAction } from '@rotorjs/dashboard';
import { useDashboardContext } from '@rotorjs/react';
import type { ComponentProps, SyntheticEvent } from 'react';

export function Link({
  node: _,
  href,
  ...props
}: MdProps<ComponentProps<'a'>>) {
  const { target } = useDashboardContext();

  return (
    <LinkComponent
      {...props}
      href={href}
      onClick={
        !href
          ? undefined
          : (event: SyntheticEvent) => {
              event.preventDefault();

              target?.dispatchAction({
                type: 'navigate',
                href: href ?? '',
              } satisfies NavigateDashboardAction);
            }
      }
    />
  );
}
