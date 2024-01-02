import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { RootStackScreenProps } from '../@types/navigation/type';

type Props = RootStackScreenProps<'AlarmDetailScreen'>

const AlarmScreenDetail: FC<Props> = ({ navigation,route }) => {
  const { selectedTime } = route.params;
  console.log('result',selectedTime)

  return (
    <View>
      <Text>Alarm Screen Detail</Text>
      <Text>Selected Time: {selectedTime?.toLocaleTimeString()}</Text>
    </View>
  );
};

export default AlarmScreenDetail;
