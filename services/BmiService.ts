// services/BmiService.ts

export default class BmiService {
    /**
     * @param weight Gewicht in Kilogramm
     * @param height Größe in Zentimetern
     * @returns Ein Objekt mit `bmi` (als string mit 2 Dezimalstellen) und `classification`
     */
    static calculate(
        weight: number,
        height: number
    ): { bmi: string; classification: string } {
        if (weight <= 0 || height <= 0) {
            return { bmi: 'Invalid input', classification: 'Invalid input' };
        }
        const bmiVal = (weight / ((height / 100) ** 2)).toFixed(2);
        const classification = BmiService.classify(parseFloat(bmiVal));
        return { bmi: bmiVal, classification };
    }

    /**
     * Gibt die WHO-BMI-Klassifizierung zurück.
     * - <16.0: Severe thinness  
     * - 16.0–16.9: Moderate thinness  
     * - 17.0–18.4: Mild thinness  
     * - 18.5–24.9: Normal  
     * - 25.0–29.9: Pre-obese  
     * - 30.0–34.9: Obese Class I  
     * - 35.0–39.9: Obese Class II  
     * - ≥40.0: Obese Class III  
     */
    private static classify(bmi: number): string {
        if (bmi < 16) return 'Severe thinness';
        if (bmi < 17) return 'Moderate thinness';
        if (bmi < 18.5) return 'Mild thinness';
        if (bmi < 25) return 'Normal';
        if (bmi < 30) return 'Pre-obese';
        if (bmi < 35) return 'Obese Class I';
        if (bmi < 40) return 'Obese Class II';
        return 'Obese Class III';
    }
}
