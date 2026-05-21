import { lazy, Suspense, type ComponentProps, type ComponentType } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function suspend<C extends ComponentType<any>>(
  load: () => Promise<{ default: C }>,
  Fallback?: ComponentType<ComponentProps<C>>,
) {
  const Lazy = lazy(load);

  function Suspended(props: ComponentProps<C>) {
    return (
      <Suspense
        fallback={Fallback == null ? undefined : <Fallback {...props} />}
      >
        <Lazy {...props} />
      </Suspense>
    );
  }

  return Suspended;
}
