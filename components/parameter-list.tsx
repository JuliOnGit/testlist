import { Parameter } from '@/interfaces/parameter';

export default function ParameterList({ parameterList }: { parameterList: Parameter[] }) {
  return (
    <>
      {parameterList.map((p) => <li key={p.id}>{p.name}</li>)}
    </>
  );
}