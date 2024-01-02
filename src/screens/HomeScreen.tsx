
import React, { FC, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import { RootStackScreenProps } from '../@types/navigation/type';

type Props = RootStackScreenProps<'HomeScreen'>;

const HomeScreen: FC<Props> = ({ navigation, route }) => {
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const [alarms, setAlarms] = useState([
    { id: 1, time: '08:00 AM' },
    { id: 2, time: '12:30 PM' },
    { id: 3, time: '06:45 PM' },
  ]);

  const showDateTimePicker = () => {
    setDateTimePickerVisible(true);
  };

  const handleDatePicker = (date: Date) => {
    const formattedTime = format(date, 'hh:mm a');
    const newAlarm = { id: alarms.length + 1, time: formattedTime };
    setAlarms((prevAlarms) => [...prevAlarms, newAlarm]);
    hideDateTimePicker();
    setSelectedTime(formattedTime);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisible(false);
  };

  const renderAlarmItem = ({ item }: { item: { id: number; time: string } }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ color: 'black' }}>{item.time}</Text>
    </View>
  );

  useEffect(() => {
    const checkAlarm = () => {
      const currentTime = format(new Date(), 'hh:mm a');
      if (selectedTime === currentTime) {
        Alert.alert('Alarm', 'It is time!', [{ text: 'OK' }]);
      }
    };

    const intervalId = setInterval(checkAlarm, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, [selectedTime]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20, color: 'black' }}>Alarms</Text>
      <FlatList data={alarms} keyExtractor={(item) => item.id.toString()} renderItem={renderAlarmItem} />
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
        }}
        onPress={showDateTimePicker}
      >
        <Text style={{ color: 'white' }}>Add Alarm</Text>
      </TouchableOpacity>
      <DateTimePicker isVisible={isDateTimePickerVisible} onConfirm={handleDatePicker} onCancel={hideDateTimePicker} mode="datetime" />
    </View>
  );
};

export default HomeScreen;




//version1
// import React ,{FC, useEffect, useState} from 'react';
// import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
// import { RootStackScreenProps } from '../@types/navigation/type';
// import DateTimePicker from 'react-native-modal-datetime-picker';
// import { format, isSameMinute } from 'date-fns';


// let alarms = [
//   { id: 1, time: '08:00 AM' },
//   { id: 2, time: '12:30 PM' },
//   { id: 3, time: '06:45 PM' },
// ];

// type Props = RootStackScreenProps<'HomeScreen'>

// const HomeScreen: FC<Props> = ({navigation,route}) => {

//   const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false)
//   const [selectedTime, setSelectedTime] = useState('');
  
//   const showDateTimePicker = () => {
//     setDateTimePickerVisible(true)
//   }

//   const handleDatePicker = (date:Date) => {
//     console.log('date',date)
//     const formattedTime = format(date, "hh:mm a");
//     console.log('formatted time',formattedTime)
//     const updatedAlarms = [...alarms, { id: alarms.length + 1, time: formattedTime }];

//     setSelectedTime(formattedTime);
//     hideDateTimePicker();
//     setAlarms(updatedAlarms);
//   }

//  const hideDateTimePicker = () => {
//   setDateTimePickerVisible(false)
//  }

//  const setAlarms = (updatedAlarms: { id: number; time: string }[]) => {  
//   alarms = updatedAlarms;
// };

//   const renderAlarmItem = ({ item }: { item: { id: number; time: string } }) => (
//     <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
//       <Text style={{color:'black'}}>{item.time}</Text>
//     </View>
//   );

//   useEffect(() => {
//     const checkAlarm = () => {
//       const currentTime = format(new Date(), 'hh:mm a');
//       console.log('current time ',currentTime)
//       if (selectedTime === currentTime) {
//         Alert.alert('Alarm', 'It is time!', [{ text: 'OK' }]);
//       }
//     };

//     const intervalId = setInterval(checkAlarm, 60000); // Check every minute

//     return () => clearInterval(intervalId); 
//   }, [selectedTime]);
//   return (
//     <View style={{  justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 20, marginBottom: 20,color:'black'}}>Alarms</Text>
//       <FlatList
//         data={alarms}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderAlarmItem}
//       />
//       <TouchableOpacity
//         style={{
//           marginTop: 20,
//           padding: 10,
//           backgroundColor: 'blue',
//           borderRadius: 5,
//         }}
//         onPress={showDateTimePicker }
//       >
//         <Text style={{ color: 'white' }}>Add Alarm</Text>
//       </TouchableOpacity>
//       <DateTimePicker
//         isVisible={isDateTimePickerVisible}
//         onConfirm={handleDatePicker}
//         onCancel={hideDateTimePicker}
//         mode="datetime" 
//       />
//     </View>
//   );
// };

// export default HomeScreen;

