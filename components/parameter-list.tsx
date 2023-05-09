import { Parameter } from '@/interfaces/parameter';
import ParameterRow from './parameter-row';

export default function ParameterList({ parameterList }: { parameterList: Parameter[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Parameter Name</th>
          <th>Default Value</th>
          <th>Actual Value</th>
        </tr>
      </thead>
      <tbody>
        {parameterList.map((p) =>
          <ParameterRow parameter={p} key={p.id}/>
        )}
      </tbody>
    </table>
  );
}