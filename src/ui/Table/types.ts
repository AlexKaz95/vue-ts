export type TableOptions<T, K> = {
    id: T;
    title: string;
    sorted?: boolean;
    getField?: (field: K) => string;
    sortUp?: (list: {[key: string]: K}) => K[];
    sortDown?: (list: {[key: string]: K}) => K[];
}