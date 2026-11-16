import type { CommonDashboardLayoutConfig } from '@/CommonDashboardLayoutConfig';
import type { CommonDashboardTileNode } from '@/CommonDashboardTileNode';
import type {
  DashboardAction,
  DashboardLayoutConfig,
} from '@rotorjs/dashboard';
import { useDashboardContext } from '@rotorjs/react';
import deepEquals from 'fast-deep-equal';
import { useEffect, useMemo, useState } from 'react';

export type ActionTileNode<
  Layout extends DashboardLayoutConfig = DashboardLayoutConfig,
> = CommonDashboardTileNode<Layout> & {
  action?: DashboardAction;
};

export default function ActionTile(props: ActionTileNode) {
  const { action } = props as ActionTileNode<CommonDashboardLayoutConfig>;

  const { target, approveUserAction } = useDashboardContext();

  const approvedAction = useMemo(
    () => (!action || !approveUserAction(action) ? undefined : action),
    [action, approveUserAction],
  );

  const [memoAction, setMemoAction] = useState(approvedAction);

  if (!deepEquals(memoAction, approvedAction)) {
    setMemoAction(approvedAction);
  }

  useEffect(() => {
    if (!memoAction) return;

    target?.dispatchAction(memoAction);
  }, [target, memoAction]);

  return null;
}
ActionTile.displayName = 'ActionTile';
