import React from "react";
import {
  View,
  Text,
  Box,
  ScrollView,
  Heading,
  Avatar,
  HStack,
  Pressable,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  const navigation = useNavigation();

  const handleSettingsPress = () => {
    navigation.navigate("settings");
  };
  const handleLoginPress = () => {
    navigation.navigate("login");
  };

  return (
    <ScrollView>
      <Box flex={1} bgColor="#F5F7F8" alignItems="center">
        <Box flex={1} alignItems="center">
          <Heading marginTop={30} fontSize={22}>
            PROFILE
          </Heading>
          <Avatar
            bg="green.500"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
            size={58}
          ></Avatar>
        </Box>
        <Box
          flex={1}
          marginTop={20}
          width={"100%"}
          paddingBottom={"100%"}
          borderTopLeftRadius={50}
          borderTopRightRadius={50}
          backgroundColor="white"
        >
          <Box alignItems="center" marginTop={18}>
            <Heading color="#545454" fontSize={25}>
              
            </Heading>
          </Box>
          <HStack marginTop={25} flex={1} width={"100%"}>
            <Pressable
              flex={1}
              alignItems="center"
              onPress={handleSettingsPress}
            >
              <Box
                backgroundColor="#F4CE14"
                width={20}
                height={20}
                rounded={50}
                alignItems="center"
                justifyContent="center"
              >
                <Ionicons name="settings-outline" size={28} color="white" />
              </Box>
              <Text>Setting</Text>
            </Pressable>
            <Pressable flex={1} alignItems="center" onPress={handleLoginPress}>
              <Box
                backgroundColor="#ED2B2A"
                width={20}
                height={20}
                rounded={50}
                alignItems="center"
                justifyContent="center"
              >
                <Ionicons name="log-out-outline" size={28} color="white" />
              </Box>
              <Text>Sign Out</Text>
            </Pressable>
          </HStack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Profile;
