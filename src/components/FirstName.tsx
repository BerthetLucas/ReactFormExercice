import {Controller, useFormContext, useWatch} from "react-hook-form";
import {TextInput} from "flowbite-react";
import {ChristmasInvitationFormSchema} from "../schema/form-schema.ts";
import {useEffect} from "react";

export const FirstName = () => {
    const {control, getValues, setValue} = useFormContext<ChristmasInvitationFormSchema>()
    const adultsNumber = useWatch({control, name: 'adultsNumber'})

    useEffect(() => {
        const currentFirstNames: string[] = getValues("adulteFirstName") || [];
        if (adultsNumber !== undefined && currentFirstNames.length > adultsNumber) {
            const newFirstNames = currentFirstNames.slice(0, adultsNumber);
            setValue("adulteFirstName", newFirstNames);
        }
    }, [adultsNumber, setValue, getValues]);

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
                        render={({field, fieldState}) => (
                            <div className="flex flex-col gap-2 items-center">
                                <TextInput
                                    {...field}
                                    placeholder={`Prénom ${i + 1}`}
                                />
                                {fieldState.error &&
                                    <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
                            </div>
                        )}
                    />
                </div>
            ))}
        </>
    );
}



