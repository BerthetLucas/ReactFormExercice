import './App.css'
import {Toggle} from "./components/Toggle.tsx";
import {DatePicker} from "./components/DatePicker.tsx";
import Counter from "./components/Counter.tsx";
import {Controller, FormProvider, SubmitHandler} from "react-hook-form";
import {useChristmasInvitationFormSchema} from "./hooks/useFormSchema.ts";
import {Button} from "flowbite-react";
import {ChistmasInvitationFormSchema} from "./schema/form-schema.ts";
import {FirstName} from "./components/FirstName.tsx";

function App() {
    const methods = useChristmasInvitationFormSchema();
    const {handleSubmit, control} = methods;

    const onSubmit: SubmitHandler<ChistmasInvitationFormSchema> = (data) => {
        console.log(data);
    }

    return (
        <main>
            <FormProvider {...methods}>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="isComingForChristmas"
                        control={control}
                        render={({field}) => (
                            <Toggle
                                label="Je viens pour Noël"
                                checked={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    <fieldset className="flex items-center gap-5">
                        <Controller
                            name="startDate"
                            control={control}
                            render={({field}) => (
                                <DatePicker
                                    label="de"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <Controller
                            name="endDate"
                            control={control}
                            render={({field}) => (
                                <DatePicker
                                    label="de"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                    </fieldset>
                    <Controller name="adultsNumber" control={control} render={({field}) => (
                        <Counter
                            min={0}
                            max={10}
                            step={1}
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}/>
                    <FirstName/>
                    <Button type="submit" size="lg" className="w-fit">Confirmer les dates</Button>
                </form>
            </FormProvider>
        </main>
    )
}

export default App
