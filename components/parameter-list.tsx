import { Parameter } from '@/interfaces/parameter';
import ParameterRow from './parameter-row';

export default function ParameterList({ parameterList }: { parameterList: Parameter[] }) {
  return (
    <table className='border-collapse table-auto w-full text-sm'>
      <thead>
        <tr>
          <th className='border-b dark:border-slate-600 font-medium p-4 text-slate-400 dark:text-slate-200 text-left w-1/12'>ID</th>
          <th className='border-b dark:border-slate-600 font-medium p-4 text-slate-400 dark:text-slate-200 text-left w-5/12'>Parameter Name</th>
          <th className='border-b dark:border-slate-600 font-medium p-4 text-slate-400 dark:text-slate-200 text-left w-3/12'>Default Value</th>
          <th className='border-b dark:border-slate-600 font-medium p-4 text-slate-400 dark:text-slate-200 text-left w-3/12'>Actual Value</th>
        </tr>
      </thead>
      <tbody className='bg-white dark:bg-slate-800'>
        {parameterList.map((p) =>
          <ParameterRow parameter={p} key={p.id}/>
        )}
      </tbody>
    </table>
  );
}