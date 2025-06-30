import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'components/nativewindui/Button';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGEKEY = 'counter_value';

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const saved = await AsyncStorage.getItem(STORAGEKEY);
                if (saved !== null) {
                    setCount(parseInt(saved, 10));
                }
            } catch (e) {
                console.warn('Failed to load count:', e);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                await AsyncStorage.setItem(STORAGEKEY, count.toString());
            } catch (e) {
                console.warn('Failed to save count:', e);
            }
        })();
    }, [count]);

    const plusOne = () => setCount((c) => c + 1);
    const minusOne = () => setCount((c) => c - 1);
    const reset = () => setCount(0);

    return (
        <View className="flex-1 p-6 justify-center bg-gray-50">
            <Text className="text-3xl font-extrabold text-center mb-6 text-gray-800">
                Command Center
            </Text>
            <View className="w-full max-w-72 mx-auto p-6 space-y-6 gap-6">
                <View className="flex-row justify-between items-center">
                    <Button onPress={minusOne} className="px-5 py-3 bg-red-600 rounded-lg shadow">
                        <Text className="text-white text-2xl font-bold">–</Text>
                    </Button>
                    <Text className="text-2xl font-semibold text-gray-700">{count}</Text>
                    <Button onPress={plusOne} className="px-5 py-3 bg-green-600 rounded-lg shadow">
                        <Text className="text-white text-2xl font-bold">＋</Text>
                    </Button>
                </View>
                <Button onPress={reset} className="w-full py-3 bg-blue-600 rounded-lg shadow">
                    <Text className="text-white text-lg font-medium text-center">
                        Zurücksetzen
                    </Text>
                </Button>
            </View>
            <Link href="/" className="mt-8 text-center text-sm text-blue-600 font-medium">
                Back to Home
            </Link>
            <StatusBar style="auto" />
        </View>
    );
}
