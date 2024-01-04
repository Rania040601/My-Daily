import { Heading, Center, Button, Box, FormControl, Input, View, Divider, Stack, Text, HStack, VStack, ScrollView, TextArea  } from "native-base";
import { router, useLocalSearchParams } from "expo-router";
import Icon from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import  Header  from "../components/Header";
import React, {useState,useEffect} from "react";
import  DateTimePicker  from "@react-native-community/datetimepicker";
import { Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Firebase from "../firebase";




const add = () => {
    const params = useLocalSearchParams();
    const [date,setDate] = useState (new Date());
    const [showDate,setShowDate] = useState(false);
    const [showTime,setShowTime] = useState(false);
    const [userData, setUserData] = useState({});
    const [open,setOpen] = useState(false);
    const [value,setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Personal', value: 'Personal'},
        {label: 'Collage', value: 'Collage'},
        {label: 'Home', value: 'Home'},
    ]);
    const [image,setImage] = useState(null);
    const [catatan,setCatatan] = useState("");
    const [judul,setJudul] = useState("");
    const [dataKategori,setDataKategori] = useState([]);
    useEffect(() => {
        getUserData();
    },[]);
    const getUserData = async () => {
        try {
            const value = await AsyncStorage.getItem("user-data");
            if (value !== null) {
                const valueObject = JSON.parse(value);
                setUserData(valueObject);
                ambilkategori(valueObject);
                // console.log(dataKategori);
          }
        } catch (e) {
            console.error(e);
        }
    };
    const ambilkategori = (userData) => {
        const uid = userData.credential.user.uid;
        const dataref = Firebase.database().ref("Kategori/"+uid);
        dataref.once("value").then((snapshot) => {
            const dataValue = snapshot.val();
            if (dataValue != null) {
                const snapshotArr = Object.entries(dataValue).map((item) => {
                    return {
                        id: item[0],
                        ...item[1],
                    };
                });
            setDataKategori(snapshotArr);
            }
        })
    };
    const mergedItems = [
        ...items,
        ...dataKategori.map((item) => ({
            label: item.Kategori,
            value: item.Kategori,
        })),
    ];
    const simpanNote = async() => {
        if (image !== null) {
            uploadNoteWithImage()
        } else {
            uploadNoteWithoutImage(catatan,date.toLocaleString())
        }
    };
    const uploadNoteWithImage = async () => {
        const response = await fetch(image);
        const blob = await response.blob();
        const filename = image.substring(image.lastIndexOf('/')+1);
        const ref = Firebase.storage().ref().child(filename);
        try {
            await ref.put(blob);
            adddataNote(catatan,date.toLocaleString(),filename);
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };
    const adddataNote = (note,date,filename) =>{
        const data = {
            Note: note,
            Date:  date,
            Foto:  filename
        };
        // console.log(data);
        const uid = userData.credential.user.uid;
        Firebase.database().ref("Note/" + uid).push(data);
        router.replace("/Todo")
    };
    const uploadNoteWithoutImage = (note, date) => {
        const data = {
            Note: note,
            Date:  date,
            Foto:  null
        };
        // console.log(data);
        const uid = userData.credential.user.uid;
        Firebase.database().ref("Note/" + uid).push(data);
        router.replace("/Todo")
    };
    const simpanJadwal = async() =>{
        // console.log(date,value, catatan,judul,image)
        if (image !== null) {
            uploadTaskWithImage();
        } else {
            uploadTaskWithoutImage(judul,date.toLocaleString(),value,catatan)
        }
        // uploadTaskWithImage();
    };
    const uploadTaskWithImage = async () => {
        const response = await fetch(image);
        const blob = await response.blob();
        const filename = image.substring(image.lastIndexOf('/')+1);
        const ref = Firebase.storage().ref().child(filename);
        try {
            await ref.put(blob);
            adddataTask(judul,date.toLocaleString(),value,catatan,filename);
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };
    const adddataTask = (judul,date,kategori,catatan,filename) =>{
        const data = {
            judul: judul,
            Date:  date,
            Kategori: kategori,
            Catatan: catatan, 
            Foto:  filename,
            Status: false
        };
        // console.log(data);
        const uid = userData.credential.user.uid;
        Firebase.database().ref("Task/" + uid).push(data);
        router.replace("/Todo")
    };
    const uploadTaskWithoutImage = (judul, date, kategori, catatan) => {
        const data = {
            judul: judul,
            Date:  date,
            Kategori: kategori,
            Catatan: catatan, 
            Foto:  null,
            Status: false
        };
        // console.log(data);
        const uid = userData.credential.user.uid;
        Firebase.database().ref("Task/" + uid).push(data);
        router.replace("/Todo")
    };
    const pickimage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect: undefined,
            quality:1,
        });
        if(!result.canceled){
            setImage(result.assets[0].uri);
        }
    };
    const showDatePicker = () => {
        setShowDate(true);
    };
    const showTimePicker = () => {
        setShowTime(true);
    };
    const formattedDate = () => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(false); // Sembunyikan picker setelah memilih
        setShowTime(false);
        setDate(currentDate);
    };
    const formattedTime = () => {
        return `${date.getHours()}:${date.getMinutes()}`;
    };
    const jadwal = () =>{
        return (
            <FormControl>
                <VStack space={4}>
                    <HStack alignItems={"center"} space={3}>
                        <Box w={"40"}>
                            <Input variant={"underlined"}  w={"100%"} placeholder="Tambahkan judul" fontSize={"lg"} multiline textAlignVertical="top" borderColor={"black"} onChangeText={(judul) => setJudul(judul)} />
                        </Box>
                        <Ionicons name="pencil" color={"black"} size={25}/>
                    </HStack>
                    <HStack space={3}>
                        <TouchableOpacity onPress={showDatePicker}>
                            <HStack alignItems={"center"}>
                                <Ionicons name="calendar" color={"black"} size={20}/>
                                <Box>
                                    <Text> {formattedDate()} </Text>
                                </Box>
                            </HStack>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={showTimePicker}>
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
                        <DateTimePicker testID="dateTimePicker" value={date} mode="date" is24Hour={false} display="default" onChange={onChangeDate} />
                    )}
                    {showTime && (
                        <DateTimePicker testID="dateTimePicker" value={date} mode="time" is24Hour={false} display="default" onChange={onChangeDate} />
                    )}
                    <HStack alignItems={"center"}>
                        <Ionicons name="document-outline" color={"black"} size={30}/>
                        <Box w={"40"}>
                            <DropDownPicker open={open} value={value} items={mergedItems} setOpen={setOpen} setValue={setValue} theme="LIGHT" placeholder="kategori"/>
                        </Box>
                    </HStack>
                    <Stack space={"2.5"}>
                        <Text bold fontSize={"xl"} >Catatan</Text>
                            <Box w={"80"}>
                                <TextArea variant={"outline"} borderStyle={"dashed"} w={"100%"} h={64} placeholder="Tambahkan catatan" fontSize={"lg"} borderColor={"black"} size={"lg"} onChangeText={(catatan) => setCatatan(catatan)} />
                            </Box>
                        <Divider borderColor={"black"}/>
                        <Text bold fontSize={"xl"} >Lampiran Foto</Text>
                        <TouchableOpacity onPress={pickimage}>
                            <Box w={"80"} h={"64"} justifyContent={"center"}borderColor={"black"} borderWidth={1} borderStyle={"dashed"} >
                                {image ? (
                                    <Image source={{uri:image}} style={{width: "100%", height: "100%", resizeMode:"contain"}}  />
                                ) : (
                                    <Center flex={1}>
                                        <Text> Tambahkan gambar </Text>
                                    </Center>
                                )}
                            </Box>
                        </TouchableOpacity>
                    </Stack>
                    <Box width={"80"} alignItems={"flex-end"}>
                        <TouchableOpacity onPress={simpanJadwal}>
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
        );
    };
    const Note = () => {
        return(
            <FormControl>
                <VStack space={4}>
                    <Stack space={"2.5"}>
                        <Text bold fontSize={"xl"} >Catatan</Text>
                        <Box w={"80"}>
                            <TextArea variant={"outline"} w={"100%"} borderStyle={"dashed"} h={64} placeholder="Tambahkan catatan" fontSize={"lg"} borderColor={"black"} size={"lg"} onChangeText={(catatan) => setCatatan(catatan)} />
                        </Box>
                        <Divider borderColor={"black"}/>
                        <Text bold fontSize={"xl"} >Lampiran Foto</Text>
                        <TouchableOpacity onPress={pickimage}>
                            <Box w={"80"} h={"64"} justifyContent={"center"}borderColor={"black"} borderWidth={1} borderStyle={"dashed"} >
                                {image ? (
                                    <Image source={{uri:image}} style={{width: "100%", height: "100%", resizeMode:"contain"}}  />
                                ) : (
                                    <Text>Tambahkan gambar</Text>
                                )}
                            </Box>
                        </TouchableOpacity>
                    </Stack>
                    <Box width={"80"} alignItems={"flex-end"}>
                        <TouchableOpacity onPress={simpanNote}>
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
        );
    };
    return (
        <>
            <Header title={`tambah ${params.category}`} withback="true" />
            <ScrollView>
                <Center flex={1}>
                    <Box bgColor={"gray.300"} width={"96"} p={5} rounded={20}>
                        {params.category === "jadwal" ? (
                            jadwal()
                        ):(
                            Note()
                        )}
                    </Box>
                </Center>
            </ScrollView>
        </>
    );
};
export default add;