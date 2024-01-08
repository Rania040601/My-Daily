import { Box, HStack, VStack, Text, View } from "native-base";
import  Header  from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
// import { StyleSheet, Text, View, Button, ScrollView, } from "react-native";

const HelpScreen = () => {
  return (
    <>
      <Header title={`Help`} withback="true" />
      <View style={{height:40}} />
      <Box flex={1} alignItems={"center"}>
        <VStack space={4}>
          <Box width={"80"} rounded={"2xl"} bg={"#FF7A01"} justifyContent={"center"}>
            <HStack alignItems={"center"} space={5}>
              <Ionicons name="bug-outline" size={80} />
              <Text fontSize={"xl"}>Bug Report</Text>
            </HStack>
          </Box>
          <Box width={"80"} rounded={"2xl"} bg={"#FF7A01"} justifyContent={"center"}>
            <HStack alignItems={"center"} space={5}>
              <Ionicons name="help-outline" size={80} />
              <Text fontSize={"xl"} >General Questions</Text>
            </HStack>
          </Box>
        </VStack>
        
      </Box>
    </>
    
    // <View style={styles.container}>
    //   <ScrollView>
    //     <View style={styles.header}>
    //       <Text style={styles.title}>Help</Text>
    //     </View>

    //     <View style={styles.buttonContainer}>
    //       <Button
    //         title="Bug Report"
    //         style={styles.button}
    //       />
    //       <Button
    //         title="General Questions"
    //         style={styles.button}
    //       />
    //     </View>
    //   </ScrollView>
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff",
//     backgroundColor: "#ff8c00",
//   },
//   buttonContainer: {
//     padding: 20,
//     alignItems: "left",
//   },
//   button: {
//     width: 100,
//     height: 40,
//     backgroundColor: "#ff8c00",
//     color: "#fff",
//     borderRadius: 5,
//   },
// });

export default HelpScreen;