import {Controller, useFormContext, useWatch} from "react-hook-form";
import Counter from "../Counter.tsx";
import {ChistmasInvitationFormSchema} from "../../schema/form-schema.ts";

export const ChildrenCounter = () => {
    const {control} = useFormContext<ChistmasInvitationFormSchema>()
    const isChildren = useWatch({control, name: 'isChildren'})

    if (!isChildren) {
        return null;
    }

    return (
        <Controller name="childrenNumber" control={control} render={({field}) => (
            <Counter
                min={0}
                max={10}
                step={1}
                value={field.value}
                onChange={field.onChange}
                label="Nombre d'enfants"
            />
        )}/>
    )
}