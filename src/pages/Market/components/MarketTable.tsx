'use client';

import { DataTable } from '@/components/ui/data-table';
import { COLUMNS } from '@/constans/Market';
import { getMarketData } from '@/server';
import type { MarketData } from '@/server/type';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Condition from './Condition';

// 获取列的提示信息
function getTooltipContent(title: string): string {
  switch (title) {
    case '当月隐波':
      return '平值隐波 (1个月滚动窗口)，选定距当前日期一个月到期，平值期权所对应的隐含波动率';
    case '实波':
      return '实际波动率 (1个月滚动窗口)，选定过去一个月滚动窗口，标的资产的实际波动率';
    case '溢价':
      return '波动率溢价，隐含波动率与实际波动率的差值';
    default:
      return `关于${title}的详细说明`;
  }
}

// 将COLUMNS转换为DataTable需要的格式
// const tableColumns: ColumnDef<MarketData>[] = COLUMNS.map((col) => ({
//   key: col.field,
//   title: col.title,
//   tooltip: col.isHoverCard ? getTooltipContent(col.title) : undefined,
//   sortable: col.sortable !== false,
//   sticky: col.field === 'product_alias',
//   render: col.render
// }));

export default function MarketTable() {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

  const { data } = useQuery({
    queryKey: ['marketData'],
    queryFn: getMarketData
  });
  console.log(data);

  const handleSort = (column: string, direction: 'asc' | 'desc' | null) => {
    setSortColumn(direction ? column : null);
    setSortDirection(direction);
  };

  const sortedData = [...(data?.result || [])].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;

    // 安全地获取值
    const getValueSafely = (obj: MarketData, key: string): string => {
      return obj[key as keyof typeof obj] || '';
    };

    const aValue = getValueSafely(a, sortColumn);
    const bValue = getValueSafely(b, sortColumn);

    if (sortDirection === 'asc') {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });

  return (
    <div className="w-full space-y-4">
      <Condition />
      <DataTable
        data={sortedData}
        columns={COLUMNS}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        onSort={handleSort}
      />
    </div>
  );
}
