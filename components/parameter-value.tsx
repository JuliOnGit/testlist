import { PencilIcon } from '@heroicons/react/24/outline';

export default function ParameterValue({ currentValue }: { currentValue: string | number | boolean }) {
  return (
    <>
      {currentValue}
      <button>
        <PencilIcon className='h-4 w-4' />
      </button>
    </>
  );
}