import {DatePicker} from "../DatePicker.tsx";
import {Controller, useFormContext, useWatch} from "react-hook-form";
import {ChristmasInvitationFormSchema} from "../../schema/form-schema.ts";

export const EndDateInput = () => {

    const {control} = useFormContext<ChristmasInvitationFormSchema>()
    const isComingForChristmas = useWatch({control, name: "isComingForChristmas"})

    return (
        <Controller
            name="endDate"
            control={control}
            render={({field, fieldState}) => {
                // This constant allow to pass a string value for the input display
                // while the form is recording a Date object though the onChange()
                const dateString = field.value instanceof Date
                    ? field.value.toISOString().split('T')[0]
                    : ""

                return (
                    <div className="flex flex-col gap-2 items-center">
                        <DatePicker
                            disabled={!isComingForChristmas}
                            label="a"
                            value={dateString}
                            onChange={(stringValue) => {
                                field.onChange(stringValue ? new Date(stringValue) : null);
                            }}
                        />
                        {fieldState.error &&
                            <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
                    </div>
                )
            }
            }
        />
    )
}