import { Box, Center, Heading, VStack, HStack, Text, Checkbox } from "native-base";
import  Header  from "../components/Header";
import Ionicon from "@expo/vector-icons/Ionicons"

const ByCategory = () => {
    const ItemTask = () => {
        return(
            <Box bg={"#FF7A01"} p={"5"} rounded={"lg"} margin={10}>
                <VStack>
                    <HStack justifyContent={"space-between"} alignItems={"center"}>
                        <HStack alignItems={"center"}>
                            <Ionicon name="calendar" color={"white"} size={15} />
                            <Text>  </Text>
                            <Text color="white" >2023-11-17</Text>
                            <Text>  </Text>
                            <Ionicon name="alarm" color={"white"} size={15} />
                            <Text color="white" >19:00</Text>
                        </HStack>
                    </HStack>
                </VStack>
                <VStack>
                    <HStack justifyContent={"space-between"} alignItems={"center"}>
                        <HStack alignItems={"center"}>                                    
                            <Heading color={"white"}> halo </Heading>
                        </HStack>
                        <HStack space={"2xl"}>
                            <Checkbox rounded={"xl"} borderColor={"white"} bgColor={"#FF7A01"} size={"lg"}/>
                        </HStack>
                    </HStack>
                </VStack>
            </Box>
        );
    };
    return(
        <>
            <Header title={"By Category"} withback="true" />
            <Box  margin={5} alignItems={"center"} >
                <Ionicon name="people" size={150} color={"#FF7A0133"}  />
                <Heading position={"absolute"}top={"16"}>Personal</Heading>    
            </Box>
            {ItemTask()}
        </>
        
    );
};
export default ByCategory;