import { Package } from './Package';

export class Driver {
    _id: string;
    driverId: string;
    driverName: string;
    driverDepartment: string;
    driverLicense: string;
    driverIsActive: boolean;
    driverCreatedAt: string;
    assignedPackages: Package[];
  
    constructor() {
      this._id = '';
      this.driverId = '';
      this.driverName = '';
      this.driverDepartment = '';
      this.driverLicense = '';
      this.driverIsActive = false;
      this.driverCreatedAt = '';
      this.assignedPackages = [];
    }
}

export class DriverUpdateDetails implements Pick<Driver, 'driverId' | 'driverDepartment' | 'driverLicense'> {
    driverId: string;
    driverDepartment: string;
    driverLicense: string;

    constructor() {
        this.driverId = '';
        this.driverDepartment = '';
        this.driverLicense = '';
    }
}