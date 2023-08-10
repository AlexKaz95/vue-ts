export function required(val: any): string{
    return !!val ? '' : 'This field is required.';
}

export function createMinLenght(min: number): Function{
    return function minLength(val: string): string{
        return val.length > min ? '' : `This field must be over than ${min}. Now is ${val.length}`;
    } 
}

export function createOverThan(min: number): Function{
    return function overThan(val: number): string{
        return val > min  ? '' : `This number must be over than ${min}`;
    }
}

export function emailValidator(val: string): string{
    const match = String(val)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    return match && match[0] === val ? '' : 'Not valid email'
}