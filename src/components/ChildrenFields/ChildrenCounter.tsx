import { Controller, useFormContext, useWatch } from 'react-hook-form';
import Counter from '../Counter.tsx';
import { ChristmasInvitationFormSchema } from '../../schema/form-schema.ts';

export const ChildrenCounter = () => {
  const { control } = useFormContext<ChristmasInvitationFormSchema>();
  const isChildren = useWatch({ control, name: 'isChildren' });

  if (!isChildren) {
    return null;
  }

  return (
    <Controller
      name="childrenNumber"
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-2 items-center">
          <Counter
            min={0}
            max={10}
            step={1}
            value={field.value}
            onChange={field.onChange}
            label="Nombre d'enfants"
          />
          {fieldState.error && (
            <p className="text-red-500 text-sm">{fieldState.error.message}</p>
          )}
        </div>
      )}
    />
  );
};
