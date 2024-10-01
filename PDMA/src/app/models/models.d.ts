export type UserDetails = {
    username: string;
    password: string;
}

export type Driver = {
    name: string;
    department: string;
    license: string;
    isActive: boolean;
}

export type Package = {
    title: string;
    description: string;
    weight: number;
    driverId: string;
    isAllocated: boolean;
}