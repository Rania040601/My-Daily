import { Heading, Center, Box, VStack, HStack, Text,Checkbox } from "native-base";
import  Header from "../../components/Header";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Ionicons from "@expo/vector-icons/Ionicons";

const Calender = () => {
    
    return (
        <>
            <Header title={"Calender"} />
            <Box padding={10}>
                <Calendar theme={{
                    backgroundColor: '#F2F2F2',
                    calendarBackground: '#F2F2F2',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#FF7A01',
                    // dayTextColor: '#000000',
                    arrowColor:'#FF7A01'
                }} />
            </Box>
            <Box bg={"#FF7A01"} p={"5"} rounded={"lg"} margin={10}>
                <VStack>
                    <HStack justifyContent={"space-between"} alignItems={"center"}>
                        <HStack alignItems={"center"}>
                            <Ionicons name="calendar" color={"white"} size={15} />
                            <Text>  </Text>
                            <Text color="white" >2023-11-17</Text>
                            <Text>  </Text>
                            <Ionicons name="alarm" color={"white"} size={15} />
                            <Text color="white" >19:00</Text>
                        </HStack>
                    </HStack>
                </VStack>
                <VStack>
                    <HStack justifyContent={"space-between"} alignItems={"center"}>
                        <HStack alignItems={"center"}>            
                            <Heading color={"white"}> halo </Heading>
                        </HStack>
                    </HStack>
                </VStack>
            </Box>
        </>
    );
};
export default Calender;