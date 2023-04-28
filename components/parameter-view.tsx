import { useState } from "react";
import ParameterList from "./parameter-list";
import { Parameter } from "@/interfaces/parameter";

export default function ParameterView() {
  const [parameterList, setParameterList] = useState<Parameter[]>([
    {
      id: 1,
      name: 'first param',
      defaultValue: 'a default value',
      actualValue: 'another value'
    },
    {
      id: 2,
      name: 'next parameter',
      defaultValue: 'a value',
      actualValue: 'the same value'
    },
    {
      id: 3,
      name: 'third parameter',
      defaultValue: 'another value',
      actualValue: 'a different value'
    }
  ]);

  return <ParameterList parameterList={parameterList}></ParameterList>;
}