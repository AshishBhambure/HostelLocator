import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useForm } from 'react-hook-form';
import DropDown from './DropDown';
import CheckBox from '@react-native-community/checkbox';
import RadioGroup from 'react-native-radio-buttons-group';
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/outline';
import { setStep } from '../../slices/stepSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setHostelInfo } from '../../slices/hostelFormSlice';

const HostelInformation = () => {
  const { handleSubmit } = useForm();
  const [roomType, setRoomType] = useState([]);
  const [wifi, setWifi] = useState(null);
  const [hotWater, setHotWater] = useState(null);
  const [drinkingWater, setDrinkingWater] = useState(null);
  const [hostelType, setHostelType] = useState();
  const [instructions, setInstructions] = useState();

  // Room types options
  const roomOptions = [
    { label: 'Single Bed', value: 'SingleBed' },
    { label: 'Double Beds', value: 'DoubleBeds' },
    { label: '3 Beds', value: 'ThreeBeds' },
    { label: '4 Beds', value: 'FourBeds' },
    { label: '>4 Beds', value: 'MoreThanFourBeds' },
  ];

  // Wifi Radio buttons
  const wifiOptions = [
    { id: '1', label: 'Yes', value: true },
    { id: '2', label: 'No', value: false },
  ];

  // Hot water Radio buttons
  const hotWaterOptions = [
    { id: '1', label: 'Yes', value: true },
    { id: '2', label: 'No', value: false },
  ];

  // Drinking water Radio buttons
  const drinkingWaterOptions = [
    { id: '1', label: 'Yes', value: true },
    { id: '2', label: 'No', value: false },
  ];

  // Handle check/uncheck of the checkbox
  const handleCheckboxChange = (value) => {
    if (roomType.includes(value)) {
      setRoomType(roomType.filter((type) => type !== value));
    } else {
      setRoomType([...roomType, value]);
    }
  };

  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    console.log('Data of Hostel Information', {
      roomType,
      wifi,
      hotWater,
      drinkingWater,
      hostelType,
      instructions
    });
    dispatch(setStep(3));
    dispatch(setHostelInfo({
      roomType,
      wifi,
      hotWater,
      drinkingWater,
      hostelType,
      instructions
    }));
  };

  const HostelType = useMemo(() => [
    { id: '1', label: 'Boys', value: 'Boys' },
    { id: '2', label: 'Girls', value: 'Girls' },
    { id: '3', label: 'Both', value: 'Both' }
  ], []);

  const [selectedId, setSelectedId] = useState(null);

  // Function to handle selection of the hostel type
  const onPressHandler = (newSelectedId) => {
    const selectedItem = HostelType.find(item => item.id === newSelectedId);
    if (selectedItem) {
      setHostelType(selectedItem.value);
      setSelectedId(newSelectedId);
    }
  };

  const { hostelInfo } = useSelector((state) => state.hostelForm);
  
  useEffect(() => {
    if (Object.keys(hostelInfo).length !== 0) {
      setRoomType(hostelInfo.roomType || []);
      setWifi(hostelInfo.wifi);
      setHotWater(hostelInfo.hotWater);
      setDrinkingWater(hostelInfo.drinkingWater);
      setHostelType(hostelInfo.hostelType);
      setInstructions(hostelInfo.instructions || '');
      const selectedHostelType = HostelType.find(item => item.value === hostelInfo.hostelType);
      if (selectedHostelType) {
        setSelectedId(selectedHostelType.id);
      }
    }
  }, [hostelInfo]);

  return (
    <ScrollView
      className="mx-2 bg-white flex-col gap-y-2 my-4 py-2 px-3"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <View>
        <Text className="text-center text-xl font-semibold my-2 text-black">
          Hostel Details
        </Text>
      </View>

      {/* Hostel Type Dropdown */}
      <Text className="text-black py-1 font-semibold">Hostel Type</Text>
      <RadioGroup 
        containerStyle={{ flexDirection: 'row' }}
        labelStyle={{ color: 'black' }}
        radioButtons={HostelType} 
        onPress={(newSelectedId) => onPressHandler(newSelectedId)} 
        selectedId={selectedId} 
      />

      {/* Room Type Checkboxes */}
      <View>
        <Text className="text-black py-1 font-semibold">Room Types</Text>
        <View className="flex-row flex-wrap gap-x-2">
          {roomOptions.map((room, index) => (
            <View key={index} className="flex flex-row items-center">
              <CheckBox
                value={roomType.includes(room.value)}
                onValueChange={() => handleCheckboxChange(room.value)}
                tintColors={{ true: '#4970bf', false: '#4970bf' }}
              />
              <Text className="text-black">{room.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Wifi Availability */}
      <View>
        <Text className="text-black font-semibold">Is Wi-Fi available?</Text>
        <RadioGroup 
          labelStyle={{ color: 'black' }}
          containerStyle={{ flexDirection: 'row' }}
          radioButtons={wifiOptions} 
          onPress={(selectedId) => {
            const selectedOption = wifiOptions.find((opt) => opt.id === selectedId);
            setWifi(selectedOption ? selectedOption.value : null);
          }}
          selectedId={wifiOptions.find(option => option.value === wifi)?.id}
        />
      </View>

      {/* Hot Water Availability */}
      <View>
        <Text className="text-black font-semibold">Is hot water available for bathing?</Text>
        <RadioGroup 
          labelStyle={{ color: 'black' }}
          containerStyle={{ flexDirection: 'row' }}
          radioButtons={hotWaterOptions} 
          onPress={(selectedId) => {
            const selectedOption = hotWaterOptions.find((opt) => opt.id === selectedId);
            setHotWater(selectedOption ? selectedOption.value : null);
          }}
          selectedId={hotWaterOptions.find(option => option.value === hotWater)?.id}
        />
      </View>

      {/* Purified Drinking Water */}
      <View>
        <Text className="text-black font-semibold">Is purified drinking water available?</Text>
        <RadioGroup 
          containerStyle={{ flexDirection: 'row' }}
          labelStyle={{ color: 'black' }}
          radioButtons={drinkingWaterOptions} 
          onPress={(selectedId) => {
            const selectedOption = drinkingWaterOptions.find((opt) => opt.id === selectedId);
            setDrinkingWater(selectedOption ? selectedOption.value : null);
          }}
          selectedId={drinkingWaterOptions.find(option => option.value === drinkingWater)?.id}
        />
      </View>

      <TextInput
        value={instructions}
        onChangeText={(text) => setInstructions(text)}
        className='border rounded-md border-blue-400 bg-blue-50 text-gray-600 align-text-top'
        placeholder='Add Your Instructions/ Rules of Hostel Here'
        placeholderTextColor={'gray'}
        multiline={true}
        numberOfLines={10}
      />

      {/* Submit Button */}
      <View className='flex-row justify-between py-2 gap-x-2'>
        <TouchableOpacity
          onPress={() => {
            dispatch(setStep(1));
          }}
          className="bg-blue-700 py-2 self-center px-1 border border-black rounded-lg flex-1 flex-row justify-center items-center"
        >
          <ChevronLeftIcon color={'white'} size={16} strokeWidth={4} />
          <Text className="text-white self-center font-semibold text-lg">
            Back
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-blue-700 py-2 self-center px-1 border border-black rounded-lg flex-1 flex-row justify-center items-center"
        >
          <Text className="text-white self-center font-semibold text-lg">
            Next
          </Text>
          <ChevronRightIcon color={'white'} size={16} strokeWidth={4} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HostelInformation;
