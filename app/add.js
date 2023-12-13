import { Heading, Center, Button, Box, FormControl, Input  } from "native-base";
import { useLocalSearchParams } from "expo-router";
import Icon from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import  Header  from "../components/Header";


const Video = () => {
    const params = useLocalSearchParams();
    console.log(params);
    return (
        <>
            
            <Header title={`tambah ${params.category}`} withback="true" />
            <Center flex={1}>
                <Box bgColor={"#E1E1E1"} width={"96"} p={5}>
                    <FormControl>
                        <Input variant={"underlined"} placeholder="Tambahkan judul" fontSize={"xl"}/>
                    </FormControl>
                </Box>
            </Center>
            
            
    
        </>
    );
};
export default Video;