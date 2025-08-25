import { DashboardProgress } from '@/components/ui/dashboard-progress';
import type { ColumnDef } from '@/components/ui/data-table';
import { Progress } from '@/components/ui/progress';
import type { MarketData } from '@/server/type';
import { ReactSVG } from 'react-svg';

const handleNegative = (value: string, suffix?: string) => {
  const num = parseFloat(value);
  if (num === 0) {
    return <span>{value + suffix}</span>;
  }
  if (num < 0) {
    return <span className="text-[#089981]">{value + suffix}</span>;
  }
  return <span className="text-[#EF5350]">+{value + suffix}</span>;
};

export const HIDDEN_WAVE = (
  <>
    <p>平值隐波 (1个月滚动窗口)</p>
    <p>选定距当前日期一个月(22个交易日)到期，</p>
    <p>平值期权所对应的隐含波动率。</p>
    <br />
    <p>一般来讲，并没有恰好对应一个月的到期月份可以交易，</p>
    <p>所以我们会选择最接近一个月的相邻两个月份的平值隐波进行加权。</p>
    <br />
    <p>该项指标反映标的资产的预期波动水平。</p>
  </>
);

export const REAL_WAVE = (
  <>
    <p>实际波动率 (1个月滚动窗口)</p>
    <p>选定过去一个月(22个交易日)滚动窗口，</p>
    <p>标的资产的实际波动率。</p>
    <br />
    <p>该项指标反映标的资产的历史波动水平。</p>
  </>
);

export const PREMIUM = (
  <>
    <p>波动率溢价</p>
    <p>隐含波动率与实际波动率的差值。</p>
    <p>隐含波动率代表期权的价格，实际波动率代表期权的价值。</p>
    <br />
    <p>
      如果<span className="text-red-500">溢价</span>，则期权被高估，建议做义务方，或者叫期权
      <span className="text-red-500">卖方</span>。
    </p>
    <p>
      如果<span className="text-green-500">溢价</span>，则期权被低估，建议做权利方，或者叫期权
      <span className="text-green-500">买方</span>。
    </p>
    <br />
    <p>该项指标反映期权的性价比。</p>
  </>
);

