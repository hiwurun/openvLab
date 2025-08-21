import {
  BookOpen,
  ChartCandlestick,
  ChartColumnIncreasing,
  ChartSpline,
  DatabaseZap,
  Radio,
  TrendingUp
} from 'lucide-react';
export const NAV_LIST = [
  {
    label: '市场',
    path: '/market'
  },
  {
    label: '行情',
    path: '/chart',
    children: [
      {
        label: '轻量版',
        description: '简洁高效,快速查看行情',
        path: '/light',
        icon: <ChartSpline size={16} />
      }
    ],
    link: [
      {
        label: '图表教程',
        params: 'section=video-0',
        icon: <BookOpen size={16} color="oklch(80.9% 0.105 251.813)" />
      },
      {
        label: '策略分析',
        params: '?section=strategy',
        icon: <TrendingUp size={16} color="oklch(80.9% 0.105 251.813)" />
      }
    ]
  },
  {
    label: '教学',
    path: '/teaching'
  }
];

export const FEATURES = [
  {
    title: '实时行情',
    description: '技术分析与基础面数据',
    icon: <ChartCandlestick />
  },
  {
    title: '波动率曲面',
    description: '实时隐含波动率可视化',
    icon: <ChartColumnIncreasing />
  },
  {
    title: '策略构建',
    description: '轻松构建多腿期权策略',
    icon: <DatabaseZap />
  },
  {
    title: '期权异动',
    description: '捕捉期权市场的异常活动',
    icon: <Radio />
  }
];
