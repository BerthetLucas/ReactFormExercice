import {Controller, useFormContext, useWatch} from "react-hook-form";
import {ChistmasInvitationFormSchema} from "../schema/form-schema.ts";
import {TextInput} from "flowbite-react";

export const FirstName = () => {
    const {control} = useFormContext<ChistmasInvitationFormSchema>()
    const adultsNumber = useWatch({control, name: 'adultsNumber'})

    if (!adultsNumber) {
        return null;
    }

    return (
        <>
            {Array.from({length: adultsNumber}, (_, i) => (
                <div key={i}>
                    <Controller
                        name={`adulteFirstName.${i}`}
                        control={control}
                        render={({field}) => (
                            <TextInput
                                {...field}
                                placeholder={`Prénom ${i + 1}`}
                            />
                        )}
                    />
                </div>
            ))}
        </>
    );

}