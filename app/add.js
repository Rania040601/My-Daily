import { Heading, Center, Button, Box, FormControl, Input, View, Divider, Stack, Text, HStack, VStack  } from "native-base";
import { useLocalSearchParams } from "expo-router";
import Icon from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import  Header  from "../components/Header";
import React, {useState,useEffect} from "react";
import  DateTimePicker  from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";



const Video = () => {
    const params = useLocalSearchParams();
    const [date,setDate] = useState (new Date());

    const [showDate,setShowDate] = useState(false);
    const [showTime,setShowTime] = useState(false);
    const [open,setOpen] = useState(false);
    const [value,setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Personal', value: 'Personal'},
        {label: 'Collage', value: 'Collage'},
        {label: 'Home', value: 'Home'},
    ]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(false); // Sembunyikan picker setelah memilih
        setShowTime(false);
        setDate(currentDate);
    };
    const showDateTimePicker = () => {
        setShowDate(true);

    };
    const showDateTimePicker1 = () => {
        setShowTime(true);
    };
    const formattedDate = () => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    const formattedTime = () => {
        return `${date.getHours()}:${date.getMinutes()}`;
    };
    const jadwal = () =>{
        
    };
    const Note = () => {
        
    };
    return (
        <>
            <Header title={`tambah ${params.category}`} withback="true" />
            <Center flex={1}>
                <Box bgColor={"gray.300"} width={"96"} p={5} rounded={20}>
                    {params.category === "jadwal" ? (
                        <FormControl>
                            <VStack space={4}>
                                <HStack alignItems={"center"} space={3}>
                                    <Box w={"40"}>
                                        <Input variant={"underlined"} placeholder="Tambahkan judul" fontSize={"lg"} borderColor={"black"} />
                                    </Box>
                                    <Ionicons name="pencil" color={"black"} size={25}/>
                                </HStack>
                                <HStack space={3}>
                                    <TouchableOpacity onPress={showDateTimePicker}>
                                        <HStack alignItems={"center"}>
                                            <Ionicons name="calendar" color={"black"} size={20}/>
                                            <Box>
                                                <Text> {formattedDate()} </Text>
                                            </Box>
                                        </HStack>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={showDateTimePicker1}>
                                        <HStack alignItems={"center"}>
                                            <Ionicons name="alarm" color={"black"} size={20}/>
                                            <Box>
                                                <Text> {formattedTime()} </Text>
                                            </Box>
                                            <Ionicons name="pencil" color={"black"} size={20}/>
                                        </HStack>
                                    </TouchableOpacity>
                                </HStack>
                                {showDate && (
                                    <DateTimePicker testID="dateTimePicker" value={date} mode="date" is24Hour={true} display="default" onChange={onChange} />
                                )}
                                {showTime && (
                                    <DateTimePicker testID="dateTimePicker" value={date} mode="time" is24Hour={true} display="default" onChange={onChange} />
                                )}
                                <HStack alignItems={"center"}>
                                    <Ionicons name="document-outline" color={"black"} size={30}/>
                                    <Box w={"40"}>
                                        <DropDownPicker open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} theme="LIGHT" placeholder="kategori"/>
                                    </Box>
                                </HStack>
                                <Stack space={"2.5"}>
                                    <Text bold fontSize={"xl"} >Catatan</Text>
                                    <Box w={"80"}>
                                        <Input variant={"outline"} w={"80"} h={"48"} placeholder="Tambahkan judul" fontSize={"lg"} borderColor={"black"}/>
                                    </Box>
                                    <Divider borderColor={"black"}/>
                                    <Text bold fontSize={"xl"} >Lampiran Foto</Text>
                                    <Box w={"80"}>
                                        <Input variant={"outline"} w={"80"} h={"48"} placeholder="Tambahkan judul" fontSize={"lg"} borderColor={"black"}/>
                                    </Box>
                                </Stack>
                                <Box width={"80"} alignItems={"flex-end"}>
                                    <TouchableOpacity>
                                        <Box>
                                            <HStack space={2} alignItems={"center"}>
                                                <Text fontSize={"xl"} color={"#FF7A01"}>Simpan</Text>
                                                <Ionicons name="document" color={"#FF7A01"} size={25}/>
                                            </HStack>
                                        </Box>
                                    </TouchableOpacity>
                                </Box>
                            </VStack>
                            
                        </FormControl>   
                    ):(
                        <FormControl>
                            <VStack space={4}>
                                <Stack space={"2.5"}>
                                    <Text bold fontSize={"xl"} >Catatan</Text>
                                    <Box w={"80"}>
                                        <Input variant={"outline"} w={"80"} h={"64"} placeholder="Tambahkan judul" fontSize={"lg"} borderColor={"black"}/>
                                    </Box>
                                    <Divider borderColor={"black"}/>
                                    <Text bold fontSize={"xl"} >Lampiran Foto</Text>
                                    <Box w={"80"}>
                                        <Input variant={"outline"} w={"80"} h={"64"} placeholder="Tambahkan judul" fontSize={"lg"} borderColor={"black"}/>
                                    </Box>
                                </Stack>
                                <Box width={"80"} alignItems={"flex-end"}>
                                    <TouchableOpacity>
                                        <Box>
                                            <HStack space={2} alignItems={"center"}>
                                                <Text fontSize={"xl"} color={"#FF7A01"}>Simpan</Text>
                                                <Ionicons name="document" color={"#FF7A01"} size={25}/>
                                            </HStack>
                                        </Box>
                                    </TouchableOpacity>
                                </Box> 
                            </VStack>
                             
                        </FormControl>
                    )}
                </Box>
            </Center>
            
            
    
        </>
    );
};
export default Video;