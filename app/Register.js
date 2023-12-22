import { Box, Button, Center, FormControl, HStack, Heading, Input, Spinner, Text, VStack, Image, View } from "native-base";
import { useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Firebase from "../firebase";
import { Link, router } from "expo-router";

const Register = () => {
    const [nama,setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [passwordSama, setPasswordSama] = useState(true);
    const registerHandler = async () => { 
        if (password === confirmPassword) {
            Firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
                saveUserData(email, password, userCredential);
            }).catch((error) => {
                console.error(error);
            });
        } else {
            setPasswordSama(false);
        }
    };
    const saveUserData = async (email, password, credential) => {
        const userData = { email, password, credential };
        try {
            await AsyncStorage.setItem("user-data", JSON.stringify(userData));
            saveNamaDatabase(nama,userData);
            // router.replace("/Todo");
        } catch (error) {
        console.error(error);
        }
    };
    const saveNamaDatabase = (Nama,userData) =>{
        const data = {
            Nama: Nama
        };
        const uid = userData.credential.user.uid;
        Firebase.database().ref("User/"+uid).push(data);
        router.replace("/Todo")
    };
    return(
        <ImageBackground source={require('../assets/Log_in.png')} style={{ flex:1, }}>
            <View flex={1} backgroundColor={'rgba(0, 0, 0, 0.5)'} alignItems={"center"} justifyContent={"center"}>
                <Box w={"96"} alignContent={"center"} >
                        <FormControl>
                            <VStack space={8}>
                                <Box>
                                    <Text fontSize={40} color={"white"} >My Daily</Text>
                                    <Text fontSize={30} color={"white"} >Register</Text>
                                </Box>
                                <Box>
                                    <Text fontSize={15} color={"white"}>Username</Text>
                                    <Input variant={"rounded"} placeholder="username" backgroundColor={"white"} fontSize={"lg"} onChangeText={(value) => setNama(value)} />
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
                                    <Text fontSize={15} color={"white"}>Confirm Password</Text>
                                    { !passwordSama && (
                                        <Text fontSize={"lg"} color={"red.500"}> Password tidak sama </Text>
                                    ) }
                                    <Input type="password" variant={"rounded"} placeholder="Password" backgroundColor={"white"} fontSize={"lg"} onChangeText={(value) => setConfirmPassword(value)} borderColor={!passwordSama ? "red.500" : "white"} />
                                </Box>
                                <Box>
                                    <TouchableOpacity onPress={registerHandler}>
                                        <Box bgColor={"#FF7A01"} p={"2"} rounded={10} alignItems={"center"}>
                                            <Text fontSize={25} color={"white"}>Register</Text>
                                        </Box>
                                    </TouchableOpacity>
                                </Box>
                            </VStack>
                        </FormControl>
                                
                    
                    <VStack mt={10} space={5}>
                        <Box alignItems={"center"}>
                            <HStack>
                                <Text color={"white"} fontSize={15}>Do you have an account yet? </Text>
                                <Link href={{pathname: "/Login"}} asChild>
                                    <TouchableOpacity>
                                        <Text color={"white"} fontSize={15} bold >Login</Text>
                                    </TouchableOpacity>
                                </Link>
                            </HStack>
                        </Box>
                    </VStack>
                    
                </Box>
                
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
export default Register;