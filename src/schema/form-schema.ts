import * as yup from 'yup';

export const chistmasInvitationFormSchema = yup.object({
    isComingForChristmas: yup.boolean().required(),
    startDate: yup.string().required(),
    endDate: yup.string().required(),
    adultsNumber: yup.number().required(),
})

export type ChistmasInvitationFormSchema = yup.InferType<typeof chistmasInvitationFormSchema>;