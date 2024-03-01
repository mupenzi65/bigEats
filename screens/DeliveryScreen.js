import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/RestaurantSlice'
import { XMarkIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress'
import MapView,{Marker} from 'react-native-maps';
const DeliveryScreen = () => {
    const navigation=useNavigation()
    const restaurant=useSelector(selectRestaurant)
  return (
    <View className='bg-[#00CCBB] flex-1'>
      <SafeAreaView className="">
        <View className='flex-row justify-between items-center p-5'>
         <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <XMarkIcon color='white' size={30} />
         </TouchableOpacity>
         <Text className='font-light text-lg text-white'>Order Help</Text>
        </View>
       
            <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
                <View className='flex-row justify-between'>
                <View>
                <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                <Text className='text-4xl font-bold'>25-35 Minutes</Text>
                </View>
                <Image source={{uri:"https://links.papareact.com/fls"}} className='w-20 h-20' />
                </View>
                <Progress.Bar size={30} color='#00CCBB' indeterminate={true} />
                <Text className='mt-3 text-gray-500'>
                    Your order at {restaurant.title} is being prepared
                </Text>
               
            </View>
          
         
   

      </SafeAreaView>
      <MapView
            style={{flex:1}}
            initialRegion={{
                latitude:restaurant.lat,
                longitude:restaurant.long,
                latitudeDelta:0.005,
                longitudeDelta:0.005,
            }}
            className=" mt-10"
            mapType='mutedStandard'
            
            
            >


            </MapView>
    </View>
  )
}

export default DeliveryScreen