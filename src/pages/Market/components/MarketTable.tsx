'use client';

import { DataTable } from '@/components/ui/data-table';
import { COLUMNS } from '@/constans/Market';
import { getMarketData } from '@/server';
import type { MarketData } from '@/server/type';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Condition from './Condition';

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
