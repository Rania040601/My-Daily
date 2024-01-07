import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
// import { NavigationContainer } from "@react-navigation/native";
const noHead = {headerShown:false};
const StackLayout = () => {
    return(
        <NativeBaseProvider>
            {/* <NavigationContainer> */}
                <Stack>
                    <Stack.Screen name="(tabs)" options={noHead}></Stack.Screen>
                    <Stack.Screen name="index" options={noHead}></Stack.Screen>
                    <Stack.Screen name="ByCategory" options={noHead}></Stack.Screen>
                    <Stack.Screen name="add" options={noHead}></Stack.Screen>
                    <Stack.Screen name="edit" options={noHead}></Stack.Screen>
                    <Stack.Screen name="Notifications" options={noHead}></Stack.Screen>
                    <Stack.Screen name="Login" options={noHead}></Stack.Screen>
                    <Stack.Screen name="Register" options={noHead}></Stack.Screen>
                    <Stack.Screen name="DetailNote" options={noHead}></Stack.Screen>
                    <Stack.Screen name="DetailTask" options={noHead}></Stack.Screen>
                    <Stack.Screen name="setting" options={noHead}></Stack.Screen>
                </Stack>
            {/* </NavigationContainer> */}
            
        </NativeBaseProvider>
        
    );
};
export default StackLayout; 