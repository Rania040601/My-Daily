import { Heading, Center, Box, VStack, HStack, Text,Checkbox, FlatList, Modal } from "native-base";
import  Header from "../../components/Header";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import Firebase from "../../firebase";
import moment from 'moment';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";

const Calender = () => {
    const [dataTask, setDataTask] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState({});
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        getUserData();
    },[]);
    const getUserData = async () => {
        try {
            const value = await AsyncStorage.getItem("user-data");
            if (value !== null) {
                const valueObject = JSON.parse(value);
                setUserData(valueObject);
                fetchDataTask(valueObject);
          }
        } catch (e) {
            console.error(e);
        }
    };
    
    const fetchDataTask = (userData) => {
        try {
            const uid = userData.credential.user.uid;
            const dataRef = Firebase.database().ref("Task/" + uid);
            dataRef.once("value").then((snapshot) => {
                const dataValue = snapshot.val();
                if (dataValue != null) {
                    const snapshotArr = Object.entries(dataValue).map((item) => {
                        return {
                            id: item[0],
                            ...item[1],
                        };
                    });
                setDataTask(snapshotArr);
                }
                // setIsLoading(false);
            }).catch((e) => {
                console.error(e);
            });
        } catch (e) {
            console.error(e);
        }
    };
    const Tugas = (judul, tanggal, jam, catatan) => {
        return (
            <>
                {dataTask ? (
                    <Box bg={"#FF7A01"} p={"5"} rounded={"lg"}>
                        <VStack>
                            <HStack justifyContent={"space-between"} alignItems={"center"}>
                                <HStack alignItems={"center"}>
                                    <Ionicons name="calendar" color={"white"} size={15} />
                                    <Text>  </Text>
                                    <Text color="white" >{tanggal}</Text>
                                    <Text>  </Text>
                                    <Ionicons name="alarm" color={"white"} size={15} />
                                    <Text color="white" >{jam}</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                        <VStack>
                            <HStack justifyContent={"space-between"} alignItems={"center"}>
                                <TouchableOpacity onPress={() => setShowModal(true)} >
                                    <HStack alignItems={"center"}>
                                        <Heading color={"white"}> {judul} </Heading>
                                    </HStack>
                                </TouchableOpacity>
                                <HStack space={"2xl"}>
                                    <Checkbox rounded={"xl"} borderColor={"white"} bgColor={"#FF7A01"} size={"lg"} />
                                </HStack>
                            </HStack>
                        </VStack>
                    </Box>
                ) : (
                    <Center flex={1}>
                        <Heading>Todo</Heading>
                    </Center>
                )}
                <CustomModal showModal={showModal} setShowModal={setShowModal} judul={judul} tanggal={tanggal} jam={jam} isi={catatan} />
            </>
        );
    };
    const CustomModal = ({ showModal, setShowModal, judul, tanggal, jam, isi }) => {
        return (
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content position={"relative"}>
                    <Modal.Body>
                        <Box>
                            <Box alignItems={"center"}>
                                <TouchableOpacity onPress={() => { setShowModal(false) }}>
                                    <Box bgColor={"#FF7A01"} rounded={"full"} alignItems={"center"} >
                                        <Ionicons name="close" color={"white"} size={30} />
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                            <Heading> {judul} </Heading>
                            <HStack alignItems={"center"} space={1}>
                                <Text>Date line :</Text>
                                <HStack alignItems={"center"} space={2} >
                                    <Ionicons name="calendar" color={"black"} size={15} />
                                    <Text color="black" > {tanggal} </Text>
                                </HStack>
                                <HStack alignItems={"center"} space={2} >
                                    <Ionicons name="alarm" color={"black"} size={15} />
                                    <Text color="black" > {jam} </Text>
                                </HStack>
                            </HStack>
                            <Text> {isi} </Text>
                            <Box alignItems={"center"} >
                                <TouchableOpacity onPress={() => { setShowModal(false) }}>
                                    <Box w={"10"} bgColor={"#FF7A01"} rounded={10} alignItems={"center"} >
                                        <Text fontSize={"xl"} color={"white"}>ok</Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        );
    };
    const formatDate = (dateString) => {
        const date = moment(dateString, 'MM/DD/YYYY, h:mm:ss A').format('DD/MM/YYYY');
        return date;
    };
    const formatTime = (dateString) => {
        const date = moment(dateString, 'MM/DD/YYYY, h:mm:ss A').format('h:mm:ss');
        return date;
    };
    const markedDates = {};
    dataTask.map((item) => {
        const deadlineDate = moment(item.Date, 'MM/DD/YYYY, h:mm:ss A').format('YYYY-MM-DD');
        markedDates[deadlineDate] = { selected: true, disableTouchEvent: false, selectedColor: '#FF7A01' };
    });
    const handleDayPress = (day) => {
        const selectedDateString = day.dateString;
        setSelectedDate(selectedDateString);
        const selectedItems = dataTask.filter((item) => {
          const deadlineDate = moment(item.Date, 'MM/DD/YYYY, h:mm:ss A').format('YYYY-MM-DD');
          return deadlineDate === selectedDateString;
        });
    
        setSelectedItems(selectedItems);
      };
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
                    arrowColor:'#FF7A01',
                }} markedDates={markedDates} onDayPress={handleDayPress} />
            </Box>
            {/* <Box bg={"#FF7A01"} p={"5"} rounded={"lg"} margin={10}>
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
            </Box> */}
            <Box margin={10}>
                <FlatList data={selectedItems} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => <React.Fragment>
                    {Tugas(item.judul,formatDate(item.Date),formatTime(item.Date),item.Catatan)}
                </React.Fragment> }/>
            </Box>
            
        </>
    );
};
export default Calender;