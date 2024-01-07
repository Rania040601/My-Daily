import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { Box,HStack,Image,Heading, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Location from 'expo-location';
import { Link, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
const header = ({title,withback = false}) => {
    const [location, setLocation] = useState(null);
    const [cuaca, setCuaca] = useState();
    // console.log(cuaca)
    useEffect( async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        const apiKey = 'ZUTPP8YANKHJA7DCMTTE46V4Y';
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=metric&key=${apiKey}&contentType=json`)
        .then(response => response.json())
        .then(data => setCuaca(data.currentConditions))
        .catch(error => console.error(error));
    },[])
    const navigation =useNavigation();
    return (
        <SafeAreaView>
            <StatusBar barStyle={"light"} backgroundColor={"#FF7A01"}/>
            <Box bg={"#FF7A01"} p={"5"}>
                
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <HStack alignItems={"center"}>
                        {!withback ?(
                            <>
                            </>
                        ) : (
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                                <Box mr={"3"}>
                                    <Ionicons name="arrow-back-outline" size={32} color={"white"}/>
                                </Box>
                            </TouchableOpacity>
                        )}
                        <Heading color={"white"}> {title} </Heading>
                    </HStack>
                    {!withback ?(
                        <HStack space={"2xl"} alignItems={"center"}>
                            {cuaca ? (
                                <HStack alignContent={"center"}>
                                    {cuaca.icon === "clear-day" ? (
                                        <Image style={{ width: 30, height: 30 }} source={require(`../assets/weather/clear-day.png`)} />
                                    ) : cuaca.icon === "clear-night" ? (
                                        <Image style={{ width: 30, height: 30 }} source={require(`../assets/weather/clear-night.png`)} />
                                    ) : cuaca.icon === "cloudy" ? (
                                        <Image style={{ width: 30, height: 30 }} source={require(`../assets/weather/cloudy.png`)} />
                                    ) : cuaca.icon === "fog" ? (
                                        <Image style={{ width: 30, height: 30 }} source={require(`../assets/weather/fog.png`)} />
                                    ) : cuaca.icon === "partly-cloudy-day" ? (
                                        <Image style={{ width: 30, height: 30 }} source={require(`../assets/weather/partly-cloudy-day.png`)} />
                                    ) : cuaca.icon === "partly-cloudy-night" ? (
                                        <Image style={{ width: 30, height: 30 }} source={require(`../assets/weather/partly-cloudy-night.png`)} />
                                    ) : cuaca.icon === "rain" ? (
                                        <Image style={{ width: 30, height: 30 }} source={require(`../assets/weather/rain.png`)} />
                                    ) : cuaca.icon === "snow" ? (
                                        <Image style={{ width: 30, height: 30 }} source={require(`../assets/weather/snow.png`)} />
                                    ) : cuaca.icon === "wind" ? (
                                        <Image style={{ width: 30, height: 30 }} source={require(`../assets/weather/wind.png`)} />
                                    ): null}
                                    <Text fontSize={"xl"} color={"white"}>{cuaca.feelslike}°C</Text>
                                </HStack>
                            ):(
                                <>
                                </>
                            )}
                            <Link href={{ pathname: "/Notifications" }} asChild>
                                <TouchableOpacity activeOpacity={0.5} >
                                    <Box mr={"3"}>
                                        <Ionicons name="notifications" size={30} color={"white"}/>
                                    </Box>
                                </TouchableOpacity>
                            </Link>
                        </HStack>
                    ):(
                        <>
                        </>
                    )}
                    
                </HStack>
            </Box>
        </SafeAreaView>
    );
};
export default header
