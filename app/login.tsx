import '../global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'components/nativewindui/Button';
import { COLORS } from 'theme/colors';
import { Input } from '../components/ui/input';

export default function Login() {
    return (
        <View className="flex-1 p-8 justify-center items-center bg-white">
            <Text className="font-extrabold text-4xl mb-8">Login</Text>
            <View className="w-11/12 mb-4 gap-2">
                <View className="rounded-lg px-4 mx-4 flex">
                    <TextInput
                        className="w-full h-14"
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View className="rounded-lg px-4 mx-4 flex">
                    <TextInput
                        className="w-full h-14"
                        placeholder="Password"
                        secureTextEntry
                        autoCapitalize="none"
                    />
                </View>


                <Button
                    variant="primary"
                    className="w-full h-14 bg-[#00FF99]"
                    onPress={() => alert('Login Button Pressed!')}
                >
                    <View className="flex-1 justify-center items-center">
                        <Text className="font-medium text-white">Sign In</Text>
                    </View>
                </Button>
            </View>
            <Link href="/" className="mt-8 text-center text-sm text-blue-600 font-medium">
                Back to Home
            </Link>
            <StatusBar style="auto" />
        </View>
    );
}