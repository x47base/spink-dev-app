class BmiService {
    static calculate(weight: number, height: number): string {
        if (weight <= 0 || height <= 0) {
            return 'Invalid input';
        }
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        return `${bmi}`;
    }
}

export default BmiService;
