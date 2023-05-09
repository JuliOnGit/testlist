import { Parameter } from '@/interfaces/parameter';
import ParameterValue from './parameter-value';

export default function ParameterRow({ parameter }: { parameter: Parameter }) {
  return (<tr>
    <td>{parameter.id}</td>
    <td>{parameter.name}</td>
    <td>{parameter.defaultValue}</td>
    <td>
      <ParameterValue currentValue={parameter.actualValue} />
    </td>
  </tr>);
}