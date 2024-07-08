import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { Calendar as Calendaricon } from '@phosphor-icons/react/dist/ssr/Calendar';
import { XSquare } from '@phosphor-icons/react/dist/ssr/XSquare';
import { Table } from '@phosphor-icons/react/dist/ssr/Table';
import { User} from '@phosphor-icons/react/dist/ssr/User';
import { ListBullets } from '@phosphor-icons/react/dist/ssr/ListBullets';
export const navIcons = {
  'chart-pie': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  'x-square': XSquare,
  'table':Table,
  'calendar':Calendaricon,
  'person':User,
  'list':ListBullets,
  user: UserIcon,
  users: UsersIcon,
} as Record<string, Icon>;
