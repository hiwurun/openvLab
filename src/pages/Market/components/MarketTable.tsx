import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { COLUMNS } from '@/constans/Market';
import { cn } from '@/lib/utils';
import { ArrowUpDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import Condition from './Condition';

type SortDirection = 'asc' | 'desc' | null;
type SortConfig = {
  field: string;
  direction: SortDirection;
};

export default function MarketTable() {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: '',
    direction: null
  });

  const handleSort = (field: string) => {
    let direction: SortDirection = 'asc';

    if (sortConfig.field === field) {
      if (sortConfig.direction === 'asc') {
        direction = 'desc';
      } else if (sortConfig.direction === 'desc') {
        direction = null;
      } else {
        direction = 'asc';
      }
    }

    setSortConfig({ field, direction });
  };

  const getSortIcon = (field: string) => {
    if (sortConfig.field !== field) {
      return <ArrowUpDown className="ml-1 h-4 w-4 text-gray-400" />;
    }

    if (sortConfig.direction === 'asc') {
      return <ArrowUpDown className="ml-1 h-4 w-4 rotate-180 text-blue-500" />;
    } else if (sortConfig.direction === 'desc') {
      return <ArrowUpDown className="ml-1 h-4 w-4 text-blue-500" />;
    }

    return <ArrowUpDown className="ml-1 h-4 w-4 text-gray-400" />;
  };

  return (
    <div className="w-full">
      <Condition />
      <Table>
        <TableHeader>
          <TableRow>
            {COLUMNS.map((column) => (
              <TableHead
                key={column.field}
                className={cn(column.sortable ? 'cursor-pointer' : '')}
                onClick={column.sortable ? () => handleSort(column.field) : undefined}
              >
                {column.isHoverCard ? (
                  <HoverCard>
                    <HoverCardTrigger className="flex items-center">
                      <span>{column.title}</span>
                      <HelpCircle className="ml-1 h-4 w-4 text-gray-400" />
                      {column.sortable && getSortIcon(column.field)}
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="text-sm">
                        <p>关于 {column.title} 的详细信息</p>
                        <p>字段名: {column.field}</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <div className="flex items-center">
                    <span>{column.title}</span>
                    {column.sortable && getSortIcon(column.field)}
                  </div>
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* 这里将来会添加实际数据行 */}
          <TableRow>
            <TableCell colSpan={COLUMNS.length} className="py-4 text-center">
              暂无数据
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
