import { CheckIcon, PencilIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function ParameterValue({ currentValue }: { currentValue: string | number | boolean }) {

  const [isEditing, setIsEditing] = useState(false);

  const edit = () => setIsEditing(true);
  const close = () => setIsEditing(false);

  return isEditing ? (
    <>
      <input type='text' value={currentValue as string} />
      <button onClick={close}>
        <CheckIcon className='h-4 w-4' />
      </button>
    </>
  ) : (<>
    {currentValue}
    <button onClick={edit}>
      <PencilIcon className='h-4 w-4' />
    </button>
  </>);
}