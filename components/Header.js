import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { Box,HStack,Image,Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
const header = ({title,withback = false}) => {
    const navigation =useNavigation();
    return (
        <SafeAreaView>
            <StatusBar barStyle={"light-content"} backgroundColor={"#FF7A01"}></StatusBar>
            <Box></Box>
        </SafeAreaView>
    );
};