 import {NativeStackScreenProps} from '@react-navigation/native-stack'
 
 export type RootStackParamList = {
  HomeScreen: undefined;
  SettingScreen: undefined;
  AboutScreen: undefined;
  AlarmScreen: undefined;
  AlarmDetailScreen:{
    selectedTime:Date
  };
 }

 export type  RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,T>