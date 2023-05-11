import { CheckIcon, PencilIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface FormElements extends HTMLFormControlsCollection {
  actualValue: HTMLInputElement
}

interface ActualValueFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export default function ParameterValue({ currentValue }: { currentValue: string | number | boolean }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(currentValue);

  function handleSubmit(e: React.FormEvent<ActualValueFormElement>): void {
    e.preventDefault();

    console.log(e.currentTarget.elements.actualValue.value);

    setValue(e.currentTarget.elements.actualValue.value);
    setIsEditing(false);
  }

  return isEditing
    ? (<form onSubmit={handleSubmit} className='flex justify-between'>
      <input name='actualValue' type='text' defaultValue={value as string} />
      <button type='submit'>
        <CheckIcon className='h-4 w-4' />
      </button>
    </form>)
    : (<div className='flex justify-between'>
      {value}
      <button onClick={() => setIsEditing(true)}>
        <PencilIcon className='h-4 w-4' />
      </button>
    </div>);
}