
import { Heading, Text, Center, Box, HStack, VStack, Checkbox, Button, Fab, Pressable, Modal, ScrollView } from "native-base";
import { SafeAreaView, View, TouchableOpacity, Animated, StyleSheet } from "react-native";
import Header from "../../components/Header";
import { FAB } from "@rneui/themed";
import React, { useState, useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, router } from "expo-router";

const Todo = () => {
    const [isJadwal, setIsJadwal] = useState(true)
    const [isisiJadwal, setIsIsiJadwal] = useState(true)
    const [addButton, setAddButton] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleFABPress = () => {
        // Ketika FAB ditekan, atur state untuk menampilkan button baru
        setAddButton(true);
    };
    const CustomModal = ({ showModal, setShowModal, judul, tanggal, jam, isi }) => {
        return (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content position={"relative"}>
                    {/* <Modal.CloseButton /> */}
                    {/* <Modal.Header>Return Policy</Modal.Header> */}
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
                        {/* <Heading> {judul} </Heading>
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
                        </HStack> */}

                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setShowModal(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={() => {
                                    setShowModal(false);
                                }}
                            >
                                Save
                            </Button>
                        </Button.Group>
                    </Modal.Footer> */}
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
    const Note = () => {
        const originalText =
            "BUMDes (Badan Usaha Milik Desa) merupakan lembaga ekonomi dan sosial berbadan hukum yang dibangun oleh pemerintah desa guna mengelola usaha dan mengembangkan investasi yang sebesar-besarnya digunakan untuk kesejahteraan masyarakat desa ​(Sofianto & Risandewi, 2021)​. Salah satu desa yang memiliki BUMDes adalah Desa Kedungdalem dengan BUMDesnya yaitu BUMDes Berlian Timur. Desa Kedungdalem sendiri merupakan desa di bawah yuridiksi administratif Kecamatan Dringu, Kabupaten Probolinggo dengan luas wilayah sebesar 107.076 Ha, 5.775 jiwa populasi penduduk dan Indeks Desa Membangun (IDM) adalah menengah. Desa Kedungdalem memiliki wilayah yang strategis karena dilewati oleh Jalan Nasional Pantura dan berjarak 5 km dari pusat Kota Probolinggo sehingga memiliki potensi ekonomi yang signifikan dalam penjualan hasil budidaya produk pangan kepada pelaku usaha di Kota Probolinggo. Sayangnya, lokasi yang strategis tersebut belum dimanfaatkan secara optimal. ";
        const words = originalText.split(" ");
        const limitedWords = words.slice(0, 20).join(" ");
        return (
            <Box bg={"#FF7A01"} p={"5"} rounded={"lg"} margin={10}>
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
                            <Text color="white" >2023-11-17</Text>
                        </HStack>
                    </HStack>
                </VStack>
            </Box>
        );
    };
    const Tugas = () => {
        return (
            <>
                {isisiJadwal ? (
                    <Box bg={"#FF7A01"} p={"5"} rounded={"lg"} margin={10}>
                        <VStack>
                            <HStack justifyContent={"space-between"} alignItems={"center"}>
                                <HStack alignItems={"center"}>
                                    <Ionicons name="calendar" color={"white"} size={15} />
                                    <Text>  </Text>
                                    <Text color="white" >2023-11-17</Text>
                                    <Text>  </Text>
                                    <Ionicons name="alarm" color={"white"} size={15} />
                                    <Text color="white" >19:00</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                        <VStack>
                            <HStack justifyContent={"space-between"} alignItems={"center"}>
                                <TouchableOpacity onPress={() => setShowModal(true)} >
                                    <HStack alignItems={"center"}>
                                        <Heading color={"white"}> halo </Heading>
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
                <CustomModal showModal={showModal} setShowModal={setShowModal} judul={"halo"} tanggal={"2023-11-17"} jam={"19:00"} isi={"BUMDes (Badan Usaha Milik Desa) merupakan lembaga ekonomi dan sosial berbadan hukum yang dibangun oleh pemerintah desa guna mengelola usaha dan mengembangkan investasi yang sebesar-besarnya digunakan untuk kesejahteraan masyarakat desa ​(Sofianto & Risandewi, 2021)​."} />
            </>


        );
    };
    return (
        <>
            <Header title={"To Do"} />
            {jadte()}
            {isJadwal ? (
                Tugas()
            ) : (
                Note()
                // tambah()
            )}
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