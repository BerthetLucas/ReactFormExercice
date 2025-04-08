import {Controller, FormProvider, SubmitHandler} from "react-hook-form";
import {Toggle} from "./Toggle.tsx";
import {StartDateInput} from "./DateFields/StartDateInput.tsx";
import {EndDateInput} from "./DateFields/EndDateInput.tsx";
import Counter from "./Counter.tsx";
import {FirstName} from "./FirstName.tsx";
import {ChildrenToggle} from "./ChildrenFields/ChildrenToggle.tsx";
import {ChildrenCounter} from "./ChildrenFields/ChildrenCounter.tsx";
import {Alert, Button} from "flowbite-react";
import {useChristmasInvitationFormSchema} from "../hooks/useFormSchema.ts";
import {ChristmasInvitationFormSchema} from "../schema/form-schema.ts";
import {useNavigate} from "react-router";
import {MainMotion} from "./MotionComponent/MainMotion.tsx";

export const Form = () => {
    const methods = useChristmasInvitationFormSchema();
    const {handleSubmit, control, formState: {isSubmitSuccessful}} = methods;
    const router = useNavigate();

    const onSubmit: SubmitHandler<ChristmasInvitationFormSchema | Partial<ChristmasInvitationFormSchema>> = (data) => {
        console.log(data);
        setTimeout(() => {
            router('/');
        }, 2000);
    };

    return (
        <MainMotion className="flex flex-col gap-10" delay={0.1}>
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
        </MainMotion>
    )
}