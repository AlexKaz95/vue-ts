export type CategoryId = string;
export type RecordId = string;
export type Date = number;

export interface ListId<T> {
    _currentId: T;
    getId(): T;
    generate(): T;
}

export interface List<T, TID> {
    nextId: ListId<TID>;
    add(data: T): boolean;
    update(data: T, id: TID): T;
    delete(id: TID): boolean;
    get(id: TID): T;
}

export type Record = {
    readonly id: RecordId;
    readonly date: Date;
    title: string;
    spent: number;
    categoryId?: CategoryId;
    description?: string;
}

export interface RecordList extends List<Record, RecordId> {}

export type Category = {
    readonly id: CategoryId;
    name: string;
    limit: number;
}

export type CategoryOptions = keyof Category;

export type CategoryList = {
    [key: CategoryId]: Category
} 

export type User = {
    name: string;
}

