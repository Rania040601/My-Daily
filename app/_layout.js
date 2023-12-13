import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
const noHead = {headerShown:false};
const StackLayout = () => {
    return(
        <NativeBaseProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={noHead}></Stack.Screen>
                <Stack.Screen name="index" options={noHead}></Stack.Screen>
            </Stack>
        </NativeBaseProvider>
        
    );
};
export default StackLayout; 