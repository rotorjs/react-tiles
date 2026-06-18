import GridLayout from '@/layouts/GridLayout';
import StackLayout from '@/layouts/StackLayout';
import type { Layouts } from '@/presets';

const layouts = {
  grid: GridLayout,
  stack: StackLayout,
} satisfies Layouts;
export default layouts;
