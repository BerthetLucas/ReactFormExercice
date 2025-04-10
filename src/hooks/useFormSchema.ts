import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  christmasInvitationFormSchema,
  ChristmasInvitationFormSchema,
} from '../schema/form-schema.ts';

export const useChristmasInvitationFormSchema = () => {
  return useForm<ChristmasInvitationFormSchema>({
    // @ts-expect-error type inference issue, but the type in error is the same.
    resolver: yupResolver(christmasInvitationFormSchema),
    defaultValues: {
      isComingForChristmas: false,
    },
  });
};
