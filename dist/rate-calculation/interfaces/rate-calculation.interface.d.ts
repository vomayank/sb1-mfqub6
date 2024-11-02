export interface IRateCalculation {
    totalRate: number;
    breakdown: {
        baseRate: number;
        weightCharge: number;
        distanceCharge: number;
    };
}
export interface IRateCalculator {
    calculateRate(weight: number, distance: number): IRateCalculation;
}
export interface IRateCalculationService {
    calculateShippingRate(weight: number, distance: number): IRateCalculation;
}
