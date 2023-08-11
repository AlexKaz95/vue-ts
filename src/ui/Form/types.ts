export type InitConfig = {
    value: any;
    validators: ((value: any) => boolean)[]
}

export type UseFormOptions = {
    [key: string]: UseFieldOption
}

export type FormReactive = {
    [key: string]: any
}

export  type UseFieldOption = {
    value: any;
    validators: Function[];
    disabled?: boolean;
}

export type FieldErrors = {
    [key: string]: string;
}