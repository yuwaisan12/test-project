import PushNotification from 'react-native-push-notification';

const scheduleAlarm = (date: Date, message: string) => {
  PushNotification.localNotificationSchedule({
    date,
    message,
    channelId: 'alarm-channel',
  });
};

export default scheduleAlarm