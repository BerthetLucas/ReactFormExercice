import * as yup from 'yup';

export const chistmasInvitationFormSchema = yup.object({
    isComingForChristmas: yup.boolean().default(false),
    startDate: yup.string().required("Veuillez renseigner une date"),
    endDate: yup.string().required("Veuillez renseigner une date"),
    adultsNumber: yup.number().required(),
    adulteFirstName: yup.array()
        .of(yup.string().required('Le prénom de chaque adulte est requis'))
        .min(1, 'Vous devez ajouter au moins un prénom')
        .max(10, 'Le nombre d\'adultes ne peut pas dépasser 10').required(),
    isChildren: yup.boolean().required(),
    childrenNumber: yup.number().required(),
})

export type ChistmasInvitationFormSchema = yup.InferType<typeof chistmasInvitationFormSchema>;
