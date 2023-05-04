import { Parameter } from '@/interfaces/parameter';

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
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.defaultValue}</td>
            <td>{p.actualValue}</td>
          </tr>)}
        <tr>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}