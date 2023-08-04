import { CategoryId } from "../category/types";

export type RecordId = string;

export type Record = {
    readonly id: RecordId;
    readonly date: Date;
    title: string;
    spent: number;
    categoryId?: CategoryId;
    description?: string;
}

export type RecordList = {
    [key: RecordId]: Record
}