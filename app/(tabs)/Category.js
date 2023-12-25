import { Heading, Center, Box, HStack, Text, Button, Input, FormControl, ScrollView } from "native-base";
import  Header  from "../../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Firebase from "../../firebase";


const Category = () => {
    const [userData,setUserData] = useState({});
    const [dataTask, setDataTask] = useState([]);
    const [kategori,setKategori] = useState("");
    const [dataKategori,setDataKategori] = useState([]);
    const [addButton, setAddButton] = useState(false);
    useEffect(() => {
        getUserData();
    },[]);
    const getUserData = async() => {
        try {
            const value = await AsyncStorage.getItem("user-data");
            if (value !== null) {
                const valueObject = JSON.parse(value)
                setUserData(valueObject);
                ambilkategori(valueObject);
            }
        } catch (error) {
            console.error(error)
        }
    };
    const addKategori = (Kategori) => {
        const data = {
            Kategori: Kategori,
        };
        const uid = userData.credential.user.uid;
        Firebase.database().ref("Kategori/"+uid).push(data);
        setAddButton(false);
        setKategori("");
        ambilkategori(userData);
    };
    const ambilkategori = (userData) => {
        const uid = userData.credential.user.uid;
        const dataref = Firebase.database().ref("Kategori/"+uid);
        dataref.once("value").then((snapshot) => {
            const dataValue = snapshot.val();
            if (dataValue != null) {
                const snapshotArr = Object.entries(dataValue).map((item) => {
                return {
                    id: item[0],
                    ...item[1],
                };
                });
                setDataKategori(snapshotArr);
            }
        })
    };
    const AddHandle = () => {
        setAddButton(true);
    };
    const bycategory = () =>{
        return(
            <>
                <TouchableOpacity activeOpacity={0.5}>
                        <Box bg={"#FF7A01"} p={3} rounded={"lg"} margin={1}>
                            <Link href={{ pathname: "/ByCategory", params:{kategori:"Personal"}  }}>
                            <HStack justifyContent={"space-between"} >
                                <HStack alignItems={"center"}space={"12"}>
                                    <Ionicons name="people" color={"white"} size={75}/>
                                    <Heading color={"white"} >Personal</Heading>
                                </HStack>
                            </HStack>
                            </Link>
                        </Box>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <Box bg={"#FF7A01"} p={3} rounded={"lg"} margin={1}>
                        <Link href={{ pathname: "/ByCategory", params:{kategori:"Collage"} }}>
                        <HStack justifyContent={"space-between"} >
                            <HStack alignItems={"center"}space={"12"}>
                                <Ionicons name="school" color={"white"} size={75}/>
                                <Heading color={"white"} >Collage</Heading>
                            </HStack>
                        </HStack>
                        </Link>
                    </Box>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <Box bg={"#FF7A01"} p={3} rounded={"lg"} margin={1}>
                        <Link href={{ pathname: "/ByCategory", params:{kategori:"Home"} }} >
                            <HStack justifyContent={"space-between"} >
                                <HStack alignItems={"center"}space={"12"}>
                                    <Ionicons name="home" color={"white"} size={75}/>
                                    <Heading color={"white"} >Home</Heading>
                                </HStack>
                            </HStack>
                        </Link>
                    </Box>
                </TouchableOpacity>
            </>
        );
    };
    const BoxCategory = (Nama) => {
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <Box bg={"#FF7A01"} p={3} rounded={"lg"} margin={1}>
                    <Link href={{ pathname: "/ByCategory", params:{kategori:Nama} }}>
                        <HStack justifyContent={"space-between"} >
                            <HStack alignItems={"center"}space={"12"}>
                                <Ionicons name="reader" color={"white"} size={75}/>
                                <Heading color={"white"} >{Nama}</Heading>
                            </HStack>
                        </HStack>
                    </Link>
                </Box>
            </TouchableOpacity>
        );
    };
    return (
        <>
            <ScrollView>
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
                    {dataKategori !== null && (
                        dataKategori.map(index => (
                            <React.Fragment key={index}>
                                {BoxCategory(index.Kategori)}
                            </React.Fragment>
                        ))
                    )}
                </Box>
                {addButton && (
                    <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
                        <Center flex={1} justifyContent={"center"}>
                            <Box w={"80"} bg={"gray.300"} p={5}>
                                <FormControl>
                                    <Box>
                                        <Heading color={""}>Tambah Kategori</Heading>
                                    </Box>
                                    <Box>
                                        <Input variant={"underlined"} placeholder="Nama Kategori" fontSize={"lg"} value={kategori} onChangeText={(kategori) => setKategori(kategori)} />
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
                                            <TouchableOpacity onPress={() => addKategori(kategori)}>
                                                <Box>
                                                    <HStack space={2} alignItems={"center"}>
                                                        <Text fontSize={"xl"} color={"#FF7A01"}>Simpan</Text>
                                                        <Ionicons name="document" color={"#FF7A01"} size={25}/>
                                                    </HStack>
                                                </Box>
                                            </TouchableOpacity>
                                        </HStack>
                                    </Box>
                                </FormControl>
                            </Box>
                        </Center>
                    </Animated.View>
                )}
            </ScrollView>
        </>
    );
};
export default Category;
