import { reactive, ref, watch } from "vue";
import { UseFieldOption, FieldErrors } from "../types";

export const useField = (init: UseFieldOption) => {
    const value = ref(init.value);
    const valid = ref(true);
    const error = reactive({}) as FieldErrors;

    const validate = (val = value.value) => {
        valid.value = true;
        for (const fn of init.validators){
            const errorMessage = fn(val);
            const isValid = !errorMessage;
            error[fn.name] = ref(errorMessage);
            valid.value = valid.value && isValid
        };
    }

    watch(value, (newVal) => {
        validate(newVal);
    }, {immediate: false})

    return {
        value,
        valid,
        error,
        validate
    };
}