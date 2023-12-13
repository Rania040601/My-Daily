
import { Heading, Center, Button  } from "native-base";
import Icon from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
// import { Header } from "../components";

const Video = () => {
    return (
        <>
            {/* <Header title={"Video"} /> */}
            <Center flex={1}>
                <Heading>Todo</Heading>
            </Center>
            <Link href={{pathname:"/setting"}} asChild >
                <Button
                leftIcon={<Icon name="cog-outline" as="Ionicons" color="white" />}
                colorScheme="dark"
                >
                    Settings
                </Button>
            </Link>
            
            
        </>
    );
};
export default Video;
