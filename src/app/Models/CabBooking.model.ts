export interface CabBooking{
    cabId: string;
    employeeId: string;
    time: Date;
    pickUp: string;
    dropOff: string;
    monthlyRequest: boolean;
}