import { router, useLocalSearchParams } from "expo-router";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, Button, HStack, ScrollView, Text, VStack } from "native-base";
import Firebase from "../firebase";
import { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';



const DetailNote = () =>{
    const params = useLocalSearchParams();
    const [userData, setUserData] = useState({});
    const [image,setImage] = useState(null);
    const imageRef = params.Foto ? Firebase.storage().ref(params.Foto) : null;
    useEffect(() => {
        getUserData();
        if (imageRef) {
            getpic();
        }
    },[]);
    const getUserData = async () => {
        try {
            const value = await AsyncStorage.getItem("user-data");
            if (value !== null) {
                const valueObject = JSON.parse(value);
                setUserData(valueObject);
          }
        } catch (e) {
            console.error(e);
        }
    };
    const getpic = () => {
        if (!imageRef) {
          console.warn('Referensi gambar tidak ditemukan.');
          // Set UrlPic ke nilai default atau kosong sesuai kebutuhan aplikasi Anda
          setImage(null); // atau setUrlPic(''); atau setUrlPic(DEFAULT_URL);
          return;
        }
    
        imageRef.getDownloadURL().then((url) => {
            // Gunakan URL ini untuk menampilkan gambar di aplikasi Anda
            console.log('URL gambar:', url);
            setImage(url);
        }).catch((error) => {
                if (error.code === 'storage/object-not-found') {
                console.warn('Gambar tidak ditemukan.');
                // Set UrlPic ke nilai default atau kosong sesuai kebutuhan aplikasi Anda
                setImage(null); // atau setUrlPic(''); atau setUrlPic(DEFAULT_URL);
                } else {
                console.error('Error mendapatkan URL gambar:', error);
                }
            });
    };
    const deleteDataTaskHandler = (id) => {
        const uid = userData.credential.user.uid;
        // Menghapus data di Firebase
        Firebase.database().ref(`Note/${uid}/${id}`).remove();
        // setShowModal(false)
        // setIsLoading(true)
        // Re-Fetch;
        // getUserData();
        router.replace("/Todo")
    };
    return(
        <>
            <Header title={"Detail Note"} withback="true" />
            <ScrollView>
                <Box margin={5}>
                    <VStack space={5}>
                        <HStack space={2}>
                            <Ionicons name="calendar" color={"black"} size={30} />
                            <Text fontSize={"lg"}> {params.Tanggal} </Text>
                        </HStack>
                        <Text fontSize={"lg"}> {params.Catatan} </Text>
                        <Box w={"80"} h={"80"}>
                            {image ? (
                                <Image source={{uri:image}} style={{width: "100%", height: "100%", resizeMode:"contain"}}/>
                            ):(
                                <Text ml={5} fontSize={15}>Gambar tidak tersedia</Text>
                            )}
                        </Box>
                        <Box width={"full"}>
                            <HStack justifyContent={"center"} space={10}>
                                <TouchableOpacity onPress={() => router.push({pathname:"/edit", params:{kategory:"note",isi:params.Catatan, foto:params.Foto, ID:params.ID}})}>
                                    <Box w={"32"} h={"7"} justifyContent={"center"} alignItems={"center"} backgroundColor={"#FF7A01"}>
                                        <Text> Edit </Text>
                                    </Box>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteDataTaskHandler(params.ID)}>
                                    <Box w={"32"} h={"7"} justifyContent={"center"} alignItems={"center"} bgColor={"red.500"}>
                                        <Text> Hapus </Text>
                                    </Box>
                                </TouchableOpacity>
                            </HStack>
                        </Box>
                    </VStack>
                </Box>
            </ScrollView>
        </>
    );
}
export default DetailNote;