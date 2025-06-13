export interface Metric {
  name: string;
  value: number;
  chartData: { name: string; value: number }[];
}
