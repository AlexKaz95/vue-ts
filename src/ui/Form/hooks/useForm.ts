import { reactive, ref, watch } from "vue";
import { useField } from "./useField";
import { UseFormOptions, FormReactive } from "../types";

export const useForm = (init: UseFormOptions) => {
    const form = reactive({}) as FormReactive;
    const valid = ref(true);

    for (const [key, config] of Object.entries(init)){
        form[key] = useField(config);
        watch(() => form[key].valid, (newVal) => {
            valid.value = true;
            valid.value = valid.value && newVal
        });
    };

    return {valid, form};
};