import { Heading, Center, Button  } from "native-base";
import Icon from "@expo/vector-icons/Ionicons";
import { Link, router } from "expo-router";
import Firebase from "../../firebase"
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Header } from "../components";

const Profile = () => {
    const logout = async () => {
        Firebase.auth().signOut().then(() => {
            clearUserData();
        }).catch((error) => {
            console.error(error);
        });
    };
    const clearUserData = async () => {
        try {
            await AsyncStorage.clear();
            router.replace("/Login");
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <>
            {/* <Header title={"Video"} /> */}
            <Center flex={1}>
                <Heading>Todo</Heading>
            </Center>    
            <Button onPress={logout} leftIcon={<Icon name="cog-outline" as="Ionicons" color="white" />} colorScheme="dark" >log out</Button>
            
            
            
        </>
    );
};
export default Profile;