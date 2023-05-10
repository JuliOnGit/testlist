import { Parameter } from '@/interfaces/parameter';
import ParameterValue from './parameter-value';

export default function ParameterRow({ parameter }: { parameter: Parameter }) {
  return (<tr>
    <td className='border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400'>{parameter.id}</td>
    <td className='border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400'>{parameter.name}</td>
    <td className='border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400'>{parameter.defaultValue}</td>
    <td className='border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400'>
      <ParameterValue currentValue={parameter.actualValue} />
    </td>
  </tr>);
}