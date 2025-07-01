import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'components/nativewindui/Button';

const links = [
    { name: 'Home', url: '/' },
    { name: 'Login', url: '/login' },
    { name: 'Counter', url: '/counter' },
    { name: 'BMI', url: '/bmi' },
];

export default function Counter() {
    return (
        <View className="flex-1 p-8 justify-center items-center bg-white">
            <Text className="font-extrabold text-4xl mb-8">Command Center</Text>

            <View className="w-11/12 mb-4 space-y-2 gap-2">
                {links.map(({ name, url }) => (
                    // Option A: Plain text link
                    <Link
                        key={url}
                        href={url}
                        className="px-4 py-3 bg-gray-100 rounded-lg"
                    >
                        <Text className="text-lg font-medium text-black">{name}</Text>
                    </Link>

                    // Option B: Using your Button component
                    // <Button key={url} onPress={() => router.push(url)}>
                    //   {name}
                    // </Button>
                ))}
            </View>

            <Link href="/" className="mt-8 text-center text-sm text-blue-600 font-medium">
                Back to Home
            </Link>

            <StatusBar style="auto" />
        </View>
    );
}
