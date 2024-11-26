export interface AvailableCabs {
    cabId: string;
    cabName: string;
    driverName: string;
    totalCapacity: number;
    remainingCapacity: number;
    departureTime: Date | null;
}