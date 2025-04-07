import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {ChistmasInvitationFormSchema, chistmasInvitationFormSchema} from "../schema/form-schema.ts";

export const useChristmasInvitationFormSchema = () => {
    return useForm<ChistmasInvitationFormSchema>({
        resolver: yupResolver(chistmasInvitationFormSchema)
    });
}