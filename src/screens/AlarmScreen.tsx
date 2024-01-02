import React, { FC, useState } from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RootStackScreenProps } from '../@types/navigation/type';


type Props = RootStackScreenProps<'AlarmScreen'>

const AlarmScreen: FC<Props> = ({navigation,route}) => {
  const [selectedTime, setSelectedTime] = useState<Date | undefined>(undefined);
  const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
  

  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || selectedTime || new Date();
    setShowTimePicker(false);
    setSelectedTime(currentDate);
  };

  const showPicker = () => {
    setShowTimePicker(true);
  };

  const setAlarm = () => {
    console.log('selected time', selectedTime);
    navigation.navigate('AlarmDetailScreen', { selectedTime:selectedTime! });
  };

  return (
    <View>
      <Text>Select Alarm Time: {selectedTime?.toLocaleTimeString()}</Text>
      <Button title="Set Time" onPress={showPicker}  />
      {showTimePicker && (
        <DateTimePicker
          value={selectedTime || new Date()}
          mode="time"
          is24Hour={false}
          display="default"
          // onChange={(selectedTime) => onChange(selectedTime)}
          onChange={onChange}
        />
      )}
      <Button title="Set Alarm" onPress={setAlarm} />
    </View>
  );
};

export default AlarmScreen;




// import { Text, View } from "react-native"

// const AlarmScreen  = () => {
//     return(
//         <View>
//             <Text>This is AlarmScreen</Text>
//         </View>
//     )
// }

// export default AlarmScreen