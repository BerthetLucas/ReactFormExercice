import {TextInput} from "flowbite-react";
import {useFormContext, useWatch} from "react-hook-form";
import {ChistmasInvitationFormSchema} from "../schema/form-schema.ts";

export const FirstName = () => {
    const {control} = useFormContext<ChistmasInvitationFormSchema>()
    const adultsNumber = useWatch({control, name: 'adultsNumber'})

    if (!adultsNumber) {
        return null;
    }

    return (
        <TextInput placeholder="Prénom"/>
    )
}