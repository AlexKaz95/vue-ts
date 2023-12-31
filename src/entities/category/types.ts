export type CategoryId = string;

export type Category = {
    readonly id: CategoryId;
    name: string;
    limit?: number;
    unlimited: boolean;
}

export type CategoryOptions = keyof Category;

export type CategoryList = {
    [key: CategoryId]: Category
} 