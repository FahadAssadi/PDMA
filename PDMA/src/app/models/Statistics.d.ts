export class Statistics {
    driverCount: number;
    packageCount: number;
    insertCount: number;
    retrieveCount: number;
    updateCount: number;
    deleteCount: number;

    constructor() {
        this.driverCount = 0;
        this.packageCount = 0;
        this.insertCount = 0;
        this.retrieveCount = 0;
        this.updateCount = 0;
        this.deleteCount = 0;
    }
}