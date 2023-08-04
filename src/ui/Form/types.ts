export type InitConfig = {
    value: any;
    validators: ((value: any) => boolean)[]
}

export type UseFormOptions = {
    [key: string]: {
        value: any;
        validators: Function[];
    }
}

export type FormReactive = {
    [key: string]: any
}

export  type UseFieldOption = {
    value: any;
    validators: Function[];
}

export type FieldErrors = {
    [key: string]: string;
}