export const TABLE_TOOLTIP = {
  NAME: (
    <p>
      期权的主力月是指<span className="text-red-500">期权</span>合约交易量最大、流动性最好的月份。
    </p>
  ),
  CTN: (
    <div>
      <p>标的价格涨跌幅</p>
      <p>
        展示标的价格的涨跌幅，其值基于标的当前最新价格和前一交易日
        <span className="text-red-500">收盘价</span>计算得出。
      </p>
      <br />
      <p>标的价格涨跌幅帮助您了解标的资产的短期和长期走势。</p>
    </div>
  ),
  ATMV22: (
    <div>
      <p>当月的平值期权所对应的隐含波动率。</p>
      <p>一般来讲，并没有恰好对应平值价格的行权价可以交易，</p>
      <p>所以我们会选择最接近平值价格的两个行权价的隐波进行加权。</p>
      <br />
      <p>该项指标反映标的资产的预期波动水平。</p>
      <br />
      <p className="text-yellow-200">特别说明：</p>
      <p>各平台计算平值隐波的方法存在差异，绝对值可能不同。</p>
      <p>建议关注隐波走势的连贯性，而非与其他平台数值的对比。</p>
      <br />
      <p className="text-blue-500">隐含波动率的意义：</p>
      <p>1. 市场预期：反映市场对未来标的价格波动幅度的预期</p>
      <p>2. 风险指标：隐波越高，市场预期风险越大</p>
      <p>3. 期权定价：是期权BS定价模型中的关键参数</p>
      <p>4. 交易信号：隐波的变化趋势可用于判断市场情绪</p>
      <br />
      <p className="text-blue-500">判断隐波是否合理的方法：</p>
      <p>1. 与历史波动率对比：隐波通常高于历史波动率</p>
      <p>2. 检查隐波期限结构：通常应呈现平滑曲线</p>
      <p>3. 关注隐波百分位：极高或极低值可能预示反转</p>
      <p>4. 对比波动率溢价：溢价过高表示隐波可能被高估</p>
    </div>
  ),
  VALPHAT: (
    <div>
      <p>隐波涨速</p>
      <p>隐含波动率增大或减小的速度。</p>
      <br />
      <p>
        如果 <span className="text-green-500">隐波涨速&gt;0</span>
        ，且数值越大，则当前隐波向上增长越快。
      </p>
      <p>
        如果 <span className="text-red-500">隐波涨速&lt;0</span>
        ，且数值越小，则当前隐波向下衰减越快。
      </p>
      <br />
      <p>该项指标反映隐含波动率的涨跌速度。</p>
    </div>
  ),
  RV22: (
    <div>
      <p>实际波动率 (1个月滚动窗口)</p>
      <p>选定过去一个月(22个交易日)滚动窗口，标的资产的实际波动率。</p>
      <br />
      <p>该项指标反映标的资产的历史波动水平。</p>
    </div>
  ),
  CARRY: (
    <div>
      <p>波动率溢价</p>
      <p>隐含波动率与实际波动率的差值。</p>
      <p>隐含波动率代表期权的价格，实际波动率代表期权的价值。</p>
      <br />
      <p>
        如果 <span className="text-red-500">溢价&gt;0</span>，则期权被高估，建议做义务方，或者叫期权
        <span className="text-red-500">卖方</span>。
      </p>
      <p>
        如果 <span className="text-green-500">溢价&lt;0</span>
        ，则期权被低估，建议做权利方，或者叫期权
        <span className="text-green-500">买方</span>。
      </p>
      <br />
      <p>该项指标反映期权的性价比。</p>
    </div>
  ),
  SKEW22: (
    <div>
      <p>当月隐波偏度</p>
      <p>
        当月的虚值 <span className="text-red-500">看涨</span>期权(delta=0.25)与虚值
        <span className="text-green-500">看跌</span>期权(delta=-0.25)所对应的IV的差值。
      </p>
      <br />
      <p>
        如果 <span className="text-red-500">偏度&gt;0</span>，则预期标的资产上涨。
      </p>
      <p>
        如果 <span className="text-green-500">偏度&lt;0</span>，则预期标的资产下跌。
      </p>
      <br />
      <p>该项指标反映对于标的资产的未来方向预期。</p>
    </div>
  ),
  ATMV_PERCENTILE: (
    <div>
      <p>当月隐波百分位</p>
      <p>当月隐波的现值处于过去一年历史数据中的百分位。 </p>
      <p>这个指标对应的就是海外流行的IVP指标(Implied Volatility Percentile)。</p>
      <br />
      <p>
        该值处于<span className="text-red-500">0%</span> 至
        <span className="text-green-500">100%</span>之间。
      </p>
      <p>
        越接近<span className="text-red-500">0%</span>表示隐波越便宜，建议以{' '}
        <span className="text-red-500">买权</span> 为主。
      </p>
      <p>
        越接近<span className="text-green-500">100%</span>表示隐波越贵，建议以{' '}
        <span className="text-green-500">卖权</span> 为主。
      </p>
      <br />
      <p>该项指标反映隐含波动率的相对水平。</p>
    </div>
  ),
  SKEW_PERCENTILE: (
    <div>
      <p>当月偏度百分位</p>
      <p>当月隐波偏度的现值处于过去一年历史数据中的百分位。</p>
      <br />
      <p>
        该值处于<span className="text-red-500">0%</span> 至
        <span className="text-green-500">100%</span>之间。
      </p>
      <p>
        越接近<span className="text-red-500">0%</span>表示<span className="text-red-500">看涨</span>
        期权预期越强烈，
      </p>
      <p>
        越接近<span className="text-green-500">100%</span>表示
        <span className="text-green-500">看跌</span>期权预期越强烈。
      </p>
      <br />
      <p>该项指标反映隐波偏度的相对水平。</p>
    </div>
  ),
  PREVIEW: (
    <div>
      <p>走势预览</p>
      <p>显示标的价格走势和隐含波动率走势的组合图表。</p>
      <br />
      <p className="text-blue-500">图表说明：</p>
      <p>• 主线条：标的价格走势</p>
      <p>• 紫色线条：隐含波动率走势</p>
      <br />
      <p className="text-green-500">使用提示：</p>
      <p>• 观察价格与隐波的联动关系</p>
      <p>• 隐波上升通常表示市场预期波动加大</p>
      <p>• 隐波下降通常表示市场预期波动减小</p>
    </div>
  )
} as const;

