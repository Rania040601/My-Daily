
import React from "react";
import { View, Text, Box, VStack, HStack, Divider, Switch } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import  Header  from "../components/Header";
import { useNavigation } from "expo-router";
import { TouchableOpacity, TouchableOpacityBase } from "react-native";
// import { Header } from "../components";

const settings = () => {
    const navigation = useNavigation();
    const handleAboutUsPress = () => {
      navigation.navigate('AboutUs');
    };
    return (
      
      // <View p={4}>
      <>
        <Header title={`Setting`} withback="true" />
        <Box p={4}>
          <VStack space={4}>
            <VStack>
              <Box>
                <Text underline={1}fontSize={"lg"} bold={1}>Profile</Text>
              </Box>
              <HStack justifyContent="space-between" alignItems="center">
                <Text>Dark Mode</Text>
                <Switch size="lg" />
              </HStack>
              <Divider />
            </VStack>
            <VStack>
              <Box>
                <Text underline={1}fontSize={"lg"} bold={1}>Notifikasi</Text>
              </Box>
              <Box width={"full"} h={"12"} justifyContent={"center"}>
                <Text>Audio</Text>
              </Box>
              <Divider />
              <HStack justifyContent="space-between" alignItems="center">
                <Text>Dark Mode</Text>
                <Switch size="lg" />
              </HStack>
              <Divider />
            </VStack>
            <VStack>
              <Box>
                <Text underline={1}fontSize={"lg"} bold={1}>Extra</Text>
              </Box>
              <TouchableOpacity>
                <Box width={"full"} h={"12"} justifyContent={"center"}>
                  <Text>Bantuan</Text>
                </Box>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity>
                <Box width={"full"} h={"12"} justifyContent={"center"}>
                  <Text>Tentang Kamu</Text>
                </Box>
              </TouchableOpacity>
              <Divider />
            </VStack>
            
            {/* <HStack justifyContent="space-between" alignItems="center">
              <Text>Notification</Text>
              <Switch size="lg" />
            </HStack>
            
            <HStack justifyContent="space-between" alignItems="center">
              <Text>Theme</Text>
              <Ionicons name="color-palette-outline" size={24} />
            </HStack>
            <Divider />
            <HStack justifyContent="space-between" alignItems="center">
              <Text onPress={handleAboutUsPress}>About Us</Text>
              <Ionicons name="information-circle-outline" size={24} />
            </HStack>
            <Divider /> */}
          </VStack>
        </Box>
        
      </>
        
      // </View>
    );
  };

export default settings;