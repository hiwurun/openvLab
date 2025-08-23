'use client';

import { DataTable, type ColumnDef } from '@/components/ui/data-table';
import { COLUMNS } from '@/constans/Market';
import { useState } from 'react';
import Condition from './Condition';

// 示例市场数据
const marketData = [
  {
    product: 'IF2406',
    price: '4,123.2',
    optionType: '+1.25%',
    optionName: '21.5%',
    optionCode: '+0.8%',
    optionPrice: '0.6%',
    optionVolume: '18.2%',
    premium: '+3.3%',
    skew: '0.15',
    ivPercentile: '68%',
    skewPercentile: '45%',
    trend: '图表'
  },
  {
    product: 'IH2406',
    price: '2,876.4',
    optionType: '+0.95%',
    optionName: '19.8%',
    optionCode: '+0.5%',
    optionPrice: '0.4%',
    optionVolume: '17.5%',
    premium: '+2.3%',
    skew: '0.12',
    ivPercentile: '62%',
    skewPercentile: '40%',
    trend: '图表'
  },
  {
    product: 'IC2406',
    price: '5,687.0',
    optionType: '+1.45%',
    optionName: '22.3%',
    optionCode: '+1.2%',
    optionPrice: '0.8%',
    optionVolume: '19.1%',
    premium: '+3.2%',
    skew: '0.18',
    ivPercentile: '75%',
    skewPercentile: '52%',
    trend: '图表'
  },
  {
    product: 'AU2406',
    price: '525.64',
    optionType: '+0.75%',
    optionName: '16.2%',
    optionCode: '+0.3%',
    optionPrice: '0.2%',
    optionVolume: '14.5%',
    premium: '+1.7%',
    skew: '0.09',
    ivPercentile: '55%',
    skewPercentile: '38%',
    trend: '图表'
  },
  {
    product: 'CU2406',
    price: '78,450',
    optionType: '+1.05%',
    optionName: '18.7%',
    optionCode: '+0.6%',
    optionPrice: '0.5%',
    optionVolume: '16.8%',
    premium: '+1.9%',
    skew: '0.11',
    ivPercentile: '60%',
    skewPercentile: '42%',
    trend: '图表'
  }
];

interface MarketItem {
  product: string;
  price: string;
  optionType: string;
  optionName: string;
  optionCode: string;
  optionPrice: string;
  optionVolume: string;
  premium: string;
  skew: string;
  ivPercentile: string;
  skewPercentile: string;
  trend: string;
  [key: string]: string;
}

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
const tableColumns: ColumnDef<MarketItem>[] = COLUMNS.map((col) => ({
  key: col.field,
  title: col.title,
  tooltip: col.isHoverCard ? getTooltipContent(col.title) : undefined,
  sortable: col.sortable !== false,
  sticky: col.field === 'product'
}));

export default function MarketTable() {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

  const handleSort = (column: string, direction: 'asc' | 'desc' | null) => {
    setSortColumn(direction ? column : null);
    setSortDirection(direction);
  };

  const sortedData = [...marketData].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;

    // 安全地获取值
    const getValueSafely = (obj: MarketItem, key: string): string => {
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
        columns={tableColumns}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        onSort={handleSort}
      />
    </div>
  );
}