export const PRODUCT_TYPE = [
  { title: '全部', value: 'all' },
  { title: '股指', value: 'future' },
  { title: '金属', value: 'metal' },
  { title: '能化', value: 'energy' },
  { title: '农副', value: '' },
  { title: '油脂', value: 'oil' },
  { title: '黑色', value: 'black' }
];
//交易所
export const EXCHANGE_TYPE = [
  { title: '全部', value: 'all' },
  { title: '中金所', value: 'zhongjin' },
  { title: '上交所', value: 'shangzheng' },
  { title: '深交所', value: 'shenzhen' },
  { title: '上期所', value: 'shangqi' },
  { title: '大商所', value: 'dazheng' },
  { title: '郑商所', value: 'zhengshang' },
  { title: '能源中心', value: 'nengyuan' },
  { title: '广期所', value: 'guangqi' }
];

export const EXPORT_TYPE = [
  { title: '导出为CSV', value: 'csv' },
  { title: '导出为JSON', value: 'json' }
];

export const COLUMNS: ColumnDef<MarketData>[] = [
  {
    key: 'product_alias',
    title: '名称',
    tooltip: TABLE_TOOLTIP.NAME,
    sortable: true,
    sticky: true,
    render: (value: string, row: MarketData) => <p>{value + row.prodUnd + row.exp.slice(2)}</p>
  },
  {
    key: 'price',
    title: '最新价',
    sortable: true,
    render: (value: string) => <p>{value}</p>
  },
  {
    key: 'ctn',
    title: '标的涨幅%',
    tooltip: TABLE_TOOLTIP.CTN,
    sortable: true,
    render: (value: string) => <p>{handleNegative((parseFloat(value) * 100).toFixed(2), '%')}</p>
  },
  {
    key: 'atmv22',
    title: '当月隐波',
    tooltip: TABLE_TOOLTIP.ATMV22,
    sortable: true,
    sticky: false
  },
  {
    key: 'atmv_1dchg',
    title: '隐波变化',
    sortable: true,
    sticky: false,
    render: (value: string) => <p>{handleNegative(value, '')}</p>
  },
  {
    key: 'valphaT',
    title: '隐波涨速',
    tooltip: TABLE_TOOLTIP.VALPHAT,
    sortable: true,
    sticky: false,
    render: (value: string) => <p>{handleNegative(parseFloat(value).toFixed(3), '')}</p>
  },
  {
    key: 'rv22',
    title: '实波',
    tooltip: TABLE_TOOLTIP.RV22,
    sortable: true,
    sticky: false
  },
  {
    key: 'carry',
    title: '溢价',
    tooltip: TABLE_TOOLTIP.CARRY,
    sortable: true,
    sticky: false,
    render: (value: string) => <p>{handleNegative(value, '')}</p>
  },
  {
    key: 'skew22',
    title: '当月偏度',
    tooltip: TABLE_TOOLTIP.SKEW22,
    sortable: true,
    sticky: false
  },
  {
    key: 'atmv_percentile',
    title: '隐波百分位',
    tooltip: TABLE_TOOLTIP.ATMV_PERCENTILE,
    sortable: true,
    sticky: false,
    render: (value: string) => {
      return (
        <div className="flex items-center gap-2">
          <Progress value={parseFloat(value)} />
          <span>{parseFloat(value).toFixed(2)}%</span>
        </div>
      );
    }
  },
  {
    key: 'skew_percentile',
    title: '偏度百分位',
    tooltip: TABLE_TOOLTIP.SKEW_PERCENTILE,
    sortable: true,
    sticky: false,
    render(value) {
      return (
        <div className="flex items-center justify-center">
          <DashboardProgress size={80} value={parseFloat(value)} color="warning" />
        </div>
      );
    }
  },
  {
    key: '',
    title: '走势预览',
    tooltip: TABLE_TOOLTIP.PREVIEW,
    sortable: false,
    render: () => {
      return <ReactSVG src={'src/assets/preview.svg'} />;
    }
  }
];
