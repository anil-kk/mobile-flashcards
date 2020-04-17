import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const LOCAL_NOTIFICATION_KEY = 'LOCAL_NOTIFICATION_key'


const createLocalNotification = () => {
    return {
      title: 'It is time to play',
      body: 'Do not forget to play Quiz',
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      },
      ios: {
        sound: true,
      }
    };
  };

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(LOCAL_NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
};

export const setLocalNotification = () => {
  AsyncStorage.getItem(LOCAL_NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let aDay = new Date();
            aDay.setDate(aDay.getDate() + 1);
            aDay.setHours(8);
            aDay.setMinutes(30);

            Notifications.scheduleLocalNotificationAsync(createLocalNotification(), {
              time: aDay,
              repeat: 'day',
            });

            AsyncStorage.setItem(LOCAL_NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
};
