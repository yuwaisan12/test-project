import { format } from "date-fns"
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import DateTimePicker from "react-native-modal-datetime-picker"
type Alarm = {
    id:number
    time:string
}

let alarms:Alarm[] = [
    {
        id:1,
        time:'8:00 AM'
    },
    {
        id:2,
        time:'3:00 AM'
    }
]

const NewHomeScreen  = () => {
    const [isDateTimePickerVisible,setIsDateTimePickerVisible] =  useState(false)
    const [selectedTime,setSelectedTime] = useState('')
    const handleAddAlarm = () => {
        setIsDateTimePickerVisible(true)
    }

    const handleHideDateTimePicker = () => {
   setIsDateTimePickerVisible(false)
    }

    const handleShowDateTimePicker = (date:Date) => {
        const formattedTime = format(date,'yyyy-MM-dd HH:mm:ss')
        const updatedAlarms = [...alarms,{id:alarms.length +1,time:formattedTime}]

        setSelectedTime(formattedTime)
        handleHideDateTimePicker()
        setAlarms(updatedAlarms)
    }
    const setAlarms = (updatedAlarms:Alarm[]) => {
     alarms = updatedAlarms
    }
    return(
        <View>
            <Text>Hello, welcome from the new home page</Text>
            <TouchableOpacity onPress={handleAddAlarm}>
                <Text>Add Alarms</Text>
            </TouchableOpacity>
            <DateTimePicker 
            isVisible={isDateTimePickerVisible}
            onCancel={handleHideDateTimePicker}
            onConfirm={handleShowDateTimePicker}
            mode="time"
            />
        </View>
    )
}