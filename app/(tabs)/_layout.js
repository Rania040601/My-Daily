import { Tabs } from "expo-router/tabs";
import {Text} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
const noHead = {headerShown:false};
const TabsLayout = () => {
    return(
        <Tabs screenOptions={({route}) => ({
            tabBarIcon:({focused,color})=>{
                let iconname;
                switch (route.name){
                    case "Todo":
                        iconname = "reorder-four";
                        break;
                    case "Category":
                        iconname = "grid";
                        break;
                    case "Calender":
                        iconname = "today";
                        break;
                    case "Profile":
                        iconname = "person";
                        break;
                }return(
                    <Ionicons name={iconname} size={30} color={focused?"black":color}></Ionicons>
                );
            },tabBarStyle:{height: 70,},
            tabBarLabel:({children,color,focused})=>{
                return(
                    <Text mb={"2"} color={focused? "black" : color} fontSize={"sm"}> {children} </Text>
                );
            }
        })}>
            <Tabs.Screen name="Todo" options={{title: "To do",...noHead}} />
            <Tabs.Screen name="Category" options={{title: "Category",...noHead}} />
            <Tabs.Screen name="Calender" options={{title: "Calender",...noHead}} />
            <Tabs.Screen name="Profile" options={{title: "Profile",...noHead}} />
        </Tabs>
    );
};
export default TabsLayout;
{/* <ion-icon name="calendar-clear-outline"></ion-icon> */}
<ion-icon name="calendar-clear"></ion-icon>