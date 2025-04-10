import { Button } from 'flowbite-react';
import { useFormContext, useWatch } from 'react-hook-form';
import { ChristmasInvitationFormSchema } from '../schema/form-schema.ts';

interface CounterProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  label: string;
}

const Counter = ({
  value = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  onChange,
  label,
}: CounterProps) => {
  const { control } = useFormContext<ChristmasInvitationFormSchema>();
  const isComingForChristmas = useWatch({
    control,
    name: 'isComingForChristmas',
  });

  const handleChange = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  const increment = () => handleChange(value + step);
  const decrement = () => handleChange(value - step);

  return (
    <div className="flex items-center justify-between w-full max-w-sm p-4">
      <p className="text-sm font-medium text-white">{label}</p>

      <div className="flex items-center space-x-2">
        <Button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition disabled:opacity-50"
          onClick={decrement}
          disabled={value <= min || !isComingForChristmas}
        >
          –
        </Button>

        <div className="w-12 text-center text-lg font-semibold text-white">
          {value}
        </div>

        <Button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition disabled:opacity-50"
          onClick={increment}
          disabled={value >= max || !isComingForChristmas}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Counter;
