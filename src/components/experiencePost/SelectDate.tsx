import { useState } from 'react';
import { View } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const SelectDate = () => {

  const [date, setDate] = useState<Date>(new Date()); // initial date is today

  const onChange = (_: DateTimePickerEvent, selectedDate: Date | undefined) => {
    setDate(selectedDate || date);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
    <DateTimePicker 
      // settings for date picker
      value={date} // the value used in the component 
      mode='date' // the type of the picker
      display='default' // the visual display of the picker
      maximumDate={new Date()} // the maximum date that can be selected
      onChange={onChange} // date change handler
      />
    </View>
  );
}

export default SelectDate;