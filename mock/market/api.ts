import type { MockMethod } from 'vite-plugin-mock';
import type { ChemicalData } from './type';

const chemicalData: ChemicalData[] = [
  {
    name: 'PTA',
    type: 'rise',
    change: 2.43,
    price: 3.76,
    range: '-29.49'
  },
  {
    name: '短纤',
    type: 'rise',
    change: 1.69,
    price: 3.64,
    range: '-23.59'
  },
  {
    name: '烧碱',
    type: 'rise',
    change: 1.45,
    price: 2.62,
    range: '-10.46'
  },
  {
    name: '对二甲苯',
    type: 'rise',
    change: 1.8,
    price: 2.42,
    range: '-8.30'
  },
  {
    name: '丁二烯橡胶',
    type: 'rise',
    change: 0.43,
    price: 1.99,
    range: '5.81'
  },
  {
    name: '橡胶',
    type: 'decline',
    change: 0,
    price: -1.89,
    range: '-8.63'
  },
  {
    name: '甲醇',
    type: 'decline',
    change: 0.17,
    price: -1.11,
    range: '5.81'
  },
  {
    name: '铁矿石',
    type: 'decline',
    change: 0.32,
    price: -1.02,
    range: '5.81'
  },
  { name: '乙二醇', type: 'decline', change: -0.27, price: -1.02, range: '5.81' },

  {
    name: '沪铝',
    type: 'decline',
    change: 0.24,
    price: -0.97,
    range: '5.25'
  },
  {
    name: '丁二烯橡胶',
    type: 'highest',
    change: 30.89,
    price: 23.96,
    premium: 6.93
  },
  { name: '对二甲苯', type: 'highest', change: 23.4, price: 16.69, premium: 6.71 },
  { name: '沪锡', type: 'highest', change: 17.3, price: 11.14, premium: 6.16 },
  { name: '原油', type: 'highest', change: 25.66, price: 20.15, premium: 5.51 },
  { name: '烧碱', type: 'highest', change: 29.64, price: 24.82, premium: 4.82 },
  { name: '玻璃', type: 'lowest', change: 30.95, price: 59.71, premium: -28.76 },
  { name: '纯碱', type: 'lowest', change: 28.46, price: 51.51, premium: -23.05 },
  { name: 'PVC', type: 'lowest', change: 14.08, price: 24.54, premium: -10.46 },
  { name: '氧化铝', type: 'lowest', change: 28.65, price: 37.28, premium: -8.63 },
  { name: '螺纹钢', type: 'lowest', change: 15.6, price: 23.9, premium: -8.3 }
];
const handleFieds = (fields: string) => chemicalData.filter((item) => item.type === fields);

export const chemicalDataApi = [
  {
    url: '/api/chemical-data',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          rise: handleFieds('rise'),
          decline: handleFieds('decline'),
          lowest: handleFieds('lowest'),
          highest: handleFieds('highest')
        }
      };
    }
  }
] as MockMethod[];
