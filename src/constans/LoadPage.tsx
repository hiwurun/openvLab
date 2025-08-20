import { BookOpen, ChartSpline, TrendingUp } from "lucide-react";
export const NAV_LIST = [
  {
    label: "市场",
    path: "/market",
  },
  {
    label: "行情",
    path: "/chart",
    children: [
      {
        label: "轻量版",
        description: "简洁高效,快速查看行情",
        path: "/light",
        icon: <ChartSpline />,
      },
    ],
    link: [
      {
        label: "图表教程",
        params: "section=video-0",
        icon: <BookOpen />,
      },
      {
        label: "策略分析",
        params: "?section=strategy",
        icon: <TrendingUp />,
      },
    ],
  },
  {
    label: "教学",
    path: "/teaching",
  },
];
