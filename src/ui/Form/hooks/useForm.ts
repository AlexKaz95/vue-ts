import { reactive, ref, watch } from "vue";
import { useField } from "./useField";
import { UseFormOptions, FormReactive } from "../types";

export const useForm = (init: UseFormOptions) => {
    const form = reactive({}) as FormReactive;
    const valid = ref(false);

    for (const [key, config] of Object.entries(init)){
        form[key] = useField(config);
        watch(() => form[key].value, () => {
            const disabledFieldIds = Object.values(form).map((field) => field.disabledId);
            valid.value = Object.values(form).reduce((acc, field) => {
                if (disabledFieldIds.includes(field.id)) return acc
                return acc && field.valid
            }, true)
            
        });
    };

    return {valid, form};
};