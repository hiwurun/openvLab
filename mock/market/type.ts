export type ChemicalData = {
  name: string;
  type: string;
  change: number;
  price: number;
  range?: string;
  premium?: number;
};

export type CardProps = {
  title: string;
  titleColor: string;
  data: ChemicalData[];
  isRising?: boolean;
  isHighest?: boolean;
};
