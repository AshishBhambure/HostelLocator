import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from './Dashboard';
import Settings from './Settings';
import { View,Text } from 'react-native';

const Drawer = createDrawerNavigator();

export default function Home(){
 return(
    // <NavigationContainer>
    //     <Drawer.Navigator>
    //         <Drawer.Screen 
    //          name='DashBoard'
    //          component={Dashboard}
    //         />
    //         <Drawer.Screen
    //          name='Settings'
    //          component={Settings}
    //         />

    //     </Drawer.Navigator>
    // </NavigationContainer>
    <View>
      <Text
       className='text-black '
      >Hello</Text>
    </View>
 )
}