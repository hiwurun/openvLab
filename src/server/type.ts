export interface BaseResponse<T> {
  code: number;
  result: T;
  message: string;
}

export interface MarketData {
  sector: string;
  skew_percentile: string;
  exchange: string;
  rv22: string;
  ctn: string;
  has_night_trading: string;
  price: string;
  carry: string;
  ctn_1w: string;
  rv11: string;
  skew_1wchg: string;
  product: string;
  atmv_1wchg: string;
  last_time: string;
  exp: string;
  prodUnd: string;
  skew_1dchg: string;
  atmv22: string;
  atmv_percentile: string;
  interval_1day_series: string;
  atmv_1dchg: string;
  sector_alias: string;
  product_alias: string;
  valphaT: string;
  rv44: string;
  skew22: string;
}
