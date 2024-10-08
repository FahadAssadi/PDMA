export type TableHeader = {
    label: string;
    key: string;
}

export type TableAction = {
    label: string;
    function: (row: any) => void;
}