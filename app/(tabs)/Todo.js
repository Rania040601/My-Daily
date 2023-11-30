import { Heading, Text, Center, Box, HStack, VStack, Checkbox, Button } from "native-base";
import { SafeAreaView,View,TouchableOpacity } from "react-native";
import  Header  from "../../components/Header";
import { FAB } from "@rneui/themed";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Video = () => {
    const [isJadwal,setIsJadwal] = useState(false)
    const [isisiJadwal,setIsIsiJadwal] = useState(true)
    const jadte = () => {
        return(
            <Box alignItems={"center"} width={"full"} height={150}>
                <Box bg={"#FF7A01"} p={"3"} rounded={16}margin={10}>
                    <HStack >
                        <HStack alignItems={"center"}>
                            <Button width={90} rounded={"full"} onPress={() => setIsJadwal(true)} bg={isJadwal ? "#FFFFFF":"#FF7A01"}>
                                <Text color={isJadwal ? "#FF7A01":"#FFFFFF"}>Jadwal</Text>
                            </Button>
                        </HStack>
                        <HStack>
                            <Button width={90} rounded={"full"} onPress={() => setIsJadwal(false)} bg={!isJadwal ? "#FFFFFF":"#FF7A01"}>
                                <Text color={!isJadwal ? "#FF7A01":"#FFFFFF"}>Note</Text>
                            </Button>
                        </HStack>
                    </HStack>
                </Box>
                
            </Box>
        );
    };
    const Note = () =>{
        const originalText =
                "BUMDes (Badan Usaha Milik Desa) merupakan lembaga ekonomi dan sosial berbadan hukum yang dibangun oleh pemerintah desa guna mengelola usaha dan mengembangkan investasi yang sebesar-besarnya digunakan untuk kesejahteraan masyarakat desa ​(Sofianto & Risandewi, 2021)​. Salah satu desa yang memiliki BUMDes adalah Desa Kedungdalem dengan BUMDesnya yaitu BUMDes Berlian Timur. Desa Kedungdalem sendiri merupakan desa di bawah yuridiksi administratif Kecamatan Dringu, Kabupaten Probolinggo dengan luas wilayah sebesar 107.076 Ha, 5.775 jiwa populasi penduduk dan Indeks Desa Membangun (IDM) adalah menengah. Desa Kedungdalem memiliki wilayah yang strategis karena dilewati oleh Jalan Nasional Pantura dan berjarak 5 km dari pusat Kota Probolinggo sehingga memiliki potensi ekonomi yang signifikan dalam penjualan hasil budidaya produk pangan kepada pelaku usaha di Kota Probolinggo. Sayangnya, lokasi yang strategis tersebut belum dimanfaatkan secara optimal. ";
        const words = originalText.split(" ");
        const limitedWords = words.slice(0, 20).join(" ");
        return(
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
    const Tugas = () =>{
        return(
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
                                <HStack alignItems={"center"}>
                                    
                                    <Heading color={"white"}> halo </Heading>
                                </HStack>
                                <HStack space={"2xl"}>
                                    <Checkbox rounded={"xl"} borderColor={"white"} bgColor={"#FF7A01"} size={"lg"}/>
                                </HStack>
                            </HStack>
                        </VStack>
                    </Box>
                ):(
                    <Center flex={1}>
                        <Heading>Todo</Heading>
                    </Center>
                )}
            </>
            
            // <Box bg={"#FF7A01"} p={"5"} rounded={"lg"} margin={10}>
            //     <VStack>
            //         <HStack justifyContent={"space-between"} alignItems={"center"}>
            //             <HStack alignItems={"center"}>
            //                 <Ionicons name="calendar" color={"white"} size={15} />
            //                 <Text>  </Text>
            //                 <Text color="white" >2023-11-17</Text>
            //                 <Text>  </Text>
            //                 <Ionicons name="alarm" color={"white"} size={15} />
            //                 <Text color="white" >19:00</Text>
            //             </HStack>
            //         </HStack>
            //     </VStack>
            //     <VStack>
            //         <HStack justifyContent={"space-between"} alignItems={"center"}>
            //             <HStack alignItems={"center"}>
                            
            //                 <Heading color={"white"}> halo </Heading>
            //             </HStack>
            //             <HStack space={"2xl"}>
            //                 <Checkbox rounded={"xl"} borderColor={"white"} bgColor={"#FF7A01"} size={"lg"}/>
            //             </HStack>
            //         </HStack>
            //     </VStack>
            // </Box>
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
            )}
            <FAB placement="right"  size="large" color="#FF7A01" icon={<Ionicons name="add" size={25} color={"white"}/>}  />
        </>
    );
};
export default Video;