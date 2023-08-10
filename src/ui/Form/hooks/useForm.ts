import { reactive, ref, watch } from "vue";
import { useField } from "./useField";
import { UseFormOptions, FormReactive } from "../types";

export const useForm = (init: UseFormOptions) => {
    const form = reactive({}) as FormReactive;
    const valid = ref(true);
    const validate = () => {
        valid.value = Object.values(form).reduce((acc, field) => {
            field.validate();
            return acc && field.valid
        }, true);
    }

    for (const [key, config] of Object.entries(init)){
        form[key] = useField(config);

        watch(() => form[key].value, (newVal) => {
            form[key].validate(newVal);
            valid.value = Object.values(form).reduce((acc, field) => acc && field.valid, true);
        });
    };

    return {valid, form, validate};
};