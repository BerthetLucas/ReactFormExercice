import {Controller, useFormContext, useWatch} from "react-hook-form";
import {Toggle} from "../Toggle.tsx";
import {ChristmasInvitationFormSchema} from "../../schema/form-schema.ts";

export const ChildrenToggle = () => {
    const {control} = useFormContext<ChristmasInvitationFormSchema>()
    const adultFirstName = useWatch({control, name: 'adulteFirstName'})
    const adultNumber = useWatch({control, name: "adultsNumber"})

    if (!adultFirstName || adultNumber === 0) {
        return null;
    }

    return (
        <Controller
            name="isChildren"
            control={control}
            render={({field}) => (
                <Toggle
                    label="J'ai des pitchounes"
                    checked={field.value ?? false}
                    onChange={field.onChange}
                />
            )}
        />
    )
}