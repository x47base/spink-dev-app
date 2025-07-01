import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'components/nativewindui/Button';
import { useState, useEffect } from 'react';
import BmiService from '../services/BmiService';

export default function BmiCalculator() {
    const [showBMI, setShowBMI] = useState<boolean>(false);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState<string>('');
    const [classification, setClassification] = useState<string>('');

    useEffect(() => {
        if (weight > 0 && height > 0) {
            const result = BmiService.calculate(weight, height);
            setBmi(result.bmi);
            setClassification(result.classification);
        }
    }, [weight, height]);

    const reset = () => {
        setWeight(0);
        setHeight(0);
        setBmi('');
        setClassification('');
        setShowBMI(false);
    };

    return (
        <View className="flex-1 p-6 justify-center bg-gray-50">
            <Text className="text-3xl font-extrabold text-center mb-6 text-gray-800">
                BMI Calculator
            </Text>

            <View className="w-full max-w-72 mx-auto p-6 space-y-6 gap-6">
                {showBMI ? (
                    <View className="flex items-center">
                        <Text className="text-2xl font-semibold text-gray-700 mb-4">
                            {`Your BMI: ${bmi} (${classification})`}
                        </Text>
                        <Button
                            onPress={reset}
                            className="w-full py-3 bg-blue-600 rounded-lg shadow"
                        >
                            <Text className="text-white text-lg font-medium text-center">
                                Zurück
                            </Text>
                        </Button>
                    </View>
                ) : (
                    <>
                        <View className="rounded-lg px-4 mx-4">
                            <TextInput
                                className="w-full h-14"
                                placeholder="Weight (kg)"
                                keyboardType="numeric"
                                value={weight > 0 ? String(weight) : ''}
                                onChangeText={text => setWeight(parseFloat(text) || 0)}
                            />
                        </View>
                        <View className="rounded-lg px-4 mx-4">
                            <TextInput
                                className="w-full h-14"
                                placeholder="Height (cm)"
                                keyboardType="numeric"
                                value={height > 0 ? String(height) : ''}
                                onChangeText={text => setHeight(parseFloat(text) || 0)}
                            />
                        </View>
                        <Button
                            variant="primary"
                            className="w-full py-3 bg-[#00FF99] rounded-lg shadow"
                            onPress={() => setShowBMI(true)}
                        >
                            <Text className="text-white text-lg font-medium text-center">
                                Calculate BMI
                            </Text>
                        </Button>
                    </>
                )}
            </View>

            <Link href="/" className="mt-8 text-center text-sm text-blue-600">
                Back to Home
            </Link>
            <StatusBar style="auto" />
        </View>
    );
}
