import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import { LineChart } from 'react-native-chart-kit';

export default function SensorApp() {
    const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
    const [history, setHistory] = useState<{ x: number; y: number; z: number }[]>([]);
    const [subscription, setSubscription] = useState<any>(null);
    const screenWidth = Dimensions.get('window').width;

    const _subscribe = () => {
        const sub = Accelerometer.addListener(({ x, y, z }) => {
            setData({ x, y, z });
            setHistory(prev => {
                const next = [...prev, { x, y, z }];
                const maxPoints = 50;
                return next.length > maxPoints ? next.slice(next.length - maxPoints) : next;
            });
        });
        setSubscription(sub);
    };

    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };

    useEffect(() => {
        Accelerometer.setUpdateInterval(128);
        _subscribe();
        return () => _unsubscribe();
    }, []);

    return (
        <View className="flex-1 p-6 justify-center bg-gray-50">
            <Text className="text-3xl font-extrabold text-center mb-6 text-gray-800">
                Sensor App
            </Text>

            <View className="w-full max-w-72 mx-auto p-6 space-y-6 gap-6">
                <Text>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
                <Text>{`x: ${(x * 360).toFixed(0)}°`}</Text>
                <Text>{`y: ${(y * 360).toFixed(0)}°`}</Text>
                <Text>{`z: ${(z * 360).toFixed(0)}°`}</Text>
            </View>

            {history.length > 1 && (
                <LineChart
                    data={{
                        labels: history.map((_, i) => i.toString()),
                        datasets: [
                            { data: history.map(h => h.x), color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, strokeWidth: 2 },
                            { data: history.map(h => h.y), color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, strokeWidth: 2 },
                            { data: history.map(h => h.z), color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, strokeWidth: 2 },
                        ],
                    }}
                    width={screenWidth - 32}
                    height={220}
                    chartConfig={{
                        backgroundGradientFrom: '#ffffff',
                        backgroundGradientTo: '#ffffff',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    style={{ marginVertical: 8, borderRadius: 8 }}
                    bezier
                />
            )}

            <Link href="/" className="mt-8 text-center text-sm text-blue-600">
                Back to Home
            </Link>
            <StatusBar style="auto" />
        </View>
    );
}
