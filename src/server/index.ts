import type { BaseResponse, MarketData } from './type';

export const getMarketData = async (): Promise<BaseResponse<MarketData[]>> => {
  const response = await fetch('https://www.openvlab.cn/api/ctamap-all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
};
