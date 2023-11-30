import { Heading, Center, Box, HStack } from "native-base";
import  Header  from "../../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";


const Category = () => {
    const bycategory = () =>{
        return(
            <>
                
                <TouchableOpacity activeOpacity={0.5}>
                        <Box bg={"#FF7A01"} p={3} rounded={"lg"} margin={1}>
                            
                            <Link href={{ pathname: "/ByCategory"}}>
                            
                            <HStack justifyContent={"space-between"} >
                                <HStack alignItems={"center"}space={"12"}>
                                    <Ionicons name="people" color={"white"} size={75}/>
                                    <Heading color={"white"} >Personal</Heading>
                                </HStack>
                            </HStack>
                            
                            </Link>
                            
                        </Box>
                </TouchableOpacity>
                
                
                <Box bg={"#FF7A01"} p={3} rounded={"lg"} margin={1}>
                    <HStack justifyContent={"space-between"} >
                        <HStack alignItems={"center"}space={"12"}>
                            <Ionicons name="school" color={"white"} size={75}/>
                            <Heading color={"white"} >Collage</Heading>
                        </HStack>
                    </HStack>
                </Box>
                <Box bg={"#FF7A01"} p={3} rounded={"lg"} margin={1}>
                    <HStack justifyContent={"space-between"} >
                        <HStack alignItems={"center"}space={"12"}>
                            <Ionicons name="home" color={"white"} size={75}/>
                            <Heading color={"white"} >Home</Heading>
                        </HStack>
                    </HStack>
                </Box>
            </>
        );
    };
    return (
        <>
            <Header title={"Category"} />
            <Box margin={10}>
                {bycategory()}
            </Box>
            
            {/* <Center flex={1}>
                <Heading>Category</Heading>
            </Center> */}
        </>
    );
};
export default Category;
