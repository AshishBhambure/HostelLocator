import React, { useEffect, useState } from 'react';
import {View, Text, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {ArrowPathIcon, ArrowRightStartOnRectangleIcon, CircleStackIcon, HomeIcon, MapPinIcon, UserCircleIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import { SvgUri } from 'react-native-svg'; // Import for rendering SVGs
import { getData } from './utils/getAndSetData';
import { setBasicInfo, setHostelInfo, setLocationInSlice, setPictures, setUpdate } from './slices/hostelFormSlice';
import { useDispatch } from 'react-redux';

function DrawerContent(props) {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getData('user');
      console.log("Result -- >", res);
      setUser(res);
    };
    fetchUser();
  }, []);

  const navigation = useNavigation(); // Using the useNavigation hook

  return (
    <View style={{flex: 1}}>
      {user && (
        <View
         className='py-2 '
        >
          <View
            style={{flexDirection: 'row', alignItems: 'center', gap: 8}} // Replace className with inline style
          >
            {/* Check if user.image contains 'svg', if so, render SvgUri */}
            {user.image.includes('svg') ? (
              <View
               className=' rounded-full px-2 object-contain '
              >
                <SvgUri
                uri={user.image} // Display SVG if the image URI is an SVG
                height={50}
                width={50}
              />
                </View>
              
            ) : (
              <Image
                source={{uri: user.image}} // Display regular image otherwise
                style={{height: 50, width: 50}} // Replace height/width props with style
              />
            )}

            <View className='flex-1 flex-row gap-x-2 '>
              <Text style={{color: 'black', fontWeight: 'bold'}}>{user.firstName}</Text>
              <Text style={{color: 'black'}}>{user.lastName}</Text>
            </View>

           
          </View>
          <View
           className='px-2'
          >
              <Text
               className='text-black'
              >{user.email}</Text>
              </View>
        </View>
      )}
      
      <DrawerContentScrollView>
        {/* Home Drawer Item */}
        <DrawerItem
          label="Home"
          icon={() => (
            <HomeIcon
              color={'black'}
              size={24} 
            />
          )}
          onPress={() => navigation.navigate('Home')} // Navigate to 'Home'
        />

        {/* Profile Drawer Item */}
        <DrawerItem
          label="Profile"
          icon={() => (
            <UserCircleIcon
              color={'black'}
              size={24}
            />
          )}
          onPress={() => navigation.navigate('Profile')} // Navigate to 'Profile'
        />

        <DrawerItem
          label="GetLocation"
          icon={() => (
            <MapPinIcon
              color={'black'}
              size={24}
            />
          )}
          onPress={() => navigation.navigate('GetLocation')} // Navigate to 'Profile'
        />

        {
            user && user.accountType === 'Hostel' &&(
              <DrawerItem
              label="Register Hostel "
              icon={() => (
                <CircleStackIcon
                  color={'black'}
                  size={24}
                />
              )}
              onPress={() => {navigation.navigate('RegisterHostel'); dispatch(setUpdate(false));dispatch(setPictures({}));dispatch(setLocationInSlice({}));dispatch(setHostelInfo({}));dispatch(setBasicInfo({}));}} // Navigate to 'Profile'
            />
               
            )
        }

        {
            user && user.accountType === 'Hostel' &&(
              <DrawerItem
              label="Update  Hostel Ocuupancy Details "
              icon={() => (
                <ArrowPathIcon
                  color={'black'}
                  size={24}
                />
              )}
              onPress={() => navigation.navigate('UpdateHostelDetails')} // Navigate to 'Profile'
            />
               
            )
        }

      </DrawerContentScrollView>

      <DrawerItem
    
       label={'LogOut'}
       icon={()=>(
        <ArrowRightStartOnRectangleIcon
         color={'black'}
         size={24}
        />

       
  )}
      />
    </View>
  );
}

export default DrawerContent;
