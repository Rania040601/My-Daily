import { Heading, Center,Box, Text, HStack } from "native-base";
import  Header  from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";


const Video = () => {
    return (
        <>
            <Header title={"Notifications"} withback="true" />
            <Box alignItems={"center"} margin={5} width={"container"} >
                <Box bg={"#FF7A01"} rounded={"lg"} w={"80"}>
                    <HStack alignItems={"center"} space={2}>
                        <Ionicons name="alert-circle-outline" size={50} color={"white"}/>
                        <Text fontSize={"xl"} color={"white"}>Main Game</Text>
                    </HStack>
                </Box>
            </Box>
        </>
    );
};
export default Video;