export type TableOptions<T, K> = {
    id: T;
    title: string;
    sorted?: boolean;
    getField?: (field: K) => string;
}