import * as yup from 'yup';

export const christmasInvitationFormSchema = yup.object({
    isComingForChristmas: yup.boolean().default(false),
    startDate: yup.date().nullable()
        .when('isComingForChristmas', {
            is: true,
            then: schema => schema.required("Veuillez renseigner une date"),
        }),
    endDate: yup.date().nullable()
        .when('isComingForChristmas', {
            is: true,
            then: schema => schema
                .required("Veuillez renseigner une date")
                .test(
                    'endDate-after-startDate',
                    "La date de fin doit être supérieure à celle de l'arrivée",
                    function (endDate) {
                        const {startDate} = this.parent;
                        if (!startDate || !endDate) return true;
                        return new Date(endDate) >= new Date(startDate);
                    }
                ),
        }),
    adultsNumber: yup.number().optional(),
    adulteFirstName: yup.array().optional().when('adultsNumber', {
        is: (value: number) => value > 0,
        then: schema => schema
            .of(yup.string().required('Le prénom de chaque adulte est requis'))
            .min(1, 'Vous devez ajouter au moins un prénom')
            .max(10, 'Le nombre d\'adultes ne peut pas dépasser 10')
            .required(),
    }),
    isChildren: yup.boolean().optional(),
    childrenNumber: yup.number().optional().when('isChildren', {
        is: true,
        then: schema => schema
            .required("Veuillez renseigner un nombre d'enfant(s)")
            .min(1, "Au moins un enfant"),
    }),
});

export type ChristmasInvitationFormSchema = yup.InferType<typeof christmasInvitationFormSchema>;

