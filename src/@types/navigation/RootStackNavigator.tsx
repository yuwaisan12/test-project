import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import HomeScreen from "../../screens/HomeScreen";
import SettingScreen from "../../screens/SettingScreen";
import AboutScreen from "../../screens/AboutScreen";
import AlarmScreen from "../../screens/AlarmScreen";
import AlarmScreenDetail from "../../screens/AlarmDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootStackNavigator = () => {
return(
    <Stack.Navigator initialRouteName={'HomeScreen'}>
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'SettingScreen'} component={SettingScreen} />
      <Stack.Screen name={'AboutScreen'} component={AboutScreen} />
      <Stack.Screen name={'AlarmScreen'} component={AlarmScreen} />
      <Stack.Screen name={'AlarmDetailScreen'} component={AlarmScreenDetail} />
    </Stack.Navigator>
)
}