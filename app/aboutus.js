import { Heading, Center,Box, Text, HStack, VStack, Image } from "native-base";
import  Header  from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";


const Video = () => {
    return (
        <>
            <Header title={"About Us"} withback="true" />
            <Box flex={1} alignItems={"center"}>
                <VStack alignItems={"center"}>
                    <Box w={"40"} h={"40"}>
                        <Image source={require("../assets/icontol2.png")} style={{width: "100%", height: "100%", resizeMode:"contain"}} />
                    </Box>
                    <Box p={5}>
                        <VStack space={5}>
                            <Text fontSize={"lg"} fontFamily={"body"}>Memiliki daftar tugas pribadi merupakan alat yang luar biasa untuk membantu seseorang tetap fokus, terorganisir, dan produktif.</Text>
                            <Text>Kunci untuk efisiensi, penyelesaian tugas yang lebih baik, dan perasaan yang lebih terkontrol terhadap waktu dan aktivitas sehari-hari.</Text>
                        </VStack>
                        
                    </Box>
                </VStack>
            </Box>
            
        </>
    );
};
export default Video;