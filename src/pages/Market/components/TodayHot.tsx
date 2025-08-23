import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { HIDDEN_WAVE, PREMIUM, REAL_WAVE } from '@/constans';
import { cn } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { CircleHelp } from 'lucide-react';
import { chemicalDataApi } from 'mock/market/api';
import type { ChemicalData } from 'mock/market/type';
import { memo, useMemo } from 'react';
import { ReactSVG } from 'react-svg';

type DataCardProps = {
  title: string;
  titlePrefix: string;
  titleColor: string;
  data: ChemicalData[];
  type: 'trend' | 'activity';
  variant: 'rise' | 'decline' | 'highest' | 'lowest';
};
const svgModules = Object.entries(
  import.meta.glob('@/assets/chartSvg/*.svg', {
    query: '?react-component', // 导入为 React 组件
    eager: true // 同步加载
  })
).map((item) => item?.[0]);

const getVariantStyles = (variant: DataCardProps['variant']) => {
  const styles = {
    rise: {
      indicator: 'bg-red-100',
      dot: 'bg-red-500',
      text: 'text-red-500',
      preview: 'bg-red-50',
      previewInner: 'bg-red-200'
    },
    decline: {
      indicator: 'bg-green-100',
      dot: 'bg-green-500',
      text: 'text-green-500',
      preview: 'bg-green-50',
      previewInner: 'bg-green-200'
    },
    highest: {
      indicator: 'bg-yellow-100',
      dot: 'bg-yellow-500',
      text: 'text-red-500',
      preview: 'bg-gray-50',
      previewInner: 'bg-gray-200'
    },
    lowest: {
      indicator: 'bg-red-100',
      dot: 'bg-red-500',
      text: 'text-green-500',
      preview: 'bg-gray-50',
      previewInner: 'bg-gray-200'
    }
  };
  return styles[variant];
};

const DataCard = memo(({ title, titlePrefix, titleColor, data, type, variant }: DataCardProps) => {
  const styles = getVariantStyles(variant);

  // 定义表头数据，包括标题、是否显示图标以及提示内容
  const fluctuationHeader = [
    { title: '名称', showIcon: false, tooltip: '' },
    { title: '隐波', showIcon: true, tooltip: HIDDEN_WAVE },
    { title: '实波', showIcon: true, tooltip: REAL_WAVE },
    { title: '溢价', showIcon: true, tooltip: PREMIUM }
  ];
  const trendHeaders = ['名称', '涨幅%', '隐波变化', '分时预览'].map((item) => ({
    title: item,
    showIcon: false,
    tooltip: ''
  }));

  const headers = type === 'trend' ? trendHeaders : fluctuationHeader;

  const tableContent = useMemo(() => {
    return (
      data?.map((item, index) => {
        // 为每一行随机选择一张图片
        const randomIndex = Math.floor(Math.random() * (svgModules.length as number));
        const randomSvg = svgModules[randomIndex];

        return (
          <TableRow key={`${item.name}-${index}`} className="border-b-0 hover:bg-gray-50">
            <TableCell className="px-3 py-2">
              <div className="flex items-center gap-1">
                <div
                  className={cn(
                    'flex h-4 w-4 items-center justify-center rounded-full',
                    styles.indicator
                  )}
                >
                  <div className={cn('h-2 w-2 rounded-full', styles.dot)} />
                </div>
                <span className="text-sm">{item.name}</span>
              </div>
            </TableCell>

            {type === 'trend' ? (
              <>
                <TableCell className={cn('px-3 py-2 text-center text-sm font-medium', styles.text)}>
                  {variant === 'rise' ? '+' : ''}
                  {item.change}%
                </TableCell>
                <TableCell className="px-3 py-2 text-center text-sm">{item.price}</TableCell>
                <TableCell className="px-3 py-2 text-center">
                  <ReactSVG src={randomSvg} className="w-full" />
                </TableCell>
              </>
            ) : (
              <>
                <TableCell className="px-3 py-2 text-center text-sm">{item.change}</TableCell>
                <TableCell className="px-3 py-2 text-center text-sm">{item.price}</TableCell>
                <TableCell className={cn('px-3 py-2 text-center text-sm font-medium', styles.text)}>
                  {item.premium}
                </TableCell>
              </>
            )}
          </TableRow>
        );
      }) || []
    );
  }, [data, type, variant, styles]);

  return (
    <Card className="text-card-foreground flex flex-col gap-2 rounded-xl border border-none bg-[#FCFCFC] p-2 shadow-sm">
      <CardHeader className="px-2">
        <CardTitle className="text-sm font-medium">
          {titlePrefix}
          <span className={titleColor}>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-b-0!">
              {headers.map((header, index) => (
                <TableHead
                  key={header.title}
                  className={cn('px-3 py-2 text-sm font-medium', index === 0 ? '' : 'text-center')}
                >
                  <div
                    className={cn('flex items-center gap-1', index === 0 ? '' : 'justify-center')}
                  >
                    {header.title}
                    {header.showIcon && (
                      <HoverCard openDelay={100} closeDelay={200}>
                        <HoverCardTrigger asChild>
                          <CircleHelp className="h-4 w-4 cursor-help text-gray-400 hover:text-gray-600" />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto p-3 text-left">
                          {header.tooltip}
                        </HoverCardContent>
                      </HoverCard>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>{tableContent}</TableBody>
        </Table>
      </CardContent>
    </Card>
  );
});

DataCard.displayName = 'DataCard';

export default function TodayHot() {
  const { data } = useQuery({
    queryKey: ['chemicalData'],
    queryFn: () => chemicalDataApi[0].response().data
  });

  return (
    <>
      <p className="text-2xl font-medium">今日热点</p>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DataCard
          title="上升"
          titlePrefix="隐波最大"
          titleColor="text-red-500"
          data={data?.rise || []}
          type="trend"
          variant="rise"
        />
        <DataCard
          title="下降"
          titlePrefix="隐波最大"
          titleColor="text-green-500"
          data={data?.decline || []}
          type="trend"
          variant="decline"
        />
        <DataCard
          title="最高"
          titlePrefix="波动率溢价"
          titleColor="text-red-500"
          data={data?.highest || []}
          type="activity"
          variant="highest"
        />
        <DataCard
          title="最低"
          titlePrefix="波动率溢价"
          titleColor="text-green-500"
          data={data?.lowest || []}
          type="activity"
          variant="lowest"
        />
      </div>
    </>
  );
}
