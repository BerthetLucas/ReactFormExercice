import {Toggle} from "./components/Toggle.tsx";
import Counter from "./components/Counter.tsx";
import {Controller, FormProvider, SubmitHandler} from "react-hook-form";
import {useChristmasInvitationFormSchema} from "./hooks/useFormSchema.ts";
import {Alert, Button} from "flowbite-react";
import {ChristmasInvitationFormSchema} from "./schema/form-schema.ts";
import {FirstName} from "./components/FirstName.tsx";
import {ChildrenToggle} from "./components/ChildrenFields/ChildrenToggle.tsx";
import {ChildrenCounter} from "./components/ChildrenFields/ChildrenCounter.tsx";
import {StartDateInput} from "./components/DateFields/StartDateInput.tsx";
import {EndDateInput} from "./components/DateFields/EndDateInput.tsx";

function App() {
    const methods = useChristmasInvitationFormSchema();
    const {handleSubmit, control, formState: {isSubmitSuccessful}} = methods;

    const onSubmit: SubmitHandler<ChristmasInvitationFormSchema | Partial<ChristmasInvitationFormSchema>> = (data) => {
        console.log(data);
    };

    return (
        <main className="flex flex-col gap-10">
            <section>
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
                            <StartDateInput/>
                            <EndDateInput/>
                        </fieldset>
                        <Controller name="adultsNumber" control={control} render={({field}) => (
                            <Counter
                                min={0}
                                max={10}
                                step={1}
                                value={field.value}
                                onChange={field.onChange}
                                label="Nombre d'adultes"
                            />
                        )}/>
                        <FirstName/>
                        <ChildrenToggle/>
                        <ChildrenCounter/>
                        <Button type="submit" size="lg"
                                className="w-fit">{isSubmitSuccessful ? "Invitation envoyée !" : "Confirmer les dates"}</Button>
                    </form>
                </FormProvider>
            </section>

            <section className="flex items-center justify-center">
                {isSubmitSuccessful && <Alert color="green" className="w-fit">Invitation envoyée !</Alert>}
            </section>
        </main>
    )
}

export default App
