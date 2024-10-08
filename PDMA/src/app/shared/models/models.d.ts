export type TableAction = {
    label: string;
    function: (row: any) => void;
}