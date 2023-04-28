import { Parameter } from "@/interfaces/parameter";

export default function ParameterList({ parameterList }: { parameterList: Parameter[] }) {
    return parameterList.map((p) => (<div>{p.name}</div>));
}