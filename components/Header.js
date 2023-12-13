import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { Box,HStack,Image,Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useNavigation } from "expo-router";
const header = ({title,withback = false}) => {
    const navigation =useNavigation();
    return (
        <SafeAreaView>
            <StatusBar barStyle={"light"} backgroundColor={"#FF7A01"}/>
            <Box bg={"#FF7A01"} p={"5"}>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <HStack alignItems={"center"}>
                        {!withback ?(
                            <>
                                {/* <Image source={require("../assets/cnn.png")} w={"12"} h={"12"} alt="CNN Logo" mr={"3"}/> */}
                            </>
                        ) : (
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                                <Box mr={"3"}>
                                    <Ionicons name="arrow-back-outline" size={32} color={"white"}/>
                                </Box>
                            </TouchableOpacity>
                        )}
                        <Heading color={"white"}> {title} </Heading>
                    </HStack>
                    <HStack space={"2xl"}>
                        <Link href={{ pathname: "/Notifications" }} asChild>
                            <TouchableOpacity activeOpacity={0.5} >
                                <Box mr={"3"}>
                                    <Ionicons name="notifications" size={32} color={"white"}/>
                                </Box>
                            </TouchableOpacity>
                        </Link>
                    </HStack>
                </HStack>
            </Box>
        </SafeAreaView>
    );
};
export default header
