import { Box, Button, Center, FormControl, HStack, Heading, Input, Spinner, Text, VStack, Image, View } from "native-base";
import { useEffect, useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Icon } from "@iconify/react";
import googleIcon from "@iconify/icons-devicon/google";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Firebase from "../firebase";

const Login = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    useEffect(() => {
        getUser();
    },[]);
    const getUser = async() => {
        try{
            const userData = await AsyncStorage.getItem("user-data");
            if (userData !== null) {
                router.replace("/Todo");
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const login = () => {
        Firebase.auth().signInWithEmailAndPassword(email,password).then((userCredential) => {
            saveUserData(email,password,userCredential);
        }) .catch((error) => {
            console.error(error)
        })
    };
    const saveUserData = async(email,password,credential) => {
        const userData = {email,password,credential};
        try {
            await AsyncStorage.setItem("user-data",JSON.stringify(userData));
            router.replace("/Todo");
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <ImageBackground source={require('../assets/Log_in.png')} style={{ flex:1, }}>
            <View flex={1} backgroundColor={'rgba(0, 0, 0, 0.5)'} alignItems={"center"} justifyContent={"center"}>
                {isLoading ? (
                    <Spinner size={"lg"} color={"white"} />
                ):(
                    <Box w={"96"} alignContent={"center"} >
                        <FormControl>
                            <VStack space={5}>
                                <Box>
                                    <Text fontSize={40} color={"white"} >My Daily</Text>
                                    <Text fontSize={30} color={"white"} >Login</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={15} color={"white"}>Email</Text>
                                    <Input variant={"rounded"} placeholder="username@gmail.com" backgroundColor={"white"} fontSize={"lg"} onChangeText={(value) => setEmail(value)} />
                                </Box>
                                <Box>
                                    <Text fontSize={15} color={"white"}>Password</Text>
                                    <Input type="password" variant={"rounded"} placeholder="Password" backgroundColor={"white"} fontSize={"lg"} onChangeText={(value) => setPassword(value)} />
                                </Box>
                                <Box>
                                    <TouchableOpacity onPress={login}>
                                        <Box bgColor={"#FF7A01"} p={"2"} rounded={10} alignItems={"center"}>
                                            <Text fontSize={25} color={"white"}>Login</Text>
                                        </Box>
                                    </TouchableOpacity>
                                </Box>        
                            </VStack>
                        </FormControl>
                        
                        
                        <VStack mt={5} space={5}>
                            <Box alignItems={"center"}>
                                <Text color={"white"} fontSize={15}>or continue with</Text>        
                            </Box>
                            <Box>
                                <HStack justifyContent={"center"} space={5}>
                                    <Box bgColor={"white"} p={3} rounded={"xl"} w={24} alignItems={"center"} >
                                        <Image source={require("../assets/google_icon.png")}/>
                                    </Box>
                                    <Box bgColor={"white"} p={3} rounded={"xl"} w={24} alignItems={"center"} >
                                        <Image source={require("../assets/github_icon.png")}/>
                                    </Box>
                                    <Box bgColor={"white"} p={3} rounded={"xl"} w={24} alignItems={"center"} >
                                        <Image source={require("../assets/facebook_icon.png")}/>
                                    </Box>
                                </HStack>
                            </Box>
                            <Box alignItems={"center"}>
                                <HStack>
                                    <Text color={"white"} fontSize={15}>Don’t have an account yet? </Text>
                                    <Link href={{pathname:"/Register"}} asChild>
                                        <TouchableOpacity>
                                            <Text color={"white"} fontSize={15} bold >Register for free</Text>
                                        </TouchableOpacity>
                                    </Link>
                                    
                                </HStack>
                            </Box>
                        </VStack>
                        
                    </Box>
                )}
                
            </View>
            {/* <Center flex={1}>
                {isLoading ? (
                    <Spinner size={"lg"} color={"black"} />
                ) : (
                    <Box width={"full"} p={"10"} alignItems={"center"}>
                    <Heading mb={"6"}>Login Form</Heading>
                    <VStack space={"5"}>
                        <FormControl>
                            <Input type="text" w={"full"} placeholder="Input your email" borderRadius={"full"} onChangeText={(value) => setEmail(value)} />
                        </FormControl>
                        <FormControl>
                            <Input type="password" w={"full"} placeholder="Input your password" borderRadius={"full"} onChangeText={(value) => setPassword(value)} />
                        </FormControl>
                        <Button colorScheme="indigo" borderRadius={"full"}  > Log in </Button>
                        <HStack justifyContent={"center"}>
                        <Text>I'm a new user. </Text>
                        
                        </HStack>
                    </VStack>
                    </Box>
                )}
            </Center> */}
        </ImageBackground>
        
    );
};
export default Login;