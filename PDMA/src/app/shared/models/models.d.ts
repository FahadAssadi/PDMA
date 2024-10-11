export type TableAction = {
    label: string;
    style: string;
    function: (row: any) => void;
}