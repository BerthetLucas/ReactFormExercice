import {Controller, useFormContext, useWatch} from "react-hook-form";
import {Toggle} from "../Toggle.tsx";
import {ChistmasInvitationFormSchema} from "../../schema/form-schema.ts";

export const ChildrenToggle = () => {
    const {control} = useFormContext<ChistmasInvitationFormSchema>()
    const adultFirstName = useWatch({control, name: 'adulteFirstName'})

    if (!adultFirstName) {
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