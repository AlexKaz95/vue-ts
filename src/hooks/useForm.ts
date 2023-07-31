import { reactive, ref, watch } from "vue";
import { useField } from "./useField";

export type UseFormOptions = {
    [key: string]: {
        value: any;
        validators: Function[];
    }
}

export type FormReactive = {
    [key: string]: any
}

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