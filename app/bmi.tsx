import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'components/nativewindui/Button';
import { useState, useEffect } from 'react';

export default function Counter() {
    const [showBMI, setShowBMI] = useState(false);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    useEffect(() => {
        if (weight > 0 && height > 0) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
            setBmi(bmi);
        }
    }, [weight, height]);

    const reset = () => {
        setWeight(0);
        setHeight(0);
        setBmi(0);
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
                            {`Your BMI: ${bmi}`}
                        </Text>
                        <Button onPress={() => setShowBMI(false)} className="w-full py-3 bg-blue-600 rounded-lg shadow">
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
                                onChangeText={text => setWeight(parseFloat(text) || 0)}
                            />
                        </View>
                        <View className="rounded-lg px-4 mx-4">
                            <TextInput
                                className="w-full h-14"
                                placeholder="Height (cm)"
                                keyboardType="numeric"
                                onChangeText={text => setHeight(parseFloat(text) || 0)}
                            />
                        </View>
                        <Button variant="primary" className="w-full py-3 bg-[#00FF99] rounded-lg shadow" onPress={() => setShowBMI(true)}>
                            <Text className="text-white text-lg font-medium text-center">Calculate BMI</Text>                          
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
