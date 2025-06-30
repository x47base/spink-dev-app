import '../global.css';
import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Button } from 'components/nativewindui/Button';
import { COLORS } from 'theme/colors';

export default function App() {
  return (
    <>
      <View className="p-6 flex w-full h-1/2 self-center items-center position-relative justify-center">
        <Link href="/center">
          <Image
            source={require('../assets/icon.png')}
            className="w-36 h-36 rounded-full"
            resizeMode="contain"
          />
        </Link>
      </View>
      <View className="p-8 flex w-full h-1/2 self-center items-center position-relative">
        <Text className="font-extrabold text-4xl mb-8 mt-16">Spink Development</Text>
        <Button variant="primary" className="w-11/12 h-14 bg-[#00FF99] mb-4" onPress={() => alert('E-Mail Button Pressed!')}>
          <Image
            source={require('../assets/icon.png')}
            className="w-7 h-7 rounded-lg"
            resizeMode="contain"
          />
          <View className="flex-1 justify-center items-center">
            <Text className="font-medium">Continue with E-Mail</Text>
          </View>
        </Button>
        <Button variant="secondary" className="w-11/12 h-14 mb-4" onPress={() => alert('Google Button Pressed!')}>
          <Image
            source={require('../assets/google.png')}
            className="w-7 h-7 rounded-xl"
            resizeMode="contain"
          />
          <View className="flex-1 justify-center items-center">
            <Text className="font-medium">Continue with Google</Text>
          </View>
        </Button>
        <Button variant="secondary" className="w-11/12 h-14 mb-2" onPress={() => alert('Apple Button Pressed!')}>
          <Image
            source={require('../assets/apple.png')}
            className="w-7 h-7 rounded-xl"
            resizeMode="contain"
          />
          <View className="flex-1 justify-center items-center">
            <Text className="font-medium">Continue with Apple</Text>
          </View>
        </Button>
        <Link href="/login" className="mt-4 text-md text-black font-semibold">
          Login
        </Link>
      </View>
      <StatusBar style="auto" />
    </>
  );
}
