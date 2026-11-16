import DumpLayout from '@/layouts/DumpLayout';
import ErrorLayout from '@/layouts/ErrorLayout';
import GridLayout from '@/layouts/GridLayout';
import StackLayout from '@/layouts/StackLayout';
import type { Layouts } from '@/presets';

const layouts = {
  dump: DumpLayout,
  error: ErrorLayout,
  grid: GridLayout,
  stack: StackLayout,
} satisfies Layouts;
export default layouts;
