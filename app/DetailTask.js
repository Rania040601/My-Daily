import { useLocalSearchParams } from "expo-router";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, HStack, Heading, ScrollView, Text, VStack } from "native-base";
import Firebase from "../firebase";
import { useEffect, useState } from "react";
import moment from 'moment';
import { Image } from "react-native";


const DetailTask = () =>{
    const params = useLocalSearchParams();
    const [image,setImage] = useState(null);
    const imageRef = params.foto ? Firebase.storage().ref(params.foto) : null;
    useEffect(() => {
        if (imageRef) {
            getpic();
        }
    },[]);
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
    const formatDate = (dateString) => {
        const date = moment(dateString, 'MM/DD/YYYY, h:mm:ss A').format('DD/MM/YYYY');
        return date;
    };
    const formatTime = (dateString) => {
        const date = moment(dateString, 'MM/DD/YYYY, h:mm:ss A').format('h:mm:ss A');
        return date;
    };
    return(
        <>
            <Header title={"Detail Tugas"} withback="true" />
            <ScrollView>
                <Box margin={5}>
                    <VStack space={5}>
                        <Heading> {params.judul} </Heading>
                        <HStack space={2}>
                            <Ionicons name="calendar" color={"black"} size={30} />
                            <Text fontSize={"lg"}> {formatDate(params.date)} </Text>
                        </HStack>
                        <HStack space={2}>
                            <Ionicons name="alarm" color={"black"} size={30} />
                            <Text fontSize={"lg"}> {formatTime(params.date)} </Text>
                        </HStack>
                        <Text fontSize={"lg"}> {params.isi} </Text>
                        <Box w={"80"} height={"80"}>
                            {image ? (
                                <Image source={{uri:image}} style={{width: "100%", height: "100%", resizeMode:"contain"}}/>
                            ):(
                                <Text ml={5} fontSize={15}>Gambar tidak tersedia</Text>
                            )}
                            
                        </Box>
                    </VStack>
                </Box>
            </ScrollView>
        </>
    );
}
export default DetailTask;