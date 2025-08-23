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
  { title: '能源中心', value: 'shangqi' },
  { title: '广期所', value: 'guangqi' }
];

export const EXPORT_TYPE = [
  { title: '导出为CSV', value: 'csv' },
  { title: '导出为JSON', value: 'json' }
];

export const COLUMNS = [
  { title: '名称', isHoverCard: true, sortable: true, field: 'product' },
  { title: '最新价', isHoverCard: false, sortable: false, field: 'price' },
  { title: '标的涨幅%', isHoverCard: true, sortable: true, field: 'optionType' },
  { title: '当月隐波', isHoverCard: true, sortable: true, field: 'optionName' },
  { title: '隐波变化', isHoverCard: false, sortable: true, field: 'optionCode' },
  { title: '隐波涨速', isHoverCard: true, sortable: true, field: 'optionPrice' },
  { title: '实波', isHoverCard: true, sortable: true, field: 'optionVolume' },
  { title: '溢价', isHoverCard: true, sortable: true, field: 'optionVolume' },
  { title: '当月偏度', isHoverCard: true, sortable: true, field: 'optionVolume' },
  { title: '隐波百分位', isHoverCard: true, sortable: true, field: 'optionVolume' },
  { title: '偏度百分位', isHoverCard: true, sortable: true, field: 'optionVolume' },
  { title: '走势预览', isHoverCard: true, sortable: true, field: 'optionVolume' }
];
