import { reactive, ref, watch } from "vue";

export  type UseFieldOption = {
    value: any;
    validators: Function[];
}

export type FieldErrors = {
    [key: string]: string;
}

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