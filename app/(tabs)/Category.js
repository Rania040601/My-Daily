import { Heading, Center, Box, HStack, Text, Button, Input } from "native-base";
import  Header  from "../../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";


const Category = () => {
    const [addButton, setAddButton] = useState(false);
    const AddHandle = () => {
        setAddButton(true);
    };
    const bycategory = () =>{
        return(
            <>
                <TouchableOpacity activeOpacity={0.5}>
                        <Box bg={"#FF7A01"} p={3} rounded={"lg"} margin={1}>
                            <Link href={{ pathname: "/ByCategory" }}>
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
            <Box alignItems={"flex-end"}marginLeft={10} marginRight={10} marginTop={5}>
                <TouchableOpacity onPress={AddHandle}>
                    <Box rounded={"full"} bgColor={"#FF7A01"} p={2}>
                        <HStack alignItems={"center"}space={3}>
                            <Text fontSize={"lg"} color={"white"}>New</Text>
                            <Ionicons name="add" color={"white"} size={25} />
                        </HStack>
                    </Box>
                </TouchableOpacity>
            </Box>
            <Box margin={10}>
                {bycategory()}
            </Box>
            {addButton && (
                <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
                    <Center flex={1} justifyContent={"center"}>
                        <Box w={"80"} bg={"gray.300"} p={5}>
                            <Box>
                                <Heading color={""}>Tambah Kategori</Heading>
                            </Box>
                            <Box>
                                <Input variant={"underlined"} placeholder="Nama Kategori" fontSize={"lg"} />
                            </Box>
                            <Box alignItems={"flex-end"}>
                                <HStack space={3}>
                                    <TouchableOpacity onPress={() => setAddButton(false)}>
                                        <Box>
                                            <HStack space={2} alignItems={"center"}>
                                                <Text fontSize={"xl"} color={"#FF0000"}>close</Text>
                                                <Ionicons name="close" color={"red"} size={25}/>
                                            </HStack>
                                        </Box>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Box>
                                            <HStack space={2} alignItems={"center"}>
                                                <Text fontSize={"xl"} color={"#FF7A01"}>Simpan</Text>
                                                <Ionicons name="document" color={"#FF7A01"} size={25}/>
                                            </HStack>
                                        </Box>
                                    </TouchableOpacity>
                                </HStack>
                            </Box>
                        </Box>
                    </Center>
                </Animated.View>
            )}
        </>
    );
};
export default Category;
