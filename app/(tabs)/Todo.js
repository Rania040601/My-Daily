
import { Heading, Text, Center, Box, HStack, VStack, Checkbox, Button, Fab, Pressable, Modal, ScrollView, Spinner, View } from "native-base";
import { SafeAreaView, TouchableOpacity, Animated, StyleSheet } from "react-native";
import Header from "../../components/Header";
import { FAB } from "@rneui/themed";
import React, { useState, useRef, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, router } from "expo-router";
import Firebase from "../../firebase";
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Todo = () => {
    const [isJadwal, setIsJadwal] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isisiJadwal, setIsIsiJadwal] = useState(true);
    const [addButton, setAddButton] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState({});
    const [dataTask, setDataTask] = useState();
    const [dataNote, setDataNote] = useState();
    const handleFABPress = () => {
        setAddButton(true);
    };
    useEffect(() => {
        getUserData();
    },[]);
    const getUserData = async () => {
        try {
            const value = await AsyncStorage.getItem("user-data");
            if (value !== null) {
                const valueObject = JSON.parse(value);
                setUserData(valueObject);
                fetchDataTask(valueObject);
                fetchDataNote(valueObject);
                // console.log(dataTask)
                // ambilkategori(valueObject);
                // console.log(dataKategori);
          }
        } catch (e) {
            console.error(e);
        }
    };
    const fetchDataTask = (userData) => {
        try {
            const uid = userData.credential.user.uid;
            const dataRef = Firebase.database().ref("Task/" + uid);
            dataRef.once("value").then((snapshot) => {
                const dataValue = snapshot.val();
                if (dataValue != null) {
                    const snapshotArr = Object.entries(dataValue).map((item) => {
                        return {
                            id: item[0],
                            ...item[1],
                        };
                    });
                setDataTask(snapshotArr);
                }
                // setIsLoading(false);
            }).catch((e) => {
                console.error(e);
            });
        } catch (e) {
            console.error(e);
        }
    };
    const formatDate = (dateString) => {
        const date = moment(dateString, 'MM/DD/YYYY, h:mm:ss A').format('DD/MM/YYYY');
        return date;
    };
    const formatTime = (dateString) => {
        const date = moment(dateString, 'MM/DD/YYYY, h:mm:ss A').format('h:mm:ss');
        return date;
    };
    const fetchDataNote = (userData) => {
        try {
            const uid = userData.credential.user.uid;
            const dataRef = Firebase.database().ref("Note/" + uid);
            dataRef.once("value").then((snapshot) => {
                const dataValue = snapshot.val();
                if (dataValue != null) {
                    const snapshotArr = Object.entries(dataValue).map((item) => {
                        return {
                            id: item[0],
                            ...item[1],
                        };
                    });
                setDataNote(snapshotArr);
                }
                setIsLoading(false);
            }).catch((e) => {
                console.error(e);
            });
        } catch (e) {
            console.error(e);
        }
    };
    const CustomModal = ({ showModal, setShowModal, judul, tanggal, jam, isi }) => {
        return (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content position={"relative"}>
                    <Modal.Body>
                        <Box>
                            <Box alignItems={"center"}>
                                <TouchableOpacity onPress={() => { setShowModal(false) }}>
                                    <Box bgColor={"#FF7A01"} rounded={"full"} alignItems={"center"} >
                                        <Ionicons name="close" color={"white"} size={30} />
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                            <Heading> {judul} </Heading>
                            <HStack alignItems={"center"} space={1}>
                                <Text>Date line :</Text>
                                <HStack alignItems={"center"} space={2} >
                                    <Ionicons name="calendar" color={"black"} size={15} />
                                    <Text color="black" > {tanggal} </Text>
                                </HStack>
                                <HStack alignItems={"center"} space={2} >
                                    <Ionicons name="alarm" color={"black"} size={15} />
                                    <Text color="black" > {jam} </Text>
                                </HStack>
                            </HStack>
                            <Text> {isi} </Text>
                            <Box alignItems={"center"} >
                                <TouchableOpacity onPress={() => { setShowModal(false) }}>
                                    <Box w={"10"} bgColor={"#FF7A01"} rounded={10} alignItems={"center"} >
                                        <Text fontSize={"xl"} color={"white"}>ok</Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        );
    };
    const jadte = () => {
        return (
            <Box alignItems={"center"} width={"full"} height={150}>
                <Box bg={"#FF7A01"} p={"3"} rounded={16} margin={10}>
                    <HStack >
                        <HStack alignItems={"center"}>
                            <Button width={90} rounded={"full"} onPress={() => setIsJadwal(true)} bg={isJadwal ? "#FFFFFF" : "#FF7A01"}>
                                <Text color={isJadwal ? "#FF7A01" : "#FFFFFF"}>Jadwal</Text>
                            </Button>
                        </HStack>
                        <HStack>
                            <Button width={90} rounded={"full"} onPress={() => setIsJadwal(false)} bg={!isJadwal ? "#FFFFFF" : "#FF7A01"}>
                                <Text color={!isJadwal ? "#FF7A01" : "#FFFFFF"}>Note</Text>
                            </Button>
                        </HStack>
                    </HStack>
                </Box>
            </Box>
        );
    };
    const Note = (catatan, tanggal) => {
        const originalText = catatan ;
        const words = originalText.split(" ");
        const limitedWords = words.slice(0, 20).join(" ");
        return (
            <>
                <Box bg={"#FF7A01"} p={"5"} rounded={"lg"}>
                    <VStack>
                        <HStack justifyContent={"space-between"} alignItems={"center"}>
                            <HStack alignItems={"center"}>
                                <Text color={"white"}>{limitedWords}</Text>
                            </HStack>
                        </HStack>
                    </VStack>
                    <VStack>
                        <HStack justifyContent={"space-between"} alignItems={"center"}>
                            <HStack alignItems={"center"}>
                                <Ionicons name="calendar" color={"white"} size={15} />
                                <Text>  </Text>
                                <Text color="white" >{tanggal}</Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </Box>
            </>
            
        );
    };
    const Tugas = (judul, tanggal, jam, catatan) => {
        return (
            <>
                {dataTask ? (
                    <Box bg={"#FF7A01"} p={"5"} rounded={"lg"}>
                        <VStack>
                            <HStack justifyContent={"space-between"} alignItems={"center"}>
                                <HStack alignItems={"center"}>
                                    <Ionicons name="calendar" color={"white"} size={15} />
                                    <Text>  </Text>
                                    <Text color="white" >{tanggal}</Text>
                                    <Text>  </Text>
                                    <Ionicons name="alarm" color={"white"} size={15} />
                                    <Text color="white" >{jam}</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                        <VStack>
                            <HStack justifyContent={"space-between"} alignItems={"center"}>
                                <TouchableOpacity onPress={() => setShowModal(true)} >
                                    <HStack alignItems={"center"}>
                                        <Heading color={"white"}> {judul} </Heading>
                                    </HStack>
                                </TouchableOpacity>
                                <HStack space={"2xl"}>
                                    <Checkbox rounded={"xl"} borderColor={"white"} bgColor={"#FF7A01"} size={"lg"} />
                                </HStack>
                            </HStack>
                        </VStack>
                    </Box>
                ) : (
                    <Center flex={1}>
                        <Heading>Todo</Heading>
                    </Center>
                )}
                <CustomModal showModal={showModal} setShowModal={setShowModal} judul={judul} tanggal={tanggal} jam={jam} isi={catatan} />
            </>
        );
    };
    return (
        <>
            <Header title={"To Do"} />
            {jadte()}
            <Box margin={10} >
                {isLoading ? (
                    <Center>
                        <Spinner size={"lg"} color={"black"} />
                    </Center>
                ):(
                    isJadwal ? (
                        dataTask.map((index) => (
                            <VStack space={3}>
                                {Tugas(index.judul,formatDate(index.Date),formatTime(index.Date),index.Catatan)}
                            </VStack>
                        ))
                    ) : (
                        dataNote.map((index) => (
                            <VStack>
                                {Note(index.Note,formatDate(index.Date))}
                                <View h={3}/>
                            </VStack>
                        ))
                    )
                )}
            </Box>
            {addButton ? (
                <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}>
                    <Box alignItems={"flex-end"} width={"full"} height={""} flex={1}>
                        <VStack space={4} alignItems={"flex-end"} position={"absolute"} bottom={30} right={30}>
                            <Box>
                                <HStack space={4} alignItems={"center"}>
                                    <Text fontSize={"lg"}>Tambah Note</Text>

                                    <FAB onPress={() => router.push({ pathname: '/add', params: { category: 'note' } })} size="large" color="#FF7A01" icon={<Ionicons name="document-text" size={25} color={"white"} />} />
                                </HStack>
                            </Box>
                            <Box>
                                <HStack space={4} alignItems={"center"}>
                                    <Text fontSize={"lg"}>Tambah Jadwal</Text>
                                    <FAB onPress={() => router.push({ pathname: '/add', params: { category: 'jadwal' } })} size="large" color="#FF7A01" icon={<Ionicons name="today" size={25} color={"white"} />} />
                                </HStack>
                            </Box>

                            <FAB onPress={() => setAddButton(false)} size="large" color="red" icon={<Ionicons name="close" size={25} color={"white"} />} />
                        </VStack>
                    </Box>
                </Animated.View>
            ) : (
                <FAB placement="right" onPress={handleFABPress} size="large" color="#FF7A01" icon={<Ionicons name="add" size={25} color={"white"} />} />
            )}
        </>
    );
};
export default Todo;