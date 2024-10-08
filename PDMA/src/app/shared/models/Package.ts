import { Driver } from './Driver';

export class Package {
    _id: string;
    packageId: string;
    packageTitle: string;
    packageDescription: string;
    packageDestination: string;
    packageWeight: number;
    driverId: Driver;
    packageIsAllocated: boolean;
    packageCreatedAt: string;
  
    constructor() {
      this._id = '';
      this.packageId = '';
      this.packageTitle = '';
      this.packageDescription = '';
      this.packageDestination = '';
      this.packageWeight = 0;
      this.driverId = new Driver();
      this.packageIsAllocated = false;
      this.packageCreatedAt = '';
    }
}

export class PackageUpdateDetails implements Pick<Package, 'packageId' | 'packageDestination'> {
    packageId: string;
    packageDestination: string;

    constructor() {
        this.packageId = '';
        this.packageDestination = '';
    }
}