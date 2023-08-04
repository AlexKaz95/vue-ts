import { reactive, ref, watch } from "vue";
import { UseFieldOption, FieldErrors } from "../types";

export const useField = (init: UseFieldOption) => {
    const value = ref(init.value);
    const valid = ref(true);
    const error = reactive({}) as FieldErrors;

    watch(value, (newVal) => {
        valid.value = true;
        for (const fn of init.validators){
            const errorMessage = fn(newVal);
            const isValid = !errorMessage;
            error[fn.name] = ref(errorMessage);
            valid.value = valid.value && isValid
        };
    }, {immediate: false})


    return {
        value,
        valid,
        error,
    };
}