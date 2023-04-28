import { Parameter } from './parameter';

export type TestCase = {
  name: string;
  order: number;
  parameters: Parameter[];
}