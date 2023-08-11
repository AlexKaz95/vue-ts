import { reactive, ref } from "vue";
import { UseFieldOption, FieldErrors } from "../types";

export const useField = (init: UseFieldOption) => {
    const value = ref(init.value);
    const valid = ref(true);
    const error = reactive({}) as FieldErrors;

    const validate = (val = value.value) => {
        valid.value = true;
        if (init.disabled) {
            for (const fn of init.validators){
                error[fn.name] = '';
            };
            return;
        };
        for (const fn of init.validators){
            const errorMessage = fn(val);
            const isValid = !errorMessage;
            error[fn.name] = ref(errorMessage);
            valid.value = valid.value && isValid
        };
    }

    return {
        value,
        valid,
        error,
        validate
    };
}