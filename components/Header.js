import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { Box,HStack,Image,Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import Header from './Header'

const Header = () => {
    return (
      <Header
        placement="center"
        centerComponent={{ text: 'Header Title', style: { color: '#fff' } }}
        containerStyle={{
          backgroundColor: '#4caf50',
          justifyContent: 'space-around',
        }}
      />
    );
  };
  
  export default Header;