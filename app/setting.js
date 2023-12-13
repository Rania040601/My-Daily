import React from "react";
import { View, Text, Box, VStack, HStack, Divider, Switch } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
// import { Header } from "../components";

const Video = () => {
    const navigation = useNavigation();
    const handleAboutUsPress = () => {
      navigation.navigate('AboutUs');
    };
    return (
      <View p={4}>
        <VStack space={4}>
          <HStack justifyContent="space-between" alignItems="center">
            <Text>Notification</Text>
            <Switch size="lg" />
          </HStack>
          <Divider />
          <HStack justifyContent="space-between" alignItems="center">
            <Text>Theme</Text>
            <Ionicons name="color-palette-outline" size={24} />
          </HStack>
          <Divider />
          <HStack justifyContent="space-between" alignItems="center">
            <Text onPress={handleAboutUsPress}>About Us</Text>
            <Ionicons name="information-circle-outline" size={24} />
          </HStack>
          <Divider />
        </VStack>
      </View>
    );
  };
  
export default Video;