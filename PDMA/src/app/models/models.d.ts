export type UserDetails = {
    username: string;
    password: string;
}

export type Driver = {
    _id: string;
    driverId: string;
    driverName: string;
    driverDepartment: string;
    driverLicense: string;
    driverIsActive: boolean;
}

export type Package = {
    _id: string;
    packageTitle: string;
    packageDescription: string;
    packageDestination: string;
    packageWeight: number;
    driverId: string;
    packageIsAllocated: boolean;
}