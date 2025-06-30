import { Platform } from 'react-native';

const IOS_SYSTEM_COLORS = {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    light: {
        grey6: 'rgb(250, 251, 251)',
        grey5: 'rgb(240, 241, 240)',
        grey4: 'rgb(229, 231, 230)',
        grey3: 'rgb(213, 217, 215)',
        grey2: 'rgb(181, 188, 185)',
        grey: 'rgb(159, 168, 165)',
        background: 'rgb(249, 251, 250)',
        foreground: 'rgb(1, 1, 1)',
        root: 'rgb(249, 251, 250)',
        card: 'rgb(249, 251, 250)',
        destructive: 'rgb(255, 56, 43)',
        primary: 'rgb(0, 255, 153)',
    },
    dark: {
        grey6: 'rgb(28, 31, 30)',
        grey5: 'rgb(47, 52, 50)',
        grey4: 'rgb(59, 65, 63)',
        grey3: 'rgb(79, 87, 84)',
        grey2: 'rgb(120, 132, 127)',
        grey: 'rgb(160, 169, 165)',
        background: 'rgb(0, 0, 0)',
        foreground: 'rgb(253, 255, 254)',
        root: 'rgb(0, 0, 0)',
        card: 'rgb(0, 0, 0)',
        destructive: 'rgb(254, 67, 54)',
        primary: 'rgb(0, 255, 153)',
    },
} as const;

const ANDROID_COLORS = {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    light: {
        grey6: 'rgb(250, 252, 255)',
        grey5: 'rgb(243, 247, 251)',
        grey4: 'rgb(236, 242, 248)',
        grey3: 'rgb(233, 239, 247)',
        grey2: 'rgb(229, 237, 245)',
        grey: 'rgb(226, 234, 243)',
        background: 'rgb(250, 252, 255)',
        foreground: 'rgb(27, 28, 29)',
        root: 'rgb(250, 252, 255)',
        card: 'rgb(250, 252, 255)',
        destructive: 'rgb(186, 26, 26)',
        primary: 'rgb(0, 112, 233)',
    },
    dark: {
        grey6: 'rgb(25, 30, 36)',
        grey5: 'rgb(31, 38, 45)',
        grey4: 'rgb(35, 43, 52)',
        grey3: 'rgb(38, 48, 59)',
        grey2: 'rgb(40, 51, 62)',
        grey: 'rgb(44, 56, 68)',
        background: 'rgb(24, 28, 32)',
        foreground: 'rgb(221, 227, 233)',
        root: 'rgb(24, 28, 32)',
        card: 'rgb(24, 28, 32)',
        destructive: 'rgb(147, 0, 10)',
        primary: 'rgb(0, 69, 148)',
    },
} as const;

const WEB_COLORS = {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    light: {
        grey6: 'rgb(250, 252, 255)',
        grey5: 'rgb(243, 247, 251)',
        grey4: 'rgb(236, 242, 248)',
        grey3: 'rgb(233, 239, 247)',
        grey2: 'rgb(229, 237, 245)',
        grey: 'rgb(226, 234, 243)',
        background: 'rgb(250, 252, 255)',
        foreground: 'rgb(27, 28, 29)',
        root: 'rgb(250, 252, 255)',
        card: 'rgb(250, 252, 255)',
        destructive: 'rgb(186, 26, 26)',
        primary: 'rgb(0, 112, 233)',
    },
    dark: {
        grey6: 'rgb(25, 30, 36)',
        grey5: 'rgb(31, 38, 45)',
        grey4: 'rgb(35, 43, 52)',
        grey3: 'rgb(38, 48, 59)',
        grey2: 'rgb(40, 51, 62)',
        grey: 'rgb(44, 56, 68)',
        background: 'rgb(24, 28, 32)',
        foreground: 'rgb(221, 227, 233)',
        root: 'rgb(24, 28, 32)',
        card: 'rgb(24, 28, 32)',
        destructive: 'rgb(147, 0, 10)',
        primary: 'rgb(0, 69, 148)',
    },
} as const;

const COLORS =
    Platform.OS === 'ios'
        ? IOS_SYSTEM_COLORS
        : Platform.OS === 'android'
            ? ANDROID_COLORS
            : WEB_COLORS;

export { COLORS